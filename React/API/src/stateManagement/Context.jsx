import {useState } from "react"
import Counter from "../Components/Counter"
import { CounterContext } from "./CounterContext";
function Context()
{
    const [count , setcount] = useState(0);
    return(
        <>
        <CounterContext.Provider value={{count , setcount}}>
            {/* <Counter/> */}
        </CounterContext.Provider>
        </>
    )
}

export default Context