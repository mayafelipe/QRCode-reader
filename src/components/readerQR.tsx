import React, { FC, useRef, Dispatch, ChangeEvent, useState, SetStateAction } from 'react';
import QrReader from 'react-qr-reader';
import QrScanner from 'qr-scanner';
import { Container } from '../styles/style';
import InfoData, { infoDataProps } from './infoData';
import { productsMock } from '../mock/mock';

interface ReaderQRProps {
  scanResultFile: string;
  setScanResultFile: Dispatch<SetStateAction<string>>;
  scanResultWebCam: string;
  setScanResultWebCam: Dispatch<SetStateAction<string>>;
}

const ReaderQR: FC<ReaderQRProps> = ({
  scanResultFile,
  setScanResultFile,
  scanResultWebCam,
  setScanResultWebCam,
}): JSX.Element => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [activeQRreader, setActiveQRreader] = useState<boolean>(false);
  const [data, setData] = useState<infoDataProps>();

  const getProductById = (byId: string) => {
    const response = productsMock.find(({ Id }) => Id === byId);
    setData(response);
  };

  const handleChangeScanFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      const result = await QrScanner.scanImage(file);
      setScanResultFile(result);
      console.log(result);
      getProductById(result);
      setScanResultWebCam('');
    }
  };

  const handleScanWebCam = (result: string | null) => {
    if (result) {
      setScanResultWebCam(result);
      getProductById(result);
      setActiveQRreader(false);
      setScanResultFile('');
    }
  };
  const handleErrorWebCam = (error: string | null) => console.log(error);

  const InfoDataComponent: JSX.Element | undefined = data && (
    <InfoData Id={data.Id} Product={data.Product} Sku={data.Sku} Price={data.Price} />
  );
  return (
    <>
      <Container active={scanResultFile != ''} className="file">
        <h3>Scan QR code from a file</h3>
        <label className="file-upload">
          Choose QR
          <input
            ref={fileRef}
            onChange={handleChangeScanFile}
            type="file"
            accept="image/png, image/jgp, image/jpge"
          />
        </label>
        {scanResultFile && (
          <>
            <h3>Scanned code: {scanResultFile}</h3>
            {data ? InfoDataComponent : <span>No data</span>}
          </>
        )}
      </Container>
      <Container active={scanResultWebCam != ''} className="cam">
        <h3>Scan QR Code</h3>
        <button onClick={() => setActiveQRreader(true)}>Scan QR code</button>
        {activeQRreader && (
          <QrReader delay={300} onError={handleErrorWebCam} onScan={handleScanWebCam} />
        )}
        {scanResultWebCam && (
          <>
            <h3>Scanned by WebCam: {scanResultWebCam}</h3>
            {data ? InfoDataComponent : <span>No data</span>}
          </>
        )}
      </Container>
    </>
  );
};

export default ReaderQR;
