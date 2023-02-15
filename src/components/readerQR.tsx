import React, { FC, useRef, Dispatch } from "react";
import { QrReader } from "react-qr-reader";

interface ReaderQRProps {
  scanResultFile: string;
  setScanResultFile: Dispatch<React.SetStateAction<string>>;
}

const ReaderQR: FC<ReaderQRProps> = ({ scanResultFile, setScanResultFile }) => {
  const qrRef = useRef(null);
  const handleErrorFile = (error: string) => {
    console.log(error);
  };
  const handleScanFile = (result: string) => {
    if (result) {
      setScanResultFile(result);
    }
  };
  const onScanFile = () => {
    if (qrRef.current !== null) {
      qrRef.current.openImageDialog();
    }
  };
  return (
    <>
      <button onClick={() => onScanFile}>Scan QR code</button>ç
      <QrReader
        ref={qrRef}
        delay={300}
        style={{ width: "100%" }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
      <h3>Scanned code: {scanResultFile}</h3>
    </>
  );
};

export default ReaderQR;
