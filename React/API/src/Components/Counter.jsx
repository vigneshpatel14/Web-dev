import { useContext } from "react";
import { CounterContext } from "../stateManagement/CounterContext";

function Counter()
{
    const {count , setcount} = useContext(CounterContext);

    return(
        <div>
            <button onClick={() => setcount(count => count-= 1)}>Dec</button>
            <span> {count} </span>
            <button onClick={()=> setcount(count => count += 1)}>Inc</button>
        </div>
    )
}

export default Counter