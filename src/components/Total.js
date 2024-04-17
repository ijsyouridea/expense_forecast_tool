export default function Total({
  total,
  setTotal,
  currency,
  setCurrency,
  currenciesList
}) {
  return (
    <div>
      <label style={{ width: "70px", display: "inline-block" }}>income</label>
      <input
        placeholder="income"
        value={total}
        onChange={(e) => {
          let value = isNaN(e.target.value) ? 0 : +e.target.value;
          setTotal(value);
        }}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option>choose</option>
        {currenciesList.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}
