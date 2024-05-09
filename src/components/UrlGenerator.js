import {useState, useEffect} from 'react';

export default function UrlGenerator(){
  let [token, setToken] = useState('')
  
  
  function getToken(){
    let memory = localStorage.getItem("memory");
    console.log(memory)
    fetch('https://tokenmirror.replit.app/sign',{
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
    {token&&
    <>
      <textarea rows={Math.ceil(token.length/50)+1} cols="50" value={window.location.origin + '?token=' + token}></textarea>
      <div>length: {token.length}</div>
      </>
      }
      <button onClick={getToken}>get url</button>
    </div>
  )
}