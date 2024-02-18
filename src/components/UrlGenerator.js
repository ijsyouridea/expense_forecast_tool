import {useState} from 'react';

export default function UrlGenerator(){
  let [token, setToken] = useState('')
  
  
  function getToken(){
    let memory = localStorage.getItem("memory");
    console.log(memory)
    fetch('https://c069c62b-a46a-4f6f-b390-1ef8be550d3b-00-p97zrh4i3cig.spock.replit.dev/sign',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: memory
    })
    .then(r=>r.json())
    .then(d=>{
      setToken(d)
    })
    .catch(console.log)
    
  }
  
  
  return (
    <div>
      <div>{token}</div>
      <div>length: {token.length}</div>
      <button onClick={getToken}>get url</button>
    </div>
  )
}