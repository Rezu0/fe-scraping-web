import { useEffect, useState } from "react";
import { mockAPIVideos } from "../../utils/mockAPI/mockAPIVideos";
import { formatDateToString } from '../../utils/date/handlerDate';
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

import LoadingBar from "react-top-loading-bar";

function MainCardImageComponent({ sendDataToParent }) {
  const [isProgressBar, setIsProgressBar] = useState(0);
  const navigate = useNavigate();
  const [isContentVideos, setContentVideos] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const fetchContentVideos = async () => {
      setLoading(true);
      try {
        const page = searchParams.get('page') ?? 1;
        const genreFilter = (searchParams.has('genre')) ? searchParams.get('genre').split(',') : '';
        const sortFilter = (searchParams.has('sort')) ? searchParams.get('sort') : '';
        const searchFilter = (searchParams.has('search')) ? searchParams.get('search') : '';
        const response = await mockAPIVideos({ page: page, tags: genreFilter, sort: sortFilter, search: searchFilter });
        if (!response.status) toast(response.message);

        setContentVideos(response?.data);
        sendDataToParent(response?.pagination);
        return;
      } catch (err) {
        toast('An error occurred while fetching mock Videos (err1 GET)');
        return;
      } finally {
        setLoading(false); // jika tidak ingin ada loading atau pun refresh ke atas maka hapus loading nya
      }
    }

    fetchContentVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setContentVideos, searchParams])

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
    })

    setTimeout(() => {
      navigate(dataNavigate);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }

  return (
    <>
      <LoadingBar 
        color="#ad1320"
        progress={isProgressBar}
        onLoaderFinished={() => setIsProgressBar(0)}
      />
      {isLoading ? (
        <div className="w-full text-center text-adultdesu-navbartext">
          Loading...
        </div>
      ) : (
        isContentVideos && isContentVideos?.length > 0 ? (
          isContentVideos?.map((item, index) => (
            <div 
              key={index}
              className="w-full max-w-xs shadow-md overflow-hidden group"
              onClick={async () => await loadingBarState(`videos/${item.slug}`)}
            >
              {/* Gambar */}
              <img 
                srcSet={item.image}
                alt="Thumbnail"
                className="w-full h-48 object-cover rounded-md hover:opacity-50 cursor-pointer duration-300"
                loading="lazy"
              />
    
              {/* Konten di Bawah Gambar */}
              <div className="py-1">
                <h3 className="text-md font-semibold text-adultdesu-navbartext group-hover:underline duration-300 cursor-pointer line-clamp-1">{item.title}</h3>
                <p className="text-sm text-gray-500 no-underline">{formatDateToString(item.created)}</p>
                <p className="text-sm text-gray-500 no-underline">{ item.duration }</p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-start text-2xl text-adultdesu-navbartext my-10">
            Tidak ada videos
          </div>
        )
      )}
      
    </>
  )
}

export default MainCardImageComponent;