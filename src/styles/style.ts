import styled from 'styled-components';
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
    margin: auto;
    width: 50%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'scan'
      'file'
      'cam';
  }
`;

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  margin: auto;
  button,
  .file-upload {
    font-weight: bold;
    padding: 10px;
    outline: none;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    background-color: #ffd700;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
  }
  button:hover,
  .file-upload:hover {
    opacity: 0.8;
  }
  input[type='file'] {
    display: none;
  }
`;
export const ContainerForm = styled.div<ContainerProps>`
  input[type='Text'] {
    height: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    display: block;
    margin: 0 auto 1rem;
  }
`;
