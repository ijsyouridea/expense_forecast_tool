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
      let r = await fetch(`https://tokenmirror.replit.app/verify/${token}`)
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
      
      
      <div>
        TODOs
        <ol>
          <li>ability to deside whether to store in localstorage or not</li>
          <li>what if I open smb link and what should happen with mine data in localStorage or if not in localStorage</li>
          <li>notification in order to loose data</li>
          <li>add custom seed to the server</li>
          <li>decide expiration time</li>
        </ol>
      </div>
    </div>
  );
}
