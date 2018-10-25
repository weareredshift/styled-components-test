import styled from 'styled-components';
import { bp } from 'styles/breakpoints';

export const contentWidth = '120rem';
export const columnCount = 12;
export const gutter = '4rem';

export const pageMargins = `
  max-width: ${contentWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 6rem;
  padding-right: 6rem;
  @media screen (max-width: ${bp.dsm}px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media screen (max-width: ${bp.msm}px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const clearfix = `
  clear: both;

  &:after { clear: both; }

  &:before,
  &:after {
    content: '';
    display: table;
  }
`;

export const Row = styled.div`
  ${pageMargins};
  ${clearfix};
  width: 100%;
  position: relative;
  float: none;
`;

export const Col = styled.div`
  float: ${props => props.last ? 'right' : 'left'};
  margin-right: ${props => props.last ? 0 : gutter};
  width: calc(100% * ${props => props.span} / ${columnCount} - ${gutter} * (1 - ${props => props.span} / ${columnCount}));
`;
