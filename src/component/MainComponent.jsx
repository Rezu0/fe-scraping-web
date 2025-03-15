import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { Paginator } from "primereact/paginator";

import FilterGlobalComponent from "./feature/FilterGlobalComponent";
import MainCardImageComponent from "./card/MainCardImageComponent";
import { formatNumber } from '../utils/number/handlerNumber';

function MainComponent() {
  const [isSearchParams, setSearchParams] = useSearchParams();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(35);
  const [isCardData, setCardData] = useState(null);
  const [isGenreTag, setGenreTag] = useState([]);

  useEffect(() => {
    const pageFromQuery = isSearchParams.get('page');
    if (pageFromQuery) {
      setFirst((pageFromQuery - 1) * rows);
    }
  }, [isSearchParams, rows])

  useEffect(() => {
    const paramsQueryGenre = isSearchParams.get('genre');
    if (paramsQueryGenre) {
      const splitGenre = paramsQueryGenre.split(',');
      setGenreTag((prev) => splitGenre);
    } else {
      setGenreTag([]);
    }
  }, [isSearchParams])

  const onPageChange = (event) => {
    isSearchParams.set('page', event.page + 1);
    setSearchParams(isSearchParams);
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleCardData = (data) => {
    setCardData(data);
  }

  return (
    <>
      <FilterGlobalComponent />

      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="p-2 text-start uppercase text-adultdesu-navbartext text-lg md:text-2xl w-1/2">
          All Adultdesu HD Videos { formatNumber(isCardData?.totalData) }+
        </div>
        <div>
          <button 
            type="button"
            className="hover:bg-adultdesu-navbartext duration-300 px-3 py-1 text-amber-50 text-sm rounded-sm cursor-pointer underline decoration-adultdesu-navbartext transition-transform active:scale-75"
          >
            See all
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-end my-5">
        { isGenreTag?.map((item, index) => (
          <div 
            key={index}
            className="bg-adultdesu-navbartext mx-1 text-xs py-2 px-3 rounded-lg"
          >
            {item}
          </div>
        )) }
      </div>


      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <MainCardImageComponent 
            sendDataToParent={handleCardData}
          />          
        </div>
      </div>

      <div className="grid grid-cols-1 my-4">
        <Paginator 
          first={first} 
          rows={rows} 
          totalRecords={isCardData?.totalData} 
          onPageChange={onPageChange}
        />
      </div>
    </>
  )
}

export default MainComponent;