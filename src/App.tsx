import React, { useState } from 'react';
import './styles.css';
import Input from './components/generateQR';
import ReaderQR from './components/readerQR';
import { Grid } from './styles/style';

export default function App(): JSX.Element {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  return (
    <Grid className="App">
      <h1>QR Code - POC</h1>
      <Input setText={setText} text={text} imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <ReaderQR
        scanResultFile={scanResultFile}
        setScanResultFile={setScanResultFile}
        scanResultWebCam={scanResultWebCam}
        setScanResultWebCam={setScanResultWebCam}
      />
    </Grid>
  );
}
