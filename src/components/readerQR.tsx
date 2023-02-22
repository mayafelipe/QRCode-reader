import React, { FC, useRef, Dispatch, ChangeEvent, useState } from 'react';
import QrReader from 'react-qr-reader';
import QrScanner from 'qr-scanner';
import { Container } from '../styles/style';

interface ReaderQRProps {
  scanResultFile: string;
  setScanResultFile: Dispatch<React.SetStateAction<string>>;
  scanResultWebCam: string;
  setScanResultWebCam: Dispatch<React.SetStateAction<string>>;
}

const ReaderQR: FC<ReaderQRProps> = ({
  scanResultFile,
  setScanResultFile,
  scanResultWebCam,
  setScanResultWebCam,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [activeQRreader, setActiveQRreader] = useState<boolean>(false);

  const handleChangeScanFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      const result = await QrScanner.scanImage(file);
      setScanResultFile(result);
      console.log(result);
    }
  };

  const handleScanWebCam = (result: string | null) => {
    if (result) {
      setScanResultWebCam(result);
      setActiveQRreader(false);
    }
  };
  const handleErrorWebCam = (error: string | null) => {
    console.log(error);
  };
  return (
    <>
      <Container className="file">
        <label className="file-upload">
          Choose QR
          <input
            ref={fileRef}
            onChange={handleChangeScanFile}
            type="file"
            accept="image/png, image/jgp, image/jpge"
          />
        </label>
        <h3>Scanned code: {scanResultFile}</h3>
      </Container>
      <Container className="cam">
        <button onClick={() => setActiveQRreader(true)}>Scan QR code</button>
        {activeQRreader && (
          <QrReader delay={300} onError={handleErrorWebCam} onScan={handleScanWebCam} />
        )}
        <h3>Scanned by WebCam: {scanResultWebCam}</h3>
      </Container>
    </>
  );
};

export default ReaderQR;
