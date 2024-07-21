import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // INPUT STATE

  const [setsCsvFile, setSetsCsvFile] = useState<File | null>(null);
  const [inventoriesCsvFile, setInventoriesCsvFile] = useState<File | null>(
    null
  );
  const [partsCsvFile, setPartsCsvFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    console.log("inputName is :", inputName);
    const file = e.target.files[0];
    console.log("file", file);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Importez vos trois fichiers csv</h1>
        <div className="inputGroup">
          <label className="label" htmlFor="setFileInput">
            Sets:
            <input
              type="file"
              name="sets"
              accept=".csv"
              id="setFileInput"
              style={{ display: "block", marginTop: "8px" }}
              onChange={handleFileChange}
            />
          </label>
          <label className="label" htmlFor="inventoriesFileInput">
            Inventories:
            <input
              type="file"
              name="inventories"
              accept=".csv"
              id="inventoriesFileInput"
              className="inputFile"
            />
          </label>
          <label className="label" htmlFor="partFileInput">
            Parts:
            <input type="file" name="parts" accept=".csv" id="partFileInput" />
          </label>

          {/*      <div>
            <button>Submit</button>
          </div> */}
        </div>
      </header>
    </div>
  );
}

export default App;
