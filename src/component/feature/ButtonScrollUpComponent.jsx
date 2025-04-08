import { useEffect, useState } from "react";

function ButtonScrollUpComponent() {
  const [isVisible, setIsVisible] = useState(false);

  // Cek posisi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-0 right-20 py-2 px-3 bg-adultdesu-navbartext hover:bg-adultdesu-background-hover text-white rounded-t-md shadow-lg cursor-pointer transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd"/>
      </svg>

    </button>
  )
}

export default ButtonScrollUpComponent;