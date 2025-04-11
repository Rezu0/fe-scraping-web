import { classNames } from "primereact/utils";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CheckboxFilterGenreComponent from "./CheckboxFilterGenreComponent";
import CheckBoxSortByComponent from "./CheckboxSortByComponent";

function FilterGlobalComponent() {
  const [isFilterGenre, setIsFilterGenre] = useState(false);
  const [isSearchParams, setSearchParams] = useSearchParams();
  const [isCheckedGenre, setCheckedGenre] = useState([]);
  const [isSortByValue, setIsSortByValue] = useState(null);
  const [isSortBy, setIsSortBy] = useState(false);

  const toggleFilter = (filterType) => {
    if (filterType === 'close') {
      setIsFilterGenre(false);
      setIsSortBy(false);
    } else {
      setIsFilterGenre(filterType === "genre");
      setIsSortBy(filterType === "sort");
    }
  };

  const handlerDataFilterGenre = (data) => {
    setCheckedGenre(data)
  }

  const handlerDataSortBy = (data) => {
    setIsSortByValue(data);
  }

  const handlerClickApply = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      (isCheckedGenre.length === 0) ? newParams.delete('genre') : newParams.set('genre', isCheckedGenre.toString());

      return newParams;
    });
  }

  const handlerClickApplySort = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      (isSortByValue === null) ? newParams.delete('sort') : newParams.set('sort', isSortByValue);

      return newParams;
    })
  }

  const handlerClickClearFilter = () => {
    setCheckedGenre([]);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('genre')

      return newParams;
    });
  }

  const handlerClickClearSort = () => {
    setIsSortByValue(null);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('sort');

      return newParams;
    })
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 text-end">
        <div className="flex justify-between p-2">
          {/* FILTER SORT BY */}
          <div className="relative inline-block">
            <div 
              className="bg-adultdesu-backgroundbox hover:bg-adutldesu-dark-hover text-gray-50 inline-flex items-center gap-2 cursor-pointer p-2 mx-1 rounded-sm duration-300 transition-transform active:scale-75 select-none"
              onClick={() => toggleFilter('sort')}
            >
              <svg className="w-3 h-3 sm:h-4 sm:w-4 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"/>
              </svg>

              <span className="text-size-super-xs sm:text-sm">Sort by</span>
            </div>

            <div
              className={classNames(
                isSortBy ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-5 opacity-0 pointer-events-none",
                "absolute top-full left-1/2 lg:left-1/10 -translate-x-1/2 bg-black border border-adultdesu-navbartext py-2 px-4 mt-1 rounded-md min-w-[200px] w-full max-w-xs lg:min-w-xs text-sm text-start transition-all duration-300 z-50"
              )}
            >
              <div className="flex justify-between text-md uppercase underline underline-offset-2 decoration-adultdesu-navbartext">
                <span className="text-start">Sort by</span>
                <span 
                  className="text-end"
                  onClick={() => toggleFilter('close')}
                >
                  <i className="pi pi-times rounded-full duration-300 p-1.5 hover:bg-adultdesu-navbartext cursor-pointer active:scale-75"></i>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 my-2 max-h-60 overflow-y-auto custom-scrollbar">
                <CheckBoxSortByComponent 
                  sendDataSortBy={handlerDataSortBy}
                />
              </div>

              <div className="flex justify-start my-3">
                <button
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-adultdesu-navbartext rounded-lg transition-transform active:scale-75 cursor-pointer"
                  onClick={handlerClickApplySort}
                >
                  Apply Sort
                </button>
                <button
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center text-white underline decoration-adultdesu-navbartext transition-transform active:scale-75 cursor-pointer mx-2"
                  onClick={handlerClickClearSort}
                >
                  Clear Sort
                </button>
              </div>
            </div>
          </div>

          {/* FILTER GENRE INI NANTINYA */}
          <div className="relative inline-block">
            <div 
              className="bg-adultdesu-backgroundbox hover:bg-adutldesu-dark-hover text-gray-50 inline-flex items-center gap-2 cursor-pointer p-2 mx-1 rounded-sm duration-300 transition active:scale-75 select-none"
              onClick={() => toggleFilter('genre')}
            >
              <svg className="w-3 h-3 sm:h-4 sm:w-4 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
              </svg>
              <span className="text-size-super-xs sm:text-sm">Filter by</span>
            </div>

            {/* BOX UNTUK FILTER GENRE */}
            <div className={classNames(
              isFilterGenre ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-5 opacity-0 pointer-events-none",
              "absolute top-full right-5 bg-black border border-adultdesu-navbartext py-2 px-4 mt-1 rounded-md min-w-[300px] w-full max-w-xs sm:min-w-sm md:min-w-md lg:min-w-lg text-sm text-start transition-all duration-300 z-50"
            )}>
              <div className="flex justify-between text-md uppercase underline underline-offset-2 decoration-adultdesu-navbartext">
                <span className="text-start">Filter Genre</span>
                <span 
                  className="text-end"
                  onClick={() => toggleFilter('close')}
                >
                  <i className="pi pi-times rounded-full duration-300 p-1.5 hover:bg-adultdesu-navbartext cursor-pointer active:scale-75"></i>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 my-2 max-h-60 overflow-y-auto custom-scrollbar">
                <CheckboxFilterGenreComponent 
                  sendDataFilter={handlerDataFilterGenre}
                  sendBackClear={isCheckedGenre}
                />
              </div>

              <div className="flex justify-start my-2">
                <button 
                  type="button" 
                  className="px-3 py-2 text-md font-medium text-center text-white bg-adultdesu-navbartext rounded-lg transition-transform active:scale-75 cursor-pointer"
                  onClick={handlerClickApply}
                >
                  Apply Filter
                </button>
                <button 
                  type="button" 
                  className="px-3 py-2 text-md font-medium text-center text-white underline decoration-adultdesu-navbartext transition-transform active:scale-75 cursor-pointer mx-2"
                  onClick={handlerClickClearFilter}
                >
                  Clear Filter
                </button>
              </div>
            </div>
            {/* END OF BOX GENRE */}

          </div>
        </div>
      </div>
    </>
  )
}

export default FilterGlobalComponent;