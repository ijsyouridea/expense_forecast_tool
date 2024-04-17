export default function CurrencyInput({ name, handler, currencies }) {
  return (
    <div>
      <label style={{ width: "40px", display: "inline-block" }}>{name}</label>
      <input
        placeholder={name}
        value={currencies[name] ?? 1}
        onChange={(e) =>
          handler((prevValue) => {
            let input = e.target.value
            let res= input.match(/[0-9\.]/g)
            let value = res ? res.join('') : 0
            prevValue[name] = value;
            return { ...prevValue };
          })
        }
      />
    </div>
  );
}
