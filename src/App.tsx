import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { readCsv } from "./utils/readCsv";
import TestFileInput from "./components/TestFileInput";

function App() {
  // INPUT STATE
  const [csvData, setCsvData] = useState<string | null>(null);
  useEffect(() => {
    console.log("component is rendered");
  }, []);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputName = e.target.name; // sets || inventories || parts
      console.log("inputName", inputName);
      const file = e.target.files?.[0];

      if (file) {
        // Lire le fichier (par exemple, en utilisant une fonction comme readCsv)
        try {
          const fileContent = await readCsv(file);
          console.log("Fichier lu :", fileContent);
          // Faites quelque chose avec le contenu du fichier
        } catch (error) {
          console.error("Erreur lors de la lecture du fichier :", error);
        }
      }
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Importez vos trois fichiers csv</h1>
        <form className="csvForm">
          <TestFileInput labelName="sets" handleFileChange={handleFileChange} />
          <button type="submit">Parse CSV</button>
        </form>
      </header>
    </div>
  );
}

export default App;
