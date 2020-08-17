import React, { useRef } from "react";
import { EmailsProvider } from "../../hooks/EmailsContext";
import { Avatar, Menu, Button, Emails, Options } from "../../components";
import { Container } from "./style";

const Dashboard: React.FC = () => {
  const refAside = useRef<HTMLAnchorElement>(null);

  function start(e: any) {
    e.preventDefault();
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  }

  function resize(e: any) {
    if (refAside.current) {
      refAside.current.style.width =
        e.pageX - refAside.current.getBoundingClientRect().left + "px";
    }
  }

  function stopResize() {
    window.removeEventListener("mousemove", resize);
  }

  return (
    <Container>
      <EmailsProvider>
        <aside ref={refAside}>
          <header>
            <Avatar />

            <Button>Escrever Email</Button>
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
