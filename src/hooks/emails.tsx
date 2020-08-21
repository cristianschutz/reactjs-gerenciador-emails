import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { useParams } from 'react-router';
import { api } from '../services/api';

interface IsubMenuItems {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
  checked?: boolean;
  archieved?: boolean;
  scheduled?: boolean;
  trashed?: boolean;
}

interface IEmails {
  id: string;
  subMenuItems?: IsubMenuItems[];
}

interface IEmailsContext {
  id: string;
  emails: IsubMenuItems[];
  pureEmails: IsubMenuItems[];
  handleCheck(inputValue: string): void;
  handleSearch(inputValue: string): void;
  handleArchive(inputValue?: string): void;
  handleSchedule(inputValue?: string): void;
  handleCheckAll(): void;
  handleTrash(inputValue: string): void;
  handleFilter(inputValue: string): void;
}

const EmailsContext = createContext<IEmailsContext>({} as IEmailsContext);

const EmailsProvider: React.FC = ({ children }) => {
  const [pureEmails, setPureEmails] = useState<IsubMenuItems[]>([]);
  const [emails, setEmails] = useState<IsubMenuItems[]>([]);
  const [checkedEmails, setCheckedEmails] = useState<string[]>([]);
  const [archievedEmails, setArchievedEmails] = useState<string[]>(
    JSON.parse(localStorage.getItem('@emailManager:archievedEmails') || '[]')
  );
  const [scheduledEmails, setScheduledEmails] = useState<string[]>(
    JSON.parse(localStorage.getItem('@emailManager:scheduledEmails') || '[]')
  );
  const [trashedEmails, setTrashedEmails] = useState<string[]>(
    JSON.parse(localStorage.getItem('@emailManager:trashedEmails') || '[]')
  );
  let { id } = useParams();
  id = id ? '/' + id : '';

  useEffect(() => {
    localStorage.setItem(
      '@emailManager:archievedEmails',
      JSON.stringify(archievedEmails)
    );
    localStorage.setItem(
      '@emailManager:scheduledEmails',
      JSON.stringify(scheduledEmails)
    );
    localStorage.setItem(
      '@emailManager:trashedEmails',
      JSON.stringify(trashedEmails)
    );

    let array = [...pureEmails];

    array.map((item) => {
      item.checked = checkedEmails.indexOf(item.id) >= 0 ? true : false;
      item.archieved = archievedEmails.indexOf(item.id) >= 0 ? true : false;
      item.scheduled = scheduledEmails.indexOf(item.id) >= 0 ? true : false;
      item.trashed = trashedEmails.indexOf(item.id) >= 0 ? true : false;
      return item;
    });

    setEmails(array.filter((item) => !item.trashed && !item.archieved));
  }, [
    archievedEmails,
    checkedEmails,
    pureEmails,
    scheduledEmails,
    trashedEmails,
  ]);

  const handleCheckAll = useCallback(() => {
    let checked: string[] = [];
    if (checkedEmails.length >= emails.length) {
      setCheckedEmails([]);
    } else {
      emails.map((item) => checked.push(item.id));
      setCheckedEmails(checked);
    }
  }, [checkedEmails.length, emails]);

  const handleArchive = useCallback(
    (id) => {
      if (checkedEmails.length <= 0 && !id) {
        return false;
      }

      if (id) {
        setArchievedEmails([...archievedEmails, id]);
      } else {
        setArchievedEmails([...archievedEmails, ...checkedEmails]);
      }
      setCheckedEmails([]);
    },
    [archievedEmails, checkedEmails]
  );

  const handleSchedule = useCallback(() => {
    if (checkedEmails.length <= 0) {
      return false;
    }

    setScheduledEmails([...scheduledEmails, ...checkedEmails]);
    setCheckedEmails([]);
  }, [checkedEmails, scheduledEmails]);

  const handleTrash = useCallback(
    (id) => {
      setTrashedEmails([...trashedEmails, id]);
      setCheckedEmails([]);
    },
    [trashedEmails]
  );

  const handleCheck = useCallback(
    (id: string) => {
      let filter = [...pureEmails];

      filter.map((item) => {
        if (item.id === id) {
          let index = checkedEmails.indexOf(item.id);
          let array = [...checkedEmails];

          if (index >= 0) {
            array.splice(index, 1);
            setCheckedEmails(array);
          } else {
            setCheckedEmails([...array, id]);
          }
        }

        return item;
      });
    },
    [checkedEmails, pureEmails]
  );

  const handleSearch = useCallback(
    (inputValue) => {
      let filter = pureEmails.filter(
        (item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.subject.toLowerCase().includes(inputValue.toLowerCase())
      );
      setEmails(filter);
    },
    [pureEmails]
  );

  const handleFilter = useCallback(
    (inputValue) => {
      let filter;

      switch (inputValue) {
        case '1':
          filter = pureEmails.filter((item) => item.archieved);
          setEmails(filter.filter((item) => !item.trashed));
          break;
        case '2':
          filter = pureEmails.filter((item) => item.scheduled);
          setEmails(filter.filter((item) => !item.trashed));
          break;
        case '3':
          filter = pureEmails.filter((item) => item.trashed);
          setEmails(filter);
          break;

        default:
          setEmails(
            pureEmails.filter((item) => !item.trashed && !item.archieved)
          );
          break;
      }
    },
    [pureEmails]
  );

  const appendEmailKeys = useCallback(
    (emails: IsubMenuItems[]): IsubMenuItems[] => {
      return emails.map((item) => {
        item.archieved = archievedEmails.indexOf(item.id) >= 0 ? true : false;
        item.scheduled = scheduledEmails.indexOf(item.id) >= 0 ? true : false;
        item.trashed = trashedEmails.indexOf(item.id) >= 0 ? true : false;
        return item;
      });
    },
    [archievedEmails, scheduledEmails, trashedEmails]
  );

  useEffect(() => {
    const featchData = async () => {
      let { data } = await api.get('items' + id);
      if (id) {
        data = appendEmailKeys(data.subMenuItems);
      } else {
        let submenuItems: IsubMenuItems[] = [];
        data.map(
          (item: IEmails) =>
            item.subMenuItems && submenuItems.push(...item.subMenuItems)
        );
        data = appendEmailKeys(submenuItems);
      }
      setPureEmails(data);
      data = data.filter((item: IsubMenuItems) => !item.trashed);
      setEmails(data);
    };
    featchData();
  }, [appendEmailKeys, id]);

  return (
    <EmailsContext.Provider
      value={{
        id,
        emails,
        pureEmails,
        handleCheck,
        handleSearch,
        handleArchive,
        handleSchedule,
        handleCheckAll,
        handleFilter,
        handleTrash,
      }}
    >
      {children}
    </EmailsContext.Provider>
  );
};

function useEmails(): IEmailsContext {
  const context = useContext(EmailsContext);
  if (!context) {
    throw new Error('EmailsContext must be used within a EmailsProvider');
  }
  return context;
}

export { EmailsProvider, useEmails };
