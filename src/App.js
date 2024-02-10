import "./styles.css";
import { useEffect, useState } from "react";
import Rates from "./components/Rates";
import Total from "./components/Total";
import Spends from "./components/Spends";
import Rest from "./components/Rest";

const currenciesList = ["pln", "eur", "usd"];

export default function App() {
  let [currencies, setCurrencies] = useState({});
  let [total, setTotal] = useState(0);
  let [currency, setCurrency] = useState("");
  let [list, setList] = useState([]);

  useEffect(() => {
    let memory = localStorage.getItem("memory");
    if (memory) {
      let { total, currency, list, currencies } = JSON.parse(memory);
      setCurrencies(currencies);
      setTotal(total);
      setCurrency(currency);
      setList(list);
    }
  }, []);

  return (
    <div className="App">
      <Total {...{ total, setTotal, currency, setCurrency, currenciesList }} />
      <Rates {...{ currencies, setCurrencies, currenciesList }} />
      <Spends {...{ list, setList, currenciesList }} />
      <Rest {...{ list, currencies, total, currency }} />
    </div>
  );
}
