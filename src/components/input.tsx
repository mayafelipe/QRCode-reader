import React, { FC, Dispatch } from "react";
import QRCode from "qrcode";

interface InputProps {
  text: string;
  imageUrl: string;
  setText: Dispatch<React.SetStateAction<string>>;
  setImageUrl: Dispatch<React.SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ text, setText, imageUrl, setImageUrl }) => {
  const generateQrCode = async () => {
    try {
      const response: string = await QRCode.toDataURL(text);
      setImageUrl(response);
      console.log(text);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <button onClick={() => generateQrCode()}>Generate</button>
      <br />
      {imageUrl != "" && (
        <a href={imageUrl} target="_blank" rel="noreferrer">
          Download
          <img src={imageUrl} alt="img" />
        </a>
      )}
    </>
  );
};

export default Input;
