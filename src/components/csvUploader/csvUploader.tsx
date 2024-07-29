import React, { useState } from "react";
import Papa from "papaparse";
import "./csvUploader.css";

type CsvUploaderProps = {
  setDataSets: React.Dispatch<React.SetStateAction<any[]>>;
  setDataInventory: React.Dispatch<React.SetStateAction<any[]>>;
  setDataParts: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function CsvUploader({
  setDataSets,
  setDataInventory,
  setDataParts,
}: CsvUploaderProps) {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);

  const handleFileChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFiles = [...files];
      newFiles[index] = event.target.files?.[0] || null;
      setFiles(newFiles);
    };

  const handleParseFile = (
    file: File | null,
    setData: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setData(results.data);
        },
      });
    }
  };

  const handleParseFiles = () => {
    handleParseFile(files[0], setDataSets);
    handleParseFile(files[1], setDataInventory);
    handleParseFile(files[2], setDataParts);
  };

  return (
    <header className="header">
      <div className="inputs">
        <label className="label" htmlFor="sets">
          <h6>sets</h6>
          <input
            className="input"
            id="sets"
            type="file"
            accept=".csv"
            onChange={handleFileChange(0)}
          />
        </label>
        <label htmlFor="inventory">
          <h6>inventory</h6>
          <input
            className="input"
            id="inventory"
            type="file"
            accept=".csv"
            onChange={handleFileChange(1)}
          />
        </label>
        <label htmlFor="parts">
          <h6>parts</h6>
          <input
            className="input"
            id="parts"
            type="file"
            accept=".csv"
            onChange={handleFileChange(2)}
          />
        </label>
      </div>
      <button className="button" onClick={handleParseFiles}>
        Convertir
      </button>
    </header>
  );
}
