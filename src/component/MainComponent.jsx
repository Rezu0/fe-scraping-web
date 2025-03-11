import { Outlet } from "react-router-dom";
import FilterGlobalComponent from "./feature/FilterGlobalComponent";
import MainCardImageComponent from "./card/MainCardImageComponent";
import { Paginator } from "primereact/paginator";
import { useState } from "react";

function MainComponent() {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(32);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <>
      <FilterGlobalComponent />

      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="p-2 text-start uppercase text-adultdesu-navbartext text-lg md:text-2xl w-1/2">
          All Adultdesu HD Videos
        </div>
        <div>
          <button 
            type="button"
            className="hover:bg-adultdesu-navbartext duration-300 px-3 py-1 text-amber-50 text-sm rounded-sm cursor-pointer underline decoration-adultdesu-navbartext"
          >
            See all
          </button>
        </div>
      </div>


      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <MainCardImageComponent />          
        </div>
      </div>

      <div className="grid grid-cols-1 my-4">
        <Paginator 
          first={first} 
          rows={rows} 
          totalRecords={57164} 
          onPageChange={onPageChange}
        />
      </div>
    </>
  )
}

export default MainComponent;