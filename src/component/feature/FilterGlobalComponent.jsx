function FilterGlobalComponent() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-5">
        <div className="p-4 text-end">
          {/* FILTER SORT BY */}
          <div className="hover:bg-adultdesu-navbartext inline-flex items-center gap-2 cursor-pointer p-2 mx-1 rounded-sm duration-300 transition-transform active:scale-75 select-none">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"/>
            </svg>

            <span>Sort by</span>
          </div>

          {/* FILTER GENRE INI NANTINYA */}
          <div className="hover:bg-adultdesu-navbartext inline-flex items-center gap-2 cursor-pointer p-2 mx-1 rounded-sm duration-300 transition-transform active:scale-75 select-none">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
            </svg>
            <span>Filter by</span>
          </div>

          <div class="fixed top-1/3 right-5 sm:right-10 md:right-20 -translate-y-16 
               bg-black border border-adultdesu-navbartext py-2 px-4 rounded-md 
               w-5/6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm text-start">
            <div className="text-md uppercase underline underline-offset-2 decoration-adultdesu-navbartext">
              Filter Genre
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterGlobalComponent;