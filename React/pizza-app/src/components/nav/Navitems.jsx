
function Navitems({ActiveTab , SetActiveTab}){

    return(
    <>
    <div className="mt-3 flex border-2">
        <div className={`py-2 w-[20%] text-center border-r-2 cursor-pointer ${ActiveTab === 'Pizzas'? 'bg-red-300':null}`} onClick = {()=>SetActiveTab('Pizzas')}>Pizza</div>
        <div className={`py-2 w-[20%] text-center border-r-2 cursor-pointer ${ActiveTab === 'Sides'? 'bg-red-300':null}`} onClick = {()=>SetActiveTab('Sides')}>Sides</div>
        <div className={`py-2 w-[20%] text-center border-r-2 cursor-pointer ${ActiveTab === 'Desserts'? 'bg-red-300':null}`} onClick = {()=>SetActiveTab('Desserts')}>Desserts</div>
        <div className={`py-2 w-[20%] text-center border-r-2 cursor-pointer ${ActiveTab === 'Drinks'? 'bg-red-300':null}`} onClick = {()=>SetActiveTab('Drinks')}>Drinks</div>
        <div className={`py-2 w-[20%] text-center border-r-2 cursor-pointer ${ActiveTab === 'Deals'? 'bg-red-300':null}`} onClick = {()=>SetActiveTab('Deals')}>Deals</div>
    </div>
    </>
    )
}

export default Navitems;