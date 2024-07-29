import { useState } from "react";
import { InventoryType, SetsType, PartsType } from "../../App";
import InventoryList from "../inventoryList/inventoryList";

type SetsListProps = {
  dataSets: SetsType[];
  dataInventory: InventoryType[];
  dataParts: PartsType[];
};

export default function SetsList({
  dataSets,
  dataInventory,
  dataParts,
}: SetsListProps) {
  const [selectedSet, setSelectedSet] = useState<string>("");

  const updateSetId = (setIdClicked: string) => {
    if (setIdClicked === selectedSet) setSelectedSet("");
    else setSelectedSet(setIdClicked);
  };

  const concernedInventory = dataInventory.filter(
    (line) => line.set_id === selectedSet
  );

  const reducedInventories = concernedInventory.filter(
    (inventory, index, self) =>
      index === self.findIndex((item) => item.part_num === inventory.part_num)
  );

  return (
    <ul className="clickableList">
      {dataSets.map((dataSet, index) => (
        <li className="clickableElement" key={`${dataSet._name}-${index}`}>
          <button
            onClick={() => updateSetId(dataSet.set_id)}
            className="button"
          >
            <span className="collapsableIcon">
              {selectedSet === dataSet.set_id ? "-" : "+"}
            </span>
            {dataSet._name}
          </button>
          {selectedSet === dataSet.set_id && reducedInventories.length > 0 && (
            <InventoryList
              reducedInventories={reducedInventories}
              dataParts={dataParts}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
