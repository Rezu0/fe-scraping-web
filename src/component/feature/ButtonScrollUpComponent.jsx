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
      className={`fixed bottom-5 right-5 p-3 bg-adultdesu-navbartext hover:bg-adultdesu-background-hover text-white rounded-full shadow-lg cursor-pointer transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
      </svg>
    </button>
  )
}

export default ButtonScrollUpComponent;