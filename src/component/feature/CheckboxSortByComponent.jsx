import { classNames } from "primereact/utils";
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
      sortByList.map((item) => (
        <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={classNames(
              selectedSort === item.id ? "bg-adultdesu-navbartext text-white border-adultdesu-navbartext" : "bg-white text-gray-900 border-gray-300 hover:bg-gray-200",
              "p-2 rounded-md text-xs border transition-all duration-300 cursor-pointer"
            )}
          >
            {item.name}
          </button>
      ))
  );
}

export default CheckBoxSortByComponent;
