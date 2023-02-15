import React from "react";

const Input = () => {
  const generateQrCode = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input type="text" />
      <button onClick={() => generateQrCode()}>Generate</button>
    </>
  );
};

export default Input;
