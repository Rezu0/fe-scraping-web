/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { classNames } from "primereact/utils";

function CheckBoxSortByComponent({ sendDataSortBy }) {
  const [selectedSort, setSelectedSort] = useState(null);
  const [isSearchParams, setSearchParams] = useSearchParams();

  const sortByList = [
    { id: 1, name: "By Title: A-Z", value: 'a-z' },
    { id: 2, name: "By Title: Z-A", value: 'z-a' },
    { id: 3, name: "By Date: Terbaru", value: 'newest' },
    { id: 4, name: "By Date: Terlama", value: 'oldest' },
  ];
  
  useEffect(() => {
    if (isSearchParams.has('sort')) {
      const sortQueryParams = isSearchParams.get('sort');
      setSelectedSort(sortByList.find((item) => item.value === sortQueryParams).id);
      sendDataSortBy(sortByList.find((item) => item.value === sortQueryParams).value);
    }

    if (!isSearchParams.has('sort')) {
      setSelectedSort(null);
      sendDataSortBy(null);      
    }
  }, [isSearchParams]);

  const handleClick = (id) => {
    setSelectedSort(selectedSort === id ? null : id); // Toggle active stat
    sendDataSortBy(selectedSort === id ? null : sortByList.find((item) => item.id === id).value); // Send data to parent
  };

  return (
      sortByList.map((item) => (
        <button
            key={item.id}
            className={classNames(
              selectedSort === item.id ? "bg-adultdesu-navbartext text-white border-adultdesu-navbartext" : "bg-white text-gray-900 border-gray-300 hover:bg-gray-200",
              "p-2 rounded-md text-xs border transition-all duration-300 cursor-pointer"
            )}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </button>
      ))
  );
}

export default CheckBoxSortByComponent;
