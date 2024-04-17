import CurrencyInput from "./CurrencyInput";

export default function Rates({ currencies, setCurrencies, currenciesList }) {
  return (
    <div
      className="rates"
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
