import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button<{ background: string, hoverColor: string }>`
  border: none;
  background-color: ${(props) => props.background};
  
  &:hover {
    background-color: ${(props) => props.hoverColor};
    color:#fff;
    transition: all 0.3s ease;
  }
`;

interface ButtonProps {
  readonly background: string;
  readonly hoverColor: string;
}

const Button: React.FC<React.ButtonHTMLAttributes<any> & ButtonProps> = ({ ...props }) => (
  <ButtonStyle
    background={props.background}
    hoverColor={props.hoverColor}
    type="button"
    {...props}
  >{props.children}
  </ButtonStyle>
);

export default Button;
