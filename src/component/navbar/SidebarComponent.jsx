import { classNames } from "primereact/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function SidebarComponent({
  isSidebar,
  setIsSidebar
}) {
  const [isProgressBar, setIsProgressBar] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {

  }, [isSidebar, setIsSidebar]);

  const clickSidebarHide = () => setIsSidebar((prev) => !prev);

  // UNTUK ANIMASI LOADING BAR
  const loadingBarState = async (dataNavigate) => {
    setIsProgressBar((prev) => prev + 40);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsProgressBar((prev) => prev + 10);
        resolve()
      }, 500)
    })

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsProgressBar((prev) => prev + 50);
        resolve()
      }, 500)
    });

    setTimeout(() => {
      navigate(dataNavigate)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }

  return (
    <>
      <LoadingBar 
        color="#ad1320"
        progress={isProgressBar}
        onLoaderFinished={() => setIsProgressBar(0)}
      />
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
            <div 
              className="flex-1 max-w-[75%] text-left"
              onClick={async () => await loadingBarState('/')}
            >
              Adultdesu
            </div>
          </div>

            <ul
              className="space-y-2 font-medium"
            >
              <li>
                <a 
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={async () => await loadingBarState('/')}
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd"/>
                  </svg>

                  <span className="ms-3">Videos</span>
                </a>
              </li> 
              <li>
                <a 
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={async () => await loadingBarState('/categories')}
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>
                  </svg>
                  <span className="ms-3">Categories</span>
                </a>
              </li> 
              <li>
                <a 
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  href="https://desu.bio/doujin"
                  target="_blank"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                  </svg>

                  <span className="ms-3">Comics Hentai</span>
                </a>
              </li> 
              <li>
                <a 
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  href="https://desu.bio/jav"
                  target="_blank"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd"/>
                  </svg>

                  <span className="ms-3">Jav</span>
                </a>
              </li> 
              <li>
                <a 
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  href="https://igodesu.tv/"
                  target="_blank"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd"/>
                  </svg>

                  <span className="ms-3">Bokep Indo</span>
                </a>
              </li> 
              <li>
                <a 
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  href="https://t.me/iklandesu/"
                  target="_blank"
                >
                  <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clipRule="evenodd"/>
                  </svg>

                  <span className="ms-3">Pasang Iklan</span>
                </a>
              </li> 
            </ul>
        </div>
      </aside>
    </>
  )
}

export default SidebarComponent;