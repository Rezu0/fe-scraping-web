import { useEffect, useState } from "react";

function TagGenreDetailVideoComponent({ isDataGenre }) {
  const [isGenre, setGenre] = useState([]);

  useEffect(() => {
    setGenre((prev) => [...prev, isDataGenre]);
  }, [isDataGenre])

  const textUppercase = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <>
      {
        isDataGenre?.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 bg-adultdesu-navbartext text-xs text-white px-3 py-1 rounded-sm hover:bg-adultdesu-background-hover duration-300 cursor-pointer mx-1 mb-2"
          >
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
            </svg>
            <span>{textUppercase(item)}</span>
          </div>
        ))
      }
    </>
  );
}

export default TagGenreDetailVideoComponent;
