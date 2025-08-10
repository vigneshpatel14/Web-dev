import { useState } from "react";
import Header from "./components/headers/Header"
import Navitems from "./components/nav/Navitems"
import Info from "./components/Info/info";

function App() {
  const [ActiveTab , SetActiveTab] = useState('Pizzas');
  const [SearchQuery , SetSearchQuery] = useState("");
  return (
    <>
      <div className="bg-red-50">
        <div className="p-5 w-[1200px] mx-auto">
          <Header SetSearchQuery={SetSearchQuery}/>
          <Navitems ActiveTab={ActiveTab} SetActiveTab={SetActiveTab}/>
          <Info ActiveTab={ActiveTab} SearchQuery={SearchQuery}/>
        </div>
      </div>
    </>
  )
}

export default App
