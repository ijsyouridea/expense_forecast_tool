export default function numberInputParser(e) {
  let input = e.target.value
  let res = input.match(/[0-9\.]/g)
  let value = res ? res.join('') : 0
  if (res && res[res.length - 1] === '.') {
    return value;
  } else {
    return parseFloat(value);
  }
}