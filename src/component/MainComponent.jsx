import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { Paginator } from "primereact/paginator";

import FilterGlobalComponent from "./feature/FilterGlobalComponent";
import MainCardImageComponent from "./card/MainCardImageComponent";
import { formatNumber } from '../utils/number/handlerNumber';
import { classNames } from "primereact/utils";
import { mockAPIAsyncVideos } from "../utils/mockAPI/mockAPIVideos";
import { toast } from "sonner";

function MainComponent() {
  const [isSearchParams, setSearchParams] = useSearchParams();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(35);
  const [isCardData, setCardData] = useState(null);
  const [isGenreTag, setGenreTag] = useState([]);
  const [isSortBy, setSortBy] = useState(null);
  const [isSearch, setSearch] = useState(null);

  useEffect(() => {
    const pageFromQuery = isSearchParams.get('page');
    if (pageFromQuery) {
      setFirst((pageFromQuery - 1) * rows);
    }
  }, [isSearchParams, rows])

  useEffect(() => {
    const paramsQueryGenre = isSearchParams.get('genre');
    const paramsQuerySort = isSearchParams.get('sort');
    const paramsQuerySearch = isSearchParams.get('search');
    setGenreTag(paramsQueryGenre ? paramsQueryGenre.split(',') : []);
    setSortBy(paramsQuerySort ? paramsQuerySort : null);
    setSearch(paramsQuerySearch ? paramsQuerySearch : null);

  }, [isSearchParams])

  useEffect(() => {
    const fetchAsyncVidoes = async () => {
      try {
        const response = await mockAPIAsyncVideos();
        if (!response) toast(response.message);
        return;
    } catch (err) {
      toast('An error occurred while fetching mock async Videos (err1 GET)');
      return;
    }
    };

    fetchAsyncVidoes();
  }, []);

  const onPageChange = (event) => {
    isSearchParams.set('page', event.page + 1);
    setSearchParams(isSearchParams);
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleCardData = (data) => {
    setCardData(data);
  }

  const handlerClickClearSearch = () => {
    setSearch(null);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('search')
      
      return newParams;
    })
  }

  const textUppercase = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <>
      {/* <div className="grid grid-cols-1 items-center gap-2">
        <div className="p-2 text-start uppercase text-adultdesu-navbartext text-lg md:text-2xl w-1/2">
          All Adultdesu HD Videos { formatNumber(isCardData?.totalData) }+
        </div>
      </div> */}

      <div className="grid grid-cols-1 bg-adultdesu-navbartext rounded-md px-2 my-5 md:px-4">
        <div className="flex justify-between items-center">
          
          {/* Kiri: Icon + Teks */}
          <div className="flex items-center gap-2 uppercase text-white text-sm font-semibold">
            <svg 
              width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <g id="Layer_2" data-name="Layer 2"> 
                  <g id="Layer_4" data-name="Layer 4"> 
                    <g> 
                      <path d="M2,42a3,3,0,0,0,3,3H43a3,3,0,0,0,3-3V36H2Z"></path> 
                      <path d="M43,17H38.2l-2.8,8H36a2,2,0,0,1,2,2,1.7,1.7,0,0,1-.6,1.4A2,2,0,0,1,36,29H12a2,2,0,0,1-2-2,1.7,1.7,0,0,1,.6-1.4,2.3,2.3,0,0,1,1.2-.6L7.6,17H5a2.9,2.9,0,0,0-3,3V33H46V20A2.9,2.9,0,0,0,43,17Z"></path> 
                      <path d="M14.8,25H32.5L38.9,5.6a2.1,2.1,0,0,0-.6-2.2A2,2,0,0,0,36,3.3L29.6,7.5a4.4,4.4,0,0,1-4.9-.3l-.6-.4a7.9,7.9,0,0,0-10.6.7L9.6,12.1a2,2,0,0,0-.4,2.3Z"></path> 
                    </g> 
                  </g> 
                </g>
              </g>
            </svg>
            <span className="text-md lg:text-lg md:text-base">Daftar Semua</span>
          </div>

          {/* Kanan: Komponen filter */}
          <FilterGlobalComponent />
        </div>
      </div>


      <div className="flex flex-wrap justify-end my-5">
        { isGenreTag?.map((item, index) => (
          <div 
            key={index}
            className="flex items-center bg-adultdesu-navbartext mx-1 text-xs py-2 px-3 rounded-lg mt-2"
          >
            {textUppercase(item)}
          </div>
        )) }

        <div className={classNames(
          isSortBy ? 'flex items-center' : 'hidden',
          "bg-adultdesu-navbartext mx-1 text-xs py-2 px-3 rounded-lg mt-2"
        )}>
          Sort by: {isSortBy}
        </div>

        <div className={classNames(
          isSearch ? 'flex items-center gap-2' : 'hidden',
          "bg-adultdesu-navbartext mx-1 text-xs py-2 px-3 rounded-lg mt-2"
        )}>
          <span>Search: {isSearch}</span>
          <button
            type="button" 
            className="cursor-pointer hover:bg-adultdesu-background-hover duration-300 p-1 rounded-sm flex items-center justify-center"
            onClick={handlerClickClearSearch}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
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