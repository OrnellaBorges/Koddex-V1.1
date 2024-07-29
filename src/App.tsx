import { useState } from "react";
import "./App.css";
import CsvUploader from "./components/csvUploader/csvUploader";
import Tree from "./components/tree/tree";

export type SetsType = {
  set_id: string;
  theme: string;
  year: string;
  _name: string;
};

export type InventoryType = {
  color: string;
  part_num: string;
  quantity: string;
  set_id: string;
  _name: string;
};

export type PartsType = {
  category: string;
  part_num: string;
  _name: string;
};

function App() {
  const [dataSets, setDataSets] = useState<SetsType[]>([]);
  const [dataInventory, setDataInventory] = useState<InventoryType[]>([]);
  const [dataParts, setDataParts] = useState<PartsType[]>([]);
  const isAnySets = dataSets.length > 0;

  return (
    <div className="app">
      <CsvUploader
        setDataSets={setDataSets}
        setDataInventory={setDataInventory}
        setDataParts={setDataParts}
      />
      {isAnySets && (
        <Tree
          dataSets={dataSets}
          dataInventory={dataInventory}
          dataParts={dataParts}
        />
      )}
    </div>
  );
}

export default App;
