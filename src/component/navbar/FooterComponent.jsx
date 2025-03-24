import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function FooterComponent() {
  const [isProgressBar, setIsProgressBar] = useState(0);
  const navigate = useNavigate();

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
        color="#E97991"
        progress={isProgressBar}
        onLoaderFinished={() => setIsProgressBar(0)}
      />
      <footer className="bg-black rounded-lg shadow-sm mt-16 px-5 md:px-30">
        <div className="w-full mx-auto p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a 
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              onClick={async () => await loadingBarState('/')}
            >
              <div 
                  className="text-adultdesu-navbartext text-2xl font-bold uppercase cursor-pointer"
                >
                Adultdesu
              </div>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-adultdesu-navbartext sm:mb-0">
              <li>
                <a 
                  className="hover:underline me-4 md:me-6 cursor-pointer"
                  onClick={async () => await loadingBarState('/')}
                >
                  Videos
                </a>
              </li>
              <li>
                <a 
                  className="hover:underline me-4 md:me-6 cursor-pointer"
                  onClick={async () => await loadingBarState('/categories')}
                >
                  Categories
                </a>
              </li>
              <li>
                <a 
                  href="https://desu.bio/doujin"
                  className="hover:underline"
                  target="_blank"
                >
                  Comics Hentai
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Adultdesu</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default FooterComponent;