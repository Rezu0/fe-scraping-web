import { useEffect, useState } from "react";

function ButtonServerComponent({ isServerVideo }) {
  const [isServer, setServer] = useState([]);

  useEffect(() => {
    setServer(isServerVideo);
  }, [isServerVideo])

  return (
    <>
      {isServer?.filter(item => item !== null).map((item, index) => (
        <div 
          key={index}
          className="flex items-center bg-adultdesu-navbartext px-3 py-1 text-xs rounded-sm cursor-pointer"
        >
          <svg className="w-4 h-4 text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M5 5a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H5Zm9 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17ZM3 17v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm11-2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd"/>
          </svg>
          <span>Server { index + 1 }</span>
        </div>
      ))}
    </>
  )
}

export default ButtonServerComponent;