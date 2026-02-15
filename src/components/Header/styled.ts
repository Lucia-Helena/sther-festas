import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
height: 72px;
padding: 0 32px;

display: flex;
align-items: center;
justify-content: space-between;

position: fixed;
top: 0;
left: 0;
z-index: 1000;

background-color: rgba(255, 255, 255, 0.9 );
backdrop-filter: blur(8px);
`;

export const Logo = styled.h1`
font-size: 1.4rem;
font-weight: 700;
`;

export const Nav = styled.nav`
display: flex;
gap: 24px;

@media (max-width: 768px) {
 display: nome;
}
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
  color: #ff4d6d
  }
`;

export const WhatsAppButton = styled.a`
  background-color: #25d366;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;