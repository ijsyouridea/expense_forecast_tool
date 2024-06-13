import { useState, useEffect } from "react";

export default function Rest({ list, currencies, total, currency }) {
  total = parseFloat(total);//prevent crash while typing dot
  let [result, setResult] = useState(total);
  let [shouldRemain, setShouldRemain] = useState(total);

  useEffect(() => {
    let calculate = total;
    let shouldCalculate = total
    list.forEach((i) => {
      if (i.currency === currency) {
        calculate -= i.amount;
        if(i.title?.startsWith("+")){
          shouldCalculate -= i.amount
        }
      } else {
        calculate -= (i.amount||0) * (1 / (currencies[i.currency] || 1));
        if(i.title?.startsWith("+")){
          shouldCalculate -= (i.amount||0) * (1 / (currencies[i.currency] || 1));
        }
      }
    });

    setResult(calculate);
    setShouldRemain(shouldCalculate)
    if (total || currency || list.length) {
      localStorage.setItem(
        "memory",
        JSON.stringify({ total, currency, list, currencies })
      );
    }
  }, [total, currency, list, currencies]);

  return (
    <div style={{display:'flex', justifyContent:'center', gap:'20px'}}>
      <div style={{color:'grey'}} title='planned'>{result.toFixed(2)} {currency}</div>
      <div style={{color:'green'}} title='current'>{shouldRemain.toFixed(2)} {currency}</div>
    </div>
  );
}
