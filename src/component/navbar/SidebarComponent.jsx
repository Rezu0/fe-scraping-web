import { classNames } from "primereact/utils";
import { useEffect } from "react";

function SidebarComponent({
  isSidebar,
  setIsSidebar
}) {

  useEffect(() => {

  }, [isSidebar, setIsSidebar]);

  const clickSidebarHide = () => setIsSidebar((prev) => !prev);

  return (
    <>
      <aside
        id="default-sidebar"
        className={classNames(
          (isSidebar) ? 'translate-x-0' : 'translate-x-full',
          // "fixed top-0 right-0 z-40 w-80 h-screen transition-transform -translate-x-0 sm:translate-x-0"
          "fixed top-0 right-0 z-40 w-80 h-screen shadow-lg transition-transform duration-300"
        )}
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-4 overflow-y-auto bg-black dark:bg-black rounded-tl-2xl rounded-bl-2xl"
        >
          <div className="flex items-center text-adultdesu-navbartext text-2xl font-bold uppercase cursor-pointer text-center mt-3 mb-10">
            {/* Button - 3/12 dari lebar untuk back atau menutup sidebar */}
            <div 
              className="flex-1 max-w-[25%] flex justify-center"
            >
              <button 
                className="hover:bg-gray-500 p-1 rounded-2xl duration-500 cursor-pointer"
                type="button"
                onClick={clickSidebarHide}
              >
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                </svg>
              </button>
            </div>

            {/* Text - 9/12 dari lebar */}
            <div className="flex-1 max-w-[75%] text-left">Adultdesu</div>
          </div>

            <ul
              className="space-y-2 font-medium"
            >
              <li>
                <a 
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd"/>
                  </svg>

                  <span className="ms-3">Videos</span>
                </a>
              </li> 
              <li>
                <a 
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>
                  </svg>
                  <span className="ms-3">Categories</span>
                </a>
              </li> 
            </ul>
        </div>
      </aside>
    </>
  )
}

export default SidebarComponent;