import { useEffect } from "react";

function useAlertResult(count){
    useEffect(() =>{
        alert(count);
    } , [count]);
}


export default useAlertResult;