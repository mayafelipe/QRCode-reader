import React, { FC, Dispatch, KeyboardEvent, FormEvent } from "react";
import QRCode from "qrcode";

interface InputProps {
  text: string;
  imageUrl: string;
  setText: Dispatch<React.SetStateAction<string>>;
  setImageUrl: Dispatch<React.SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ text, setText, imageUrl, setImageUrl }) => {
  const generateQrCode = async (e: FormEvent) => {
    e.preventDefault();
    if (!text) {
      return alert("Please enter some value");
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
    <form onSubmit={generateQrCode}>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <button type="submit">Generate</button>
      <br />
      {imageUrl != "" && (
        <a href={imageUrl} download={"qr.png"}>
          <img src={imageUrl} alt="img" />
        </a>
      )}
    </form>
  );
};

export default Input;
