function Header({SetSearchQuery}) {
  const searchItem = (event) =>{
    SetSearchQuery(event.target.value.trim());
  };
  
    return (
      <div className="flex justify-between items-center bg-white shadow-lg p-4">
      <img
        className="w-[140px]"
        src="https://www.pizzahut.co.in/_next/static/static/images/logo.38f9109e24d22d58d048837b27f54390.png"
        alt="Pizza Hut Logo"
      />

      <div className="flex items-center bg-gray-100 rounded-lg shadow-md">
        <input
          type="text"
          className="bg-gray-100 shadow-lg rounded-l-lg w-[90%] px-4 py-2 outline-none text-gray-700"
          placeholder="Search for pizzas, sides, desserts..."
          onChange={searchItem}
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition">
          Search
        </button>
      </div>
    </div>
    );
  };
  
  export default Header;
  