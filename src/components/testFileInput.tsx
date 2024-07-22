export type InputProps = {
  labelName: string;
};

export default function TestFileInput({ labelName }: InputProps) {
  console.log("labelName", labelName);
  return (
    <>
      <label className="label" htmlFor={`${labelName}FileInput`}>
        {labelName}:
        <input
          type="file"
          name={labelName.toLowerCase()}
          accept=".csv"
          id="setFileInput"
          style={{ display: "block", marginTop: "8px" }}
          /* onChange={handleFileChange} */
        />
      </label>
    </>
  );
}
