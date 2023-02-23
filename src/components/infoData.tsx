import React, { FC } from 'react';
import { ContainerList } from '../styles/style';

export interface infoDataProps {
  Id: string;
  Product: string;
  Sku: string;
  Price: string;
}

const InfoData: FC<infoDataProps> = ({ Id, Product, Sku, Price }): JSX.Element => {
  return (
    <ContainerList>
      <span>ID: {Id}</span>
      <span>Product: {Product}</span>
      <span>SKU: {Sku}</span>
      <span>Price: {Price}</span>
    </ContainerList>
  );
};

export default InfoData;
