import { ReactNode } from "react";

import { Container } from "./styles";

interface HeaderProps {
  children: ReactNode;
}

function Header() {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
}

export default Header;
