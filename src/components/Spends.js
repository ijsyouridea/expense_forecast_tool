import numberInputParser from "../utils/numberInputParser";

export default function Spends({ list, setList, currenciesList }) {
  function add(item) {
    setList((prev) => {
      return [...prev, item];
    });
  }
  function remove(item) {
    let index = list.findIndex(
      (i) => i.currency === item.currency && i.amount === item.amount
    );
    list.splice(index, 1);
    setList([...list]);
  }
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "20px",
        width: "300px",
        margin: "0 auto"
      }}
    >
      {list.map((i, k) => (
        <div key={k}>
          <input
            style={{width:'75px'}}
            value={i.title}
            onChange={(e) =>
              setList((prev) => {
                let {value} = e.target;
                prev[k].title = value;
                return [...prev];
              })
            }
          />
          <input
            style={{width:'75px'}}
            value={i.amount}
            type='number'
            onChange={(e) =>
              setList((prev) => {
                
                prev[k].amount = numberInputParser(e);
                return [...prev];
              })
            }
          />
          <select
            value={i.currency}
            onChange={(e) =>
              setList((prev) => {
                prev[k].currency = e.target.value;
                return [...prev];
              })
            }
          >
            <option>choose</option>
            {currenciesList.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <button onClick={() => remove(i)}>x</button>
        </div>
      ))}
      <button onClick={() => add({ amount: 0, currency: "" })}>+</button>
    </div>
  );
}
