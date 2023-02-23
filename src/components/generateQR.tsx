import React, { FC, Dispatch, FormEvent, SetStateAction } from 'react';
import QRCode from 'qrcode';
import { ContainerForm } from '../styles/style';

interface InputProps {
  text: string;
  imageUrl: string;
  setText: Dispatch<SetStateAction<string>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

const GenerateQR: FC<InputProps> = ({ text, setText, imageUrl, setImageUrl }): JSX.Element => {
  const generateQrCode = async (e: FormEvent) => {
    e.preventDefault();
    if (!text) {
      return alert('Please enter some value');
    }
    try {
      const response: string = await QRCode.toDataURL(text);
      setImageUrl(response);
      console.log(text);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContainerForm className="form" onSubmit={generateQrCode}>
      <h3>Generate and download QR Code</h3>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button type="submit">Generate</button>
      <br />
      {imageUrl != '' && (
        <a href={imageUrl} download={'qr.png'}>
          <img src={imageUrl} alt="img" />
        </a>
      )}
    </ContainerForm>
  );
};

export default GenerateQR;
