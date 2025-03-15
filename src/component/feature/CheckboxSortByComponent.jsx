import { useState } from "react";

function CheckBoxSortByComponent() {
  const [selectedSort, setSelectedSort] = useState(null);

  const sortByList = [
    { id: 1, name: "By Title: A-Z" },
    { id: 2, name: "By Title: Z-A" },
    { id: 3, name: "By Date: Terbaru" },
    { id: 4, name: "By Date: Terlama" },
  ];

  const handleClick = (id) => {
    setSelectedSort(selectedSort === id ? null : id); // Toggle active state
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sortByList.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => handleClick(item.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-300
              ${selectedSort === item.id ? "bg-adultdesu-navbartext text-white border-adultdesu-navbartext" : "bg-white text-gray-900 border-gray-300 hover:bg-gray-200"}`}
          >
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CheckBoxSortByComponent;
