import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;

  background: #212329;
  padding: 16px;
  border: 2px solid #212329;
  border-radius: 10px;
  color: #666360;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `};

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `};

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `};

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    border: 0;
    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
