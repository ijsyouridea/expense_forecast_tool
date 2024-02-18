import numberInputParser from "../utils/numberInputParser";

export default function CurrencyInput({ name, handler, currencies }) {
  
  
  
  return (
    <div>
      <label style={{ width: "40px", display: "inline-block" }}>{name}</label>
      <input
        placeholder={name}
        type='number'
        value={+currencies[name]||''}
        onInput={(e) =>
          handler((prevValue) => {
            prevValue[name] = numberInputParser(e);
            return { ...prevValue };
          })
        }
      />
    </div>
  );
}
