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
      <nav className="bg-adultdesu-navbartext p-4 md:py-4 md:px-16 select-none">
        <div className="container mx-auto grid grid-cols-12 items-center gap-4">

          {/* LOGO */}
          <div 
            className="col-span-9 lg:col-span-3 flex items-center justify-start sm:justify-start md:justify-start lg:justify-center text-gray-50 text-2xl font-bold uppercase cursor-pointer"
            onClick={() => loadingBarState('/')}
          >
            Adultdesu
          </div>

          {/* SEARCH FORM */}
          <div className="hidden lg:col-span-9 lg:flex">
            <form  
              className="flex items-center w-full"
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
                  className="bg-gray-50 border-0 focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-50 dark:placeholder-gray-400 dark:text-gray-800" 
                  placeholder="Search your videos..."
                  value={isSearchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="col-span-12 uppercase text-gray-50 font-medium text-xs">
            <div className="flex flex-wrap gap-2">
              <a
                href=""
                className="flex items-center gap-1 bg-adultdesu-backgroundbutton px-2 py-1 rounded-sm"
              >
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Home</span>
              </a>

              <a
                href=""
                className="flex items-center gap-1 hover:bg-adultdesu-backgroundbutton transition duration-300 px-2 py-1 rounded-sm"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clipRule="evenodd"/>
                </svg>
                <span>Categories</span>
              </a>
            </div>
          </div>



          {/* MOBILE: ICONS */}
          <div className="col-span-3 lg:hidden flex justify-end gap-4">
            <button 
              className="text-white text-2xl cursor-pointer transition-transform active:scale-75"
              onClick={clickSearchIcon}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
            </button>

            <button 
              className="text-white text-2xl cursor-pointer transition-transform active:scale-75"
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