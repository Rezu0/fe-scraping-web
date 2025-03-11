import { useEffect, useState } from "react";
import { mockApiCategoriesFilter } from '../../utils/mockAPI/mockAPICategories';
import { toast } from "sonner";

function CheckboxFilterGenreComponent() {
  const [isCategoriesList, setCategoriesList] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await mockApiCategoriesFilter();
        if (!response.status) toast(response.message);

        setCategoriesList(response?.data)
        return;
      } catch (err) {
        toast('An error occurred while fetching mock categories (err1)');
        return;
      }
    }

    fetchCategories(); // CALL FUNCTION fetchCategories
  }, [setCategoriesList])

  return (
    <>
      {isCategoriesList?.map((item, index) => (
          <div 
            key={index}
            className="flex items-center mb-4 flex-wrap"
          >
            <input 
              id={`default-checkbox-${index}`}
              type="checkbox" 
              value="" 
              className="w-4 h-4 accent-adultdesu-navbartext bg-gray-100 border-gray-300  focus:ring-adultdesu-navbartext cursor-pointer"
            />
            <label 
              htmlFor={`default-checkbox-${index}`} 
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 break-words cursor-pointer"
            >
              {item.categories}
            </label>
          </div>
      ))}
    </>
  )
}

export default CheckboxFilterGenreComponent;