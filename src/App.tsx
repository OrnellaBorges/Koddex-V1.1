import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { readCsv } from "./utils/readCsv";
import TestFileInput from "./components/TestFileInput";

function App() {
  // INPUT STATE
  const [setsCsvFile, setSetsCsvFile] = useState<File | null>(null);
  const [inventoriesCsvFile, setInventoriesCsvFile] = useState<File | null>(
    null
  );
  const [partsCsvFile, setPartsCsvFile] = useState<File | null>(null);

  useEffect(() => {
    console.log("component is rendered");
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputName = e.target.name; // sets || inventories || parts
      const file = e.target.files?.[0];

      if (file) {
        switch (inputName) {
          case "sets":
            setSetsCsvFile(file);
            break;
          case "inventories":
            setInventoriesCsvFile(file);
            break;
          case "parts":
            setPartsCsvFile(file);
            break;
          default:
            console.warn("unknown file");
        }
      }
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Importez vos trois fichiers csv</h1>
        <div className="inputGroup">
          <TestFileInput labelName="sets" handleFileChange={handleFileChange} />
          <TestFileInput
            labelName="inventories"
            handleFileChange={handleFileChange}
          />
          <TestFileInput
            labelName="parts"
            handleFileChange={handleFileChange}
          />
          <button>READ</button>
        </div>
      </header>
    </div>
  );
}

export default App;
