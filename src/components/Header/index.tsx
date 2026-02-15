import { HeaderContainer, Logo, Nav, NavItem, WhatsAppButton } from "./styled";

function Header() {
    return (
        <HeaderContainer>
            <Logo>Sther Festas 🎉</Logo>

            <Nav>
                <NavItem href="#">Home</NavItem>
                <NavItem href="#">Temas</NavItem>
                <NavItem href="#">Contatos</NavItem>
            </Nav>

            <WhatsAppButton href="https://wa.me/5521981195853" target="_blank">
            WhatsApp
            </WhatsAppButton>
        </HeaderContainer>
    );
}

export default Header;

