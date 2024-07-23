import { InputProps } from "../types/inputTypes";

export default function TestFileInput({
  labelName,
  handleFileChange,
}: InputProps) {
  //console.log("labelName", labelName);
  return (
    <label className="label" htmlFor={`${labelName}FileInput`}>
      {labelName}:
      <input
        type="file"
        name={labelName.toLowerCase()}
        accept=".csv"
        id={`${labelName}FileInput`}
        style={{ display: "block", marginTop: "8px" }}
        onChange={handleFileChange}
      />
    </label>
  );
}
