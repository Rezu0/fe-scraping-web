import { useEffect, useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import SearchBoxComponent from "../feature/SearchBoxComponent";
import { classNames } from "primereact/utils";

function NavbarComponent() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isProgressBar, setIsProgressBar] = useState(0);
  const [isSearchQuery, setSearchQuery] = useState("");
  const [isSearchParams, setSearchParams] = useSearchParams();
  const [isActiveNav, setActiveNav] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const clickSidebarBurger = () => setIsSidebar((prev) => !prev);
  const clickSearchIcon = () => setIsSearch((prev) => !prev);

  useEffect(() => {
    if (location.pathname === '/categories') {
      setActiveNav('categories');
      return;
    }

    if (location.pathname === '/') {
      setActiveNav('videos');
      return;
    }
  }, [location.pathname])

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
        color="#ad1320"
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
                  className="bg-gray-50 border-0 focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 block w-2xl ps-10 p-2 dark:bg-gray-50 dark:placeholder-gray-400 dark:text-gray-800" 
                  placeholder="Search your videos..."
                  value={isSearchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="hidden lg:flex col-span-12 uppercase text-gray-50 font-medium text-xs">
            <div className="flex flex-wrap gap-2">
              <div
                className={classNames(
                  (isActiveNav === 'videos') ? 'bg-adultdesu-backgroundbutton' : 'hover:bg-adultdesu-backgroundbutton',
                  "flex items-center gap-1 transition duration-300 px-2 py-1 rounded-sm cursor-pointer"
                )}
                onClick={() => loadingBarState('/')}
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd"/>
                </svg>
                <span>Videos</span>
              </div>

              <div
                className={classNames(
                  (isActiveNav === 'categories') ? 'bg-adultdesu-backgroundbutton' : 'hover:bg-adultdesu-backgroundbutton',
                  "flex items-center gap-1 transition duration-300 px-2 py-1 rounded-sm cursor-pointer"
                )}
                onClick={() => loadingBarState('/categories')}
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clipRule="evenodd"/>
                </svg>
                <span>Categories</span>
              </div>

              <a
                href="https://desu.bio/doujin"
                className="flex items-center gap-1 hover:bg-adultdesu-backgroundbutton transition duration-300 px-2 py-1 rounded-sm"
                target="_blank"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                </svg>

                <span>Comics Hentai</span>
              </a>

              <a
                href="https://desu.bio/jav"
                className="flex items-center gap-1 hover:bg-adultdesu-backgroundbutton transition duration-300 px-2 py-1 rounded-sm"
                target="_blank"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd"/>
                </svg>
                <span>Jav</span>
              </a>

              <a
                href="https://igodesu.tv/"
                className="flex items-center gap-1 hover:bg-adultdesu-backgroundbutton transition duration-300 px-2 py-1 rounded-sm"
                target="_blank"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd"/>
                </svg>
                <span>Bokep Indo</span>
              </a>

              <a
                href="https://t.me/iklandesu/"
                className="flex items-center gap-1 hover:bg-adultdesu-backgroundbutton transition duration-300 px-2 py-1 rounded-sm"
                target="_blank"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clipRule="evenodd"/>
                </svg>

                <span>Pasang Iklan</span>
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