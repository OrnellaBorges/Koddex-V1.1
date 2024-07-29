import { InventoryType, PartsType, SetsType } from "../../App";
import "./tree.css";
import SetsList from "../setsList/setsList";

type TreeProps = {
  dataSets: SetsType[];
  dataInventory: InventoryType[];
  dataParts: PartsType[];
};

export default function Tree({
  dataSets,
  dataInventory,
  dataParts,
}: TreeProps) {
  return (
    <main className="main">
      <SetsList
        dataSets={dataSets}
        dataInventory={dataInventory}
        dataParts={dataParts}
      />
    </main>
  );
}
