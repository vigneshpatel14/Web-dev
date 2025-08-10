import { useState } from "react";
import Buttons from "./Buttons";

function Calci() {
    const [Input , SetInput] = useState("");
    const [res , Setres] = useState(null);

    const handleclick = (value) =>{
        if(value == "C"){
            SetInput("");
            Setres(null);
        }
        else if(value == "="){
            try{
                Setres(eval(Input));    
                SetInput(eval(Input))
            }
            catch(err)
            {
                Setres("ERROR");
            }
        }
        else{
            SetInput((pre) => pre + value);
        }
    };
    return (

        <div className="w-96 mx-auto mt-10 p-10 border rounded-lg shadow-2xl shadow-blue-200">
            <div className="bg-gray-100 p-4 rounded text-right text-2xl">
                <div className="text-gray-600 ">{Input || "0"}</div>
                <div className="text-black font-bold">{res !== null? res : ""}</div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-4">
                {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map((data)=>(
                    <Buttons key={data}
                    value={data}
                    click={handleclick}
                    className="bg-gray-200 hover:bg-gray-300"/>
                ))}

                <Buttons key={"+"} value={"+"} click={handleclick} className="bg-yellow-400 hover:bg-yellow-500 h-[222%]"/>
                {["-", "*", "/"].map((op) => (
                        <Buttons
                        key={op}
                        value={op}
                        click={handleclick}
                        className="bg-yellow-400 hover:bg-yellow-500"
                        />
                ))}
                
                <Buttons value="C" click={handleclick} className="col-span-2 bg-red-400 hover:bg-red-500" />
                <Buttons value="=" click={handleclick} className="col-span-2 bg-green-400 hover:bg-green-500" />

            </div>
        </div>
      
    )
  }
  
  export default Calci;
  