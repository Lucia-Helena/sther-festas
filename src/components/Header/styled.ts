import styled from "styled-components";

/* ================= CONTAINER ================= */

export const Container = styled.header`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  background-color: #e8b424;

  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 640px) {
    height: 100px;
    padding: 0 1.25rem;
  }
`;

/* ================= LOGO ================= */

export const Logo = styled.img`
  width: 52px;
  border-radius: 50%;

  @media (max-width: 640px) {
    width: 50px;
  }
`;

/* ================= NAV DESKTOP ================= */

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.3px;

  color: #ffffff;
  text-decoration: none;

  transition: color 0.2s ease;

  &:hover {
    color: #2e2e2e;
  }
`;

/* ================= CTA BUTTON ================= */

export const Button = styled.button<{ mobile?: boolean }>`
  height: 40px;
  padding: 0 1.25rem;

  background-color: #df3b0a;
  color: #ffffff;

  border: none;
  border-radius: 999px;

  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: #c79a1f;
    color: #2e2e2e;
  }

  ${({ mobile }) =>
    mobile &&
    `
   display: flex;
    margin-left: auto;
    width: 100%;
    padding: 10px ;
  }

  `}

  @media (max-width: 640px) {
    display: ${({ mobile }) => (mobile ? "block" : "none")};
    font-size: 13px;
  }
`;

/* ================= HAMBURGER ================= */

export const Hamburger = styled.button`
  display: none;
  width: 28px;
  height: 22px;

  position: relative;
  background: none;
  border: none;
  cursor: pointer;

  span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #df3b0a;
    border-radius: 2px;
    transition: 0.3s ease;
  }

  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 9px;
  }
  span:nth-child(3) {
    bottom: 0;
  }

  @media (max-width: 640px) {
    display: block;
  }
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 640px) {
    gap: 12px;
    padding: 0 3rem;
  }
`;

/* ================= OVERLAY ================= */

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.4);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  transition: 0.3s ease;
  z-index: 150;
`;

/* ================= SIDE MENU ================= */

export const SideMenu = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  width: 260px;
  height: 100vh;

  background-color: #e8b424;

  padding: 96px 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(100%)"};

  transition: transform 0.3s ease-in-out;
  z-index: 200;

  @media (min-width: 641px) {
    display: none;
  }
`;
