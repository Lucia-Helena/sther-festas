import { Container, Nav, NavItem, Logo } from "./styled";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Sther Festas" />

      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#contato">Contato</NavItem>
        <NavItem href="#outros">Outros</NavItem>
      </Nav>
    </Container>
  );
}

export default Header;
