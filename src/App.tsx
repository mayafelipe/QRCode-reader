import React, { useState } from "react";
import "./styles.css";
import Input from "../src/components/input";
import ReaderQR from "./components/readerQR";

export default function App() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  return (
    <div className="App">
      <h1>Generate, download & scan QR Code</h1>
      <Input
        setText={setText}
        text={text}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />
      <ReaderQR
        scanResultFile={scanResultFile}
        setScanResultFile={setScanResultFile}
        scanResultWebCam={scanResultWebCam}
        setScanResultWebCam={setScanResultWebCam}
      />
    </div>
  );
}
