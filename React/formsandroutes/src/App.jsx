import { useState } from 'react'
import Formlu from "./forms/Formlu"
import ReactHookForm from "./forms/ReactHookForm"
import Home from "./Routes/Home"
import { BrowserRouter , Route , Routes, useNavigate } from 'react-router';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    {/* <ReactHookForm/>
      <Formlu/> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Formlu />}/>
        <Route path="/products/:pip" element={<Formlu/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
