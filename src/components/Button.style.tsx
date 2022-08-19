import styled from "styled-components";

export interface ButtonInterface{
  primary?: boolean,
  secundary?: boolean,
}
export const Button = styled.button<ButtonInterface>`
  text-transform: uppercase;
  min-width: 270px;
  background-color: ${props=> props.primary ? '#00FFB4': 'white' };
  color: ${props=> props.primary ? 'white': '#00FFB4' };
  border: ${props => props.secundary && '1px solid #00FFB4 '};
  width: 100%;
  padding: 10px 50px;
  border-radius: 9px;


`