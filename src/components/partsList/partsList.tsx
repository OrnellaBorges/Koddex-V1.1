import { ColorType } from "../inventoryList/inventoryList";

type PartsListProps = {
  colorInfos: ColorType | null;
  name: string;
};

export default function PartsList({ colorInfos, name }: PartsListProps) {
  return (
    <ul className="clickableList">
      <li className="clickableElement">
        <button className="button">name: {name}</button>
      </li>
      <li className="clickableElement">
        <button className="button">
          color: {colorInfos ? colorInfos.colorName : "Color name unknown"}
          <div
            style={{
              backgroundColor: colorInfos ? colorInfos.colorCode : "black",
            }}
            className="picto"
          ></div>
        </button>
      </li>
    </ul>
  );
}
