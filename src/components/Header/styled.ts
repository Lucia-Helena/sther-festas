import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  border-bottom: 1px solid #eee;

  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 640px) {
    height: 56px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 640px) {
    gap: 20px;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 15px;

  padding: 8px 4px;

  transition: color 0.2s ease;

  &:hover {
    color: #25d366;
  }

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
