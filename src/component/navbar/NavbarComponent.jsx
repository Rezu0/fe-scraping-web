import { useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function NavbarComponent() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isProgressBar, setIsProgressBar] = useState(0);

  const clickSidebarBurger = () => setIsSidebar((prev) => !prev);
  const navigate = useNavigate();

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
                Home
              </a>
            </li>
            <li>
            <a
                className="hover:text-adultdesu-navbartext hover:underline duration-500 cursor-pointer"
                onClick={async () => await loadingBarState('videos')}
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
            <form className="flex items-center max-w-sm mx-auto">
              <label htmlFor="search-adultdesu" className="sr-only">Search</label>
              <div className="relative w-full">

                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>

                <input type="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5  dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800" placeholder="Search your videos..."/>

              </div>
            </form>
          </div>

          <button 
            className="lg:hidden text-white text-2xl cursor-pointer"
            onClick={clickSidebarBurger}
          >
            &#9776;
          </button>
        </div>

        <SidebarComponent 
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
        />
      </nav>
    </>
  )
}

export default NavbarComponent;