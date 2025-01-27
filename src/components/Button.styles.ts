import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success';
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 3rem;
  width: 8rem;
  border-radius: 4px;
  border: 0;
  margin: 4px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white}

  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`