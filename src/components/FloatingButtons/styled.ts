import styled from "styled-components";

export const Container = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
display: flex;
flex-direction: column;
gap: 12px;
z-index: 1000;

`;

export const Button = styled.a<{ $bg: string }>`
background-color: ${(props) => props.$bg};
color: white;
padding: 12px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
transition: transform 0.2s;

&:hover {
  transform: scale(1.1);

`;

