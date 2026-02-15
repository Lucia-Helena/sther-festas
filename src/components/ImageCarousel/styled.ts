import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  margin-left: calc(-50 + 50%);
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
