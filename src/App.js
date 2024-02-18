import "./styles.css";
import { useEffect, useState } from "react";
import Rates from "./components/Rates";
import Total from "./components/Total";
import Spends from "./components/Spends";
import Rest from "./components/Rest";
import UrlGenerator from "./components/UrlGenerator"

const currenciesList = ["pln", "eur", "usd"];

export default function App() {
  let [currencies, setCurrencies] = useState({});
  let [total, setTotal] = useState(0);
  let [currency, setCurrency] = useState("");
  let [list, setList] = useState([]);

  useEffect(() => {
    (async()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    let memory = null
    if(token){
      let r = await fetch(`https://c069c62b-a46a-4f6f-b390-1ef8be550d3b-00-p97zrh4i3cig.spock.replit.dev/verify/${token}`)
      let d = await r.json()
      memory = d.data
    }else{
      memory = localStorage.getItem("memory");
      if(memory){
        memory = JSON.parse(memory);
      }
    }
    if (memory) {
      let { total, currency, list, currencies } = memory
      setCurrencies(currencies);
      setTotal(total);
      setCurrency(currency);
      setList(list);
    }
    })()
  }, []);

  return (
    <div className="App">
      <Total {...{ total, setTotal, currency, setCurrency, currenciesList }} />
      <Rates {...{ currencies, setCurrencies, currenciesList }} />
      <Spends {...{ list, setList, currenciesList }} />
      <Rest {...{ list, currencies, total, currency }} />
      
      <UrlGenerator />
    </div>
  );
}
