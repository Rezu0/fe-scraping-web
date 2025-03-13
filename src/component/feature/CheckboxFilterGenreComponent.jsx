import { useEffect, useState } from "react";
import { mockApiCategoriesFilter } from '../../utils/mockAPI/mockAPICategories';
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

function CheckboxFilterGenreComponent() {
  const [isCategoriesList, setCategoriesList] = useState(null);
  const [isCheckedGenre, setCheckedGenre] = useState([]);
  const [isSearchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await mockApiCategoriesFilter();
        if (!response.status) toast(response.message);

        setCategoriesList(response?.data)
        return;
      } catch (err) {
        toast('An error occurred while fetching mock categories (err1 GET)');
        return;
      }
    }

    fetchCategories(); // CALL FUNCTION fetchCategories
  }, [setCategoriesList])

  useEffect(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      (isCheckedGenre.length === 0) ? newParams.delete('genre') : newParams.set('genre', isCheckedGenre.toString());

      return newParams;
    });
  }, [isCheckedGenre, isSearchParams, setSearchParams]);

  const changeTextLowercase = (text) => text.toLowerCase();

  const handlerCheckedBox = (event) => {
    const { value, checked } = event.target;

    setCheckedGenre((prevChecked) =>
      checked ? [...prevChecked, value] : prevChecked.filter((item) => item !== value)
    );
  };

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
              value={changeTextLowercase(item.categories)}
              checked={isCheckedGenre.includes(changeTextLowercase(item.categories))}
              onChange={handlerCheckedBox}
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