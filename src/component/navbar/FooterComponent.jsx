function FooterComponent() {
  return (
    <footer className="bg-black rounded-lg shadow-sm mt-16 px-5 md:px-30">
      <div className="w-full mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <div 
                className="text-adultdesu-navbartext text-2xl font-bold uppercase cursor-pointer"
              >
              Adultdesu
            </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-adultdesu-navbartext sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Videos</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Kategori</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Komik Bokep</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Adultdesu</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default FooterComponent;