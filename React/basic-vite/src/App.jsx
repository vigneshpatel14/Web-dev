import { useState } from 'react'
import Counter from './components/Counter'

function App() {

  // const status = 'pip';

  // function Stat(){
  //   switch(status){
  //     case 'loading':
  //      return <p>Hello from switch</p>

  //     case 'pip':
  //       return <p>From pip</p>
  //     default:
  //       return <p>default</p>
  //   }
  // }

  function Parga(){
    return <p>I am a paragraph</p>
  }

  function Addtitle(Comp){
    return function compwithtit(){
      return(
      <>
      <h1>From title</h1>
      <Comp/>
      </>
      );
    };
  }

  const Parawithtitle = Addtitle(Parga)
  const showtitle = false;
  const users = ['pip' , 'pop' , 'poll'];;

  const [user , setuser] = useState({
    name:'',
    email:''
  })

  function Submit(){
    alert(`name:${user.name}; email:${user.email}`)
  }
  return (
    <> 
    {/* <Counter/>     */}

    
    {/* { showtitle || <p>Title</p> } */}

    {/* <ul>
    {
      users.map((data, index) =>
        <li key={index}>{data}</li>
      )
    }
    </ul> */}

    <h1>User Form</h1>
    <input value={user.name} onChange={(event) => setuser({...user , name:event.target.value})} type="text" />
    <input value={user.email} onChange={(event) => setuser({...user , email:event.target.value})} type="email" />
    <button onClick={Submit}>Submit</button>

    <Parawithtitle/>
    </>
  )
}
//Default dhi ichukuntadi at last dhi

export default App
