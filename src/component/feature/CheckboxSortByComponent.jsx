import { useState } from "react";

function CheckBoxSortByComponent() {
  const [isSortByList, setSortByList] = useState([
    {
      id: 1,
      name: 'By Title: A-Z',
    },
    {
      id: 2,
      name: 'By Title: Z-A',
    },
    {
      id: 3,
      name: 'By Date: Terbaru',
    },
    {
      id: 4,
      name: 'By Date: Terlama',
    }
  ]);

  return (
    <>
      {isSortByList.map((item, index) => (
        <div 
          key={index}
          className="flex items-center mb-4 flex-wrap"
        >
          <input 
            id={`sortby-checkbox-${index}`}
            type="checkbox"
            value=""
            className="w-4 h-4 accent-adultdesu-navbartext bg-gray-100 border-gray-300  focus:ring-adultdesu-navbartext cursor-pointer"
          />
          <label 
            htmlFor={`sortby-checkbox-${index}`}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 break-words cursor-pointer"
          >
            {item.name}
          </label>
        </div>
      ))}
    </>
  )
}

export default CheckBoxSortByComponent;