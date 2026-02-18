import { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  Logo,
  Button,
  Hamburger,
  SideMenu,
  Overlay,
  RightArea,
} from "./styled";

import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Container>
        <Logo src={logo} alt="Sther Festas" />

        {/* NAV DESKTOP */}
        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#temas">Temas</NavItem>
          <NavItem href="#sobre">Sobre</NavItem>
        </Nav>

        <RightArea>
          <Button mobile>Quero montar minha festa</Button>
          <Hamburger onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
         </Hamburger>
       </RightArea>
      </Container>

      {/* OVERLAY */}
      <Overlay open={menuOpen} onClick={closeMenu} />

      {/* SIDE MENU MOBILE */}
      <SideMenu open={menuOpen}>
        <NavItem href="#" onClick={closeMenu}>
          Home
        </NavItem>
        <NavItem href="#temas" onClick={closeMenu}>
          Temas
        </NavItem>
        <NavItem href="#sobre" onClick={closeMenu}>
          Sobre
        </NavItem>

        <Button mobile onClick={closeMenu}>
          Quero montar minha festa
        </Button>
      </SideMenu>
    </>
  );
}

export default Header;
