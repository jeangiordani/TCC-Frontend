import styled from "styled-components";

interface SpinnerProps {
  color?: string;
  size?: number;
}

export const Spinner = styled.div<SpinnerProps>`
  border: 4px solid rgba(255, 255, 255, 0.3); /* Cor mais clara para bordas não girantes */
  border-left-color: ${({ color }) => color || '#fff'}; /* Cor girante definida por prop */
  border-radius: 50%;
  width: ${({ size }) => (size ? `${size}px` : '24px')}; /* Tamanho definido por prop */
  height: ${({ size }) => (size ? `${size}px` : '24px')}; /* Tamanho definido por prop */
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
