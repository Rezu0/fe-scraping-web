import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function FooterComponent() {
  const [isProgressBar, setIsProgressBar] = useState(0);
  const navigate = useNavigate();
  const dateFooter = new Date().getFullYear()
  const [isMenuFooter] = useState([
    {
      id: 1,
      nama: 'Videos',
      link: '/',
    },
    {
      id: 2,
      nama: 'Categories',
      link: '/categories'
    }
  ]);

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
      <footer className="bg-adultdesu-backgroundfooter rounded-lg shadow-sm mt-16">
        <div className="flex justify-center text-gray-50 text-xs md:text-base gap-2 md:gap-3 bg-adultdesu-navbartext text-center rounded-t-lg py-1.5">
          {
            isMenuFooter.map((item) => (
              <span 
                key={item.id} 
                className="cursor-pointer" 
                onClick={() => loadingBarState(item.link)}
              >
                {item.nama}
              </span>
            ))
          }
          <a 
            href="https://desu.bio/doujin" 
            className="cursor-pointer"
            target="_blank"
          >
            Comics Hentai
          </a>
          <a 
            href="https://desu.bio/jav" 
            className="cursor-pointer"
            target="_blank"
          >
            Jav
          </a>
          <a 
            href="https://igodesu.tv/" 
            className="cursor-pointer"
            target="_blank"
          >
            Bokep Indo
          </a>
        </div>


        <div className="w-full mx-auto p-4 px-10">
          <div className="grid grid-cols-1 text-center">
            <div className="text-adultdesu-navbartext font-bold text-3xl">ADULTDESU</div>
            <div className="flex justify-center text-adultdesu-navbartext text-xs opacity-60 mt-1 max-w-lg mx-auto">
              UPDATE Video Western setiap hari hanya di Adultdesu. Video Western disini bermuatan konten dewasa, jadi sesuaikanlah dengan bijak antara tontonan anda dengan umur anda. Semua Video disini hanya akting belaka.
            </div>
            <div className="flex justify-center text-adultdesu-navbartext font-bold mt-2 max-w-lg mx-auto gap-1">

              <a href="https://bit.ly/m/doujindesu" className="no-underline">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                </svg>
              </a>

              <a href="https://bit.ly/m/doujindesu" className="no-underline">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                </svg>
              </a>

              <a href="https://discord.com/invite/dhUuhAP" className="no-underline">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
              </a>

            </div>
          </div>
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {dateFooter} <a href="https://flowbite.com/" className="hover:underline">Adultdesu</a>. All Rights Reserved.</span>
        </div>

      </footer>
    </>
  )
}

export default FooterComponent;