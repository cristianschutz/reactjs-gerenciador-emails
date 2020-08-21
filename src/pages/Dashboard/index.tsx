import React, { useRef, useEffect } from 'react';
import { EmailsProvider } from '../../hooks/emails';
import { Avatar, Menu, Button, Emails, Options } from '../../components';
import { Container } from './style';
import { useIntl } from '../../hooks/i18n';

const Dashboard: React.FC = () => {
  const refAside = useRef<HTMLAnchorElement>(null);
  const { formatMessage } = useIntl();

  function start(e: any) {
    e.preventDefault();
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
  }

  function resize(e: any) {
    if (refAside.current) {
      refAside.current.style.width = e.pageX + 60 + 'px';
    }
  }

  function stopResize() {
    localStorage.setItem(
      '@emailManager:width',
      refAside?.current?.style.width || '320px'
    );
    window.removeEventListener('mousemove', resize);
  }

  useEffect(() => {
    if (refAside.current) {
      refAside.current.style.width =
        localStorage.getItem('@emailManager:width') || '320px';
    }
  }, []);

  return (
    <Container>
      <EmailsProvider>
        <aside ref={refAside}>
          <header>
            <Avatar />

            <Button>{formatMessage({ id: 'dashboard.send_email' })}</Button>
          </header>
          <Menu />
          <button className="btn-resize" onMouseDown={start}>
            Resize aside
          </button>
        </aside>
        <section>
          <Options />
          <Emails />
        </section>
      </EmailsProvider>
    </Container>
  );
};

export default Dashboard;
