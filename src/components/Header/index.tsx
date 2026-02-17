import { Container, Nav, NavItem } from "./styled";

function Header() {
  return (
    <Container>
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#contato">Contato</NavItem>
        <NavItem href="#outros">Outros</NavItem>
      </Nav>
    </Container>
  );
}

export default Header;
