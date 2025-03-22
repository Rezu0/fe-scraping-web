import { useEffect, useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import SearchBoxComponent from "../feature/SearchBoxComponent";

function NavbarComponent() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isProgressBar, setIsProgressBar] = useState(0);
  const [isSearchQuery, setSearchQuery] = useState("");
  const [isSearchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const clickSidebarBurger = () => setIsSidebar((prev) => !prev);
  const clickSearchIcon = () => setIsSearch((prev) => !prev);

  useEffect(() => {
    if (isSearchParams.has('search')) {
      setSearchQuery(isSearchParams.get('search'));
    }

    if (!isSearchParams.has('search')) {
      setSearchQuery("");
    }
  }, [isSearch, isSearchParams]);

  const handlerSearchSubmit = (e) => {
    e.preventDefault();
    if (isSearchQuery.trim() !== "") {
      navigate(`/?search=${encodeURIComponent(isSearchQuery)}`);
    }
  }

  // INI UNTUK ANIMASI TOP LOADINGBAR
  const loadingBarState = async (dataNavigate) => {
    setIsProgressBar((prev) => prev + 40);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsProgressBar((prev) => prev + 10);
        resolve()
      }, 500)
    })

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsProgressBar((prev) => prev + 50);
        navigate(dataNavigate)
        window.scrollTo({ top: 0, behavior: "smooth" });
        resolve()
      }, 500)
    })
  }

  return (
    <>
      <LoadingBar 
        color="#E97991"
        progress={isProgressBar}
        onLoaderFinished={() => setIsProgressBar(0)}
      />
      <nav className="bg-black p-4 md:py-4 md:px-16 select-none">
        <div className="containter mx-auto flex items-center justify-between">

          {/* LOGO */}
            <div 
              className="text-adultdesu-navbartext text-2xl font-bold uppercase cursor-pointer"
              onClick={() => loadingBarState('/')}
            >
              Adultdesu
            </div>
          {/* END LOGO */}

          {/* Menu Desktop */}
          <ul className="hidden lg:flex space-x-6 text-white uppercase font-semibold">
            <li>
            <a
                className="hover:text-adultdesu-navbartext hover:underline duration-500 cursor-pointer"
                onClick={async () => await loadingBarState('/')}
              >
                Videos
              </a>
            </li>
            <li>
              <a 
                className="hover:text-adultdesu-navbartext hover:underline duration-500 cursor-pointer"
                onClick={async () => await loadingBarState('categories')}
              >
                Categories
              </a>
            </li>
          </ul>

          <div className="hidden lg:flex space-x-4">
            <form  
              className="flex items-center max-w-sm mx-auto w-full"
              onSubmit={handlerSearchSubmit}
            >
              <label htmlFor="search-adultdesu" className="sr-only">Search</label>
              <div className="relative w-full">

                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>

                <input 
                  type="search" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5  dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800" 
                  placeholder="Search your videos..."
                  value={isSearchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

              </div>
            </form>
          </div>

          <div className="flex flex-wrap gap-4 items-center lg:hidden">
            {/* BUTTON SEARCH */}
            <button 
              className="lg:hidden text-white text-2xl cursor-pointer transition-transform active:scale-75"
              onClick={clickSearchIcon}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
            </button>

            {/* BUTTON BURGER */}
            <button 
              className="lg:hidden text-white text-2xl cursor-pointer transition-transform active:scale-75"
              onClick={clickSidebarBurger}
            >
              &#9776;
            </button>
          </div>
        </div>

        <SidebarComponent 
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
        />
      </nav>

      <SearchBoxComponent 
        isSearch={isSearch}
      />
    </>
  )
}

export default NavbarComponent;