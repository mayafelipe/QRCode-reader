import React, { FC, useRef, Dispatch, SyntheticEvent, ChangeEvent, useState } from 'react';
import QrReader from 'react-qr-reader';
import QrScanner from 'qr-scanner';

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
  const fileRef = useRef<any>();
  const handleErrorFile = (error: string) => {
    console.log(error);
  };
  const handleChangeScanFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      const result = await QrScanner.scanImage(file);
      setScanResultFile(result);
      console.log(result);
    }
  };
  const onScanFile = () => {
    fileRef.current.click();
  };
  const handleScanWebCam = (result: string | null) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  const handleErrorWebCam = (error: string | null) => {
    console.log(error);
  };
  return (
    <>
      <div>
        <button onClick={() => onScanFile}>Scan QR code</button>
        <input
          ref={fileRef}
          onChange={handleChangeScanFile}
          type="file"
          accept="image/png, image/jgp, image/jpge"
        />
        <h3>Scanned code: {scanResultFile}</h3>
      </div>
      <div>
        <QrReader
          delay={300}
          style={{ width: '100%' }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
        <h3>Scanned by WebCam: {scanResultWebCam}</h3>
      </div>
    </>
  );
};

export default ReaderQR;
