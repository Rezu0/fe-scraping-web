import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function PartTagCategoriesComponent({ title }) {
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

  const changeTextLowercase = (text) => text.toLowerCase();

  return (
    <>
      <LoadingBar 
        color="#ad1320"
        progress={isProgressBar}
        onLoaderFinished={() => setIsProgressBar(0)}
      />
      <div 
        className="flex items-center col-span-6 md:col-span-3 lg:col-span-2 bg-adultdesu-navbartext p-2 rounded-sm gap-2 cursor-pointer hover:bg-adultdesu-background-hover duration-300"
        onClick={async () => await loadingBarState(`/?genre=${changeTextLowercase(title)}`)}
      >
        <svg
          className="w-5 h-5 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
        </svg>
        
        <span className="text-sm truncate max-w-[80%]">{title}</span>
      </div>
    </>
  );
}

export default PartTagCategoriesComponent;
