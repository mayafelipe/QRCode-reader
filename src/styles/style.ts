import styled, { css } from 'styled-components';
import { device } from './mediaQueries.style';

interface GridProps {}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-areas:
    'title title title'
    'scan file cam';
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  max-width: 1260px;

  h1 {
    grid-area: title;
    font-size: 1.8rem;
  }
  .form {
    grid-area: scan;
  }
  .file {
    grid-area: file;
  }
  .cam {
    grid-area: cam;
  }
  .form,
  .file,
  .cam {
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
  }
  .cam > section {
    margin: 1rem auto 0;
    width: 80%;
  }
  button,
  .file-upload {
    font-weight: bold;
    padding: 10px;
    outline: none;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    background-color: #ffd700;
    color: #000;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
    text-decoration: none;
  }
  button:hover,
  .file-upload:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    grid-template-rows: 3rem repeat(2, auto) 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'scan'
      'file'
      'cam';
    .cam > section {
      width: 100%;
    }
  }
`;
const Shadow = css`
  box-shadow: 10px 10px 59px -25px rgba(0, 0, 0, 0.75);
`;

interface ContainerProps {
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: auto;
  height: auto;
  input[type='file'] {
    display: none;
  }
  ${({ active }) => active && Shadow}
`;
export const ContainerForm = styled.form<ContainerProps>`
  input[type='Text'] {
    height: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    margin: 0 1rem 0 1rem;
  }
`;
export const ContainerList = styled.div<ContainerProps>`
  span {
    display: block;
    text-align: left;
    margin-left: 1rem;
    line-height: 1.5;
  }
`;
