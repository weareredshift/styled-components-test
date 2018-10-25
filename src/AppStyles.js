import styled, { css } from 'styled-components';
import { Col, Row } from 'styles/layout';
import { bp } from 'styles/breakpoints';

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;
`;

export const Button = styled.button`
  background-color: ${props => props.color};
  color: black;
  height: 40px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 20px;
  margin: 0 10px;
  outline: none;
  cursor: pointer;

  @media (max-width: ${bp.mlg}px) {
    background: palevioletred;
  }

  ${props => props.inverted && css`
    background-color: ${props => props.theme.yellow};
  `}
`;

export const ColumnComponent = styled(Col)`
  border: 0.1rem solid lightgrey;
  margin-bottom: 4rem;
  padding: 2rem;
`;

export const Container = styled(Row)`
  padding-top: 6rem;
  padding-bottom: 6rem;
`;