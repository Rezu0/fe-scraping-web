import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import PartTagCategoriesComponent from "../feature/PartTagCategoriesComponent";
import { mockApiCategoriesFilter } from "../../utils/mockAPI/mockAPICategories";

function TagCategoriesComponent() {
  const [isCategoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await mockApiCategoriesFilter();
        if (!response.status) toast(response.message); 

        setCategoriesList(response?.data)
        return;
      } catch (err) {
        toast('An error occurred while fetching mock categories (err1 GET)')
        return;
      }
    }

    fetchCategories();
  }, [setCategoriesList]);

  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tonton pulugan ribu video berkualitas tinggi secara gratis! Nikmati streaming cepat tanpa buffering dengan koleksi Video 18+ HD terbaru. Temukan video favoritmu sekarang!" />
        <meta name="keywords" content="streaming, 18+, bokep eropa, mia khalifa, bokep indonesia, video porno, adultdesu, adult, movie adult, netflix and chill, video eropa, video bokep, bokep streaming film dewasa, tontonan eksklusif, hiburan 18+, koleksi premium, video HD, film romantis, tayangan malam, video eksotis, streaming privat, konten khusus, film panas, adult streaming, video privat, nonton premium, film sensasi, hiburan malam, tontonan spesial, koleksi eksklusif, private movies, premium videos, film daring, tayangan khusus, high quality streaming, exclusive content, adult movies, entertainment 18+, private entertainment, premium collection"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Adultdesu - Categories" />
        <meta property="og:description" content="Tonton pulugan ribu video berkualitas tinggi secara gratis! Nikmati streaming cepat tanpa buffering dengan koleksi Video 18+ HD terbaru. Temukan video favoritmu sekarang!" />
        <meta property="og:url" content="https://adultdesu.tv/categories" />
        <title>Adultdesu - Categories</title>
        <link rel="canonical" href="https://adultdesu.tv" />
      </Helmet>

      <div className="container mx-auto px-4 my-5 md:my-10">
        <div className="grid grid-cols-1 p-2.5 md:p-5">
          {/* INI TAG STATIC CATEGORIES */}
          <div className="flex flex-wrap bg-adultdesu-backgroundbox text-adultdesu-navbartext p-3 rounded-lg gap-1">
            <svg className="w-6 h-6 text-adultdesu-navbartext dark:text-adultdesu-navbartext" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
            </svg>
            <span>Adultdesu - Categories</span>
          </div>
          
          <div className="grid grid-cols-12 my-5 gap-3">
            {isCategoriesList?.map((item, index) => (
              <PartTagCategoriesComponent key={index} title={item?.categories} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TagCategoriesComponent;