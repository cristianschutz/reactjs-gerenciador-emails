import React, { useState } from 'react';
import { Input, Button, Checkbox, Select } from '../index';
import { Container } from './style';
import { useEmails } from '../../hooks/EmailsContext';

const Options: React.FC = () => {
  const [filter, setFilter] = useState('0');

  const { emails, pureEmails } = useEmails();

  const checkedEmail = pureEmails.filter((item) => item.checked === true);

  const allEmails = pureEmails.filter(
    (item) => !item.trashed && !item.archieved
  );

  const archievedEmail = pureEmails.filter(
    (item) => item.archieved === true && !item.trashed
  );

  const scheduledEmail = pureEmails.filter(
    (item) => item.scheduled === true && !item.trashed
  );

  const trashedEmail = pureEmails.filter((item) => item.trashed === true);

  const {
    handleSearch,
    handleArchive,
    handleSchedule,
    handleCheckAll,
    handleFilter,
  } = useEmails();

  return (
    <Container>
      <Input
        type="text"
        label="Search"
        name="search"
        onChange={(e: any) => {
          handleSearch(e.target.value);
        }}
      />
      <Select
        name="filter"
        label="Filtro"
        options={[
          {
            label:
              'Todos ' + (allEmails.length ? ' :: ' + allEmails.length : ''),
            value: 0,
          },
          {
            label:
              'Arquivados ' +
              (archievedEmail.length ? ' :: ' + archievedEmail.length : ''),
            value: 1,
          },
          {
            label:
              'Agendados ' +
              (scheduledEmail.length ? ' :: ' + scheduledEmail.length : ''),
            value: 2,
          },
          {
            label:
              'Lixeira ' +
              (trashedEmail.length ? ' :: ' + trashedEmail.length : ''),
            value: 3,
          },
        ]}
        onChange={(e: any) => {
          handleFilter(e.target.value);
          setFilter(e.target.value);
        }}
      />
      <hr />
      {filter === '0' || filter === '' ? (
        <>
          <Checkbox
            name="email[]"
            label={
              checkedEmail.length > 0
                ? checkedEmail.length + ' email(s) selecionados'
                : ''
            }
            checked={checkedEmail.length === emails.length}
            onChange={() => {
              handleCheckAll();
            }}
          />
          <Button
            onClick={() => {
              handleArchive();
            }}
          >
            Arquivar
          </Button>
          <Button
            onClick={() => {
              handleSchedule();
            }}
          >
            Agendar
          </Button>
        </>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Options;
