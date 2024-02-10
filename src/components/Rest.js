import { useState, useEffect } from "react";

export default function Rest({ list, currencies, total, currency }) {
  total = parseFloat(total);//prevent crash while typing dot
  let [result, setResult] = useState(total);

  useEffect(() => {
    let calculate = total;
    list.forEach((i) => {
      if (i.currency === currency) {
        calculate -= i.amount;
      } else {
        calculate -= i.amount * (1 / (currencies[i.currency] || 1));
      }
    });

    setResult(calculate);
    if (total || currency || list.length) {
      localStorage.setItem(
        "memory",
        JSON.stringify({ total, currency, list, currencies })
      );
    }
  }, [total, currency, list, currencies]);

  return (
    <div>
      {result.toFixed(2)} {currency}
    </div>
  );
}
