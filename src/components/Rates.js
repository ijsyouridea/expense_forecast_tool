import CurrencyInput from "./CurrencyInput";

export default function Rates({ currencies, setCurrencies, currenciesList }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        position: "absolute",
        right: "0"
      }}
    >
      {currenciesList.map((currency) => (
        <CurrencyInput
          key={currency}
          name={currency}
          handler={setCurrencies}
          currencies={currencies}
        />
      ))}
    </div>
  );
}
