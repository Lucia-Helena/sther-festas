import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  gap: 24px;

  /* ===== Desktop / Tablet ===== */
  grid-auto-flow: column;
  grid-auto-columns: minmax(280px, 1fr);
  overflow-x: auto;
  padding-bottom: 16px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }

  /* ===== Mobile ===== */
  @media (max-width: 640px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    overflow-x: visible;
    scroll-snap-type: none;
  }
`;

export const Card = styled.button<{ $active: boolean }>`
  scroll-snap-align: start;

  background: #fff;
  border-radius: 16px;
  padding: 16px;
  text-align: left;
  cursor: pointer;

  border: ${(props) =>
    props.$active ? "2px solid #25d366" : "1px solid #e0e0e0"};

  transition: transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: scale(0.98);
  }
`;
