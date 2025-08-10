import { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {
  const [joke , setjoke] = useState("");

  useEffect(() =>{
    fetchquote();
  },[]);
  async function fetchquote(){
    try{
      const response = await axios("https://official-joke-api.appspot.com/random_joke");
      setjoke(response.data)
      console.log(response);
      
    }
    catch(err)
    {
      console.log(err);
      
    }
  }




  return (
    <>
      <h1>Randome jokes generator</h1>
      <p>{joke?(<p>{joke.setup}<br/> {joke.punchline}</p>):"Loading"}</p>
    </>
  )
}

export default Axios