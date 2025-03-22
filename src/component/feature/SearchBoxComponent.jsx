import { classNames } from "primereact/utils";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBoxComponent({ isSearch }) {
  const [isSearchQuery, setSearchQuery] = useState("");
  const [isSearchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchParams.has('search')) {
      setSearchQuery(isSearchParams.get('search'));
    }

    if (!isSearchParams.has('search')) {
      setSearchQuery("");
    }
  }, [isSearch, isSearchParams]);

  const handlerSearchSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    if (isSearchQuery.trim() !== "") {
      navigate(`/?search=${encodeURIComponent(isSearchQuery)}`);
    }
  }

  const handlerClickClearSearch = () => {
    setSearchQuery("");
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('search');

      return newParams;
    })
  }

  return (
    <div className={classNames(
      isSearch ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-5 opacity-0 pointer-events-none",
      "lg:hidden space-x-4 w-full px-10 transition-all duration-300 z-50"
    )}>
      <form className="flex items-center w-full" onSubmit={handlerSearchSubmit}>
        <label htmlFor="search-adultdesu" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="search" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800" 
            placeholder="Search your videos..."
            value={isSearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div 
          className="text-gray-50 mx-2 sm:mx-3 text-xs bg-adultdesu-navbartext hover:bg-adultdesu-background-hover duration-300 cursor-pointer p-2.5 rounded-sm transition-transform active:scale-75"
          onClick={handlerClickClearSearch}
        >
          Clear
        </div>
      </form>
    </div>
  )
}

export default SearchBoxComponent;