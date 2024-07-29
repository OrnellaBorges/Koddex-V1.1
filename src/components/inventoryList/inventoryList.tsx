import { useState, useEffect } from "react";
import { InventoryType, PartsType } from "../../App";
import PartsList from "../partsList/partsList";
import colorName from "color-name";

type InventoryListProps = {
  reducedInventories: InventoryType[];
  dataParts: PartsType[];
};

export type ColorType = { colorName: string; colorCode: string };

const colorNameTyped: { [key: string]: [number, number, number] } = colorName;

const defaultColorTable: { [key: string]: string } = {
  mediumdarkflesh: "#AC6A47",
  lightbluishgray: "#090909",
  darkbluishgray: "#6E6E6E",
  pearlgold: "#D4AF37",
  brightgreen: "#66FF00",
  flatsilver: "#C0C0C0",
  darktan: "#918151",
  "trans-brightgreen": "#00FF66",
  metallicsilver: "#AAA9AD",
  "trans-yellow": "#FFFF66",
  "trans-clear": "#F0F8FF",
  brightlightblue: "#ADD8E6",
  darkbrown: "#654321",
  sandblue: "#607C8E",
  sandgreen: "#A4C639",
  "trans-lightblue": "#E0FFFF",
  brightlightorange: "#FFA07A",
  mediumlavender: "#D8BFD8",
  brightpink: "#FF69B4",
  pearldarkgray: "#4B515D",
  "trans-red": "#FF6347",
  mediumazure: "#008B8B",
  brightlightyellow: "#FFFFE0",
  darkpurple: "#301934",
  darkpink: "#FF1493",
  yellowishgreen: "#ADFF2F",
  "trans-purple": "#8A2BE2",
  darkazure: "#003366",
  "trans-darkpink": "#FF1493",
  "trans-neongreen": "#39FF14",
};

export default function InventoryList({
  reducedInventories,
  dataParts,
}: InventoryListProps) {
  const [selectedPart, setSelectedPart] = useState<PartsType | null>(null);
  const [currentInventoryItem, setCurrentInventoryItem] =
    useState<InventoryType | null>(null);
  const [convertedColor, setConvertedColor] = useState<ColorType | null>(null);

  const parts = reducedInventories
    .map((inventoryItem) => {
      const part = dataParts.find(
        (partItem) => partItem.part_num === inventoryItem.part_num
      );
      return part ? part : null;
    })
    .filter((part): part is PartsType => part !== null);

  const updatePart = (partClicked: PartsType) => {
    if (selectedPart && partClicked.part_num === selectedPart.part_num) {
      setSelectedPart(null);
      setCurrentInventoryItem(null);
    } else {
      setSelectedPart(partClicked);
    }
  };

  const getColorHex = (
    colorName: string
  ): { colorName: string; colorCode: string } => {
    const colorWithoutSpaces = colorName.replace(/\s+/g, "").toLowerCase();
    const rgb = colorNameTyped[colorWithoutSpaces];
    let colorCode = colorWithoutSpaces;
    if (!rgb) {
      colorCode = defaultColorTable[colorWithoutSpaces];
    }
    return {
      colorName,
      colorCode,
    };
  };

  useEffect(() => {
    if (selectedPart) {
      const foundInventoryItem = reducedInventories.find(
        (item) => item.part_num === selectedPart.part_num
      );
      setCurrentInventoryItem(foundInventoryItem || null);
    } else {
      setCurrentInventoryItem(null);
    }
  }, [selectedPart, reducedInventories]);

  useEffect(() => {
    if (currentInventoryItem) {
      const newColor = getColorHex(currentInventoryItem.color);
      setConvertedColor(newColor);
    }
  }, [currentInventoryItem]);

  return (
    <ul className="clickableList">
      {parts.map((part, index) => (
        <li className="clickableElement" key={`${part._name}-${index}`}>
          <button onClick={() => updatePart(part)} className="button">
            <span className="collapsableIcon">
              {selectedPart && selectedPart.part_num === part.part_num
                ? "-"
                : "+"}
            </span>
            {part._name}
          </button>
          {selectedPart &&
            selectedPart.part_num === part.part_num &&
            currentInventoryItem && (
              <PartsList colorInfos={convertedColor} name={part._name} />
            )}
        </li>
      ))}
    </ul>
  );
}
