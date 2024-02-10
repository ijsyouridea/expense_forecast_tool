import numberInputParser from "../utils/numberInputParser";

export default function CurrencyInput({ name, handler, currencies }) {
  return (
    <div>
      <label style={{ width: "40px", display: "inline-block" }}>{name}</label>
      <input
        placeholder={name}
        value={currencies[name] ?? 1}
        onChange={(e) =>
          handler((prevValue) => {
            prevValue[name] = numberInputParser(e);
            return { ...prevValue };
          })
        }
      />
    </div>
  );
}
