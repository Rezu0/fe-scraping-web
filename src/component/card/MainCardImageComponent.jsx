import { useEffect, useState } from "react";
import { mockAPIVideos } from "../../utils/mockAPI/mockAPIVideos";
import { formatDateToString } from '../../utils/date/handlerDate';
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

function MainCardImageComponent({ sendDataToParent }) {
  const [isContentVideos, setContentVideos] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const fetchContentVideos = async () => {
      setLoading(true);
      try {
        const page = searchParams.get('page') ?? 1;
        const genre = searchParams.get('genre');
        const response = await mockAPIVideos({ page: page });
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

  return (
    <>
      {isLoading ? (
        <div className="w-full text-center text-adultdesu-navbartext">
          Loading...
        </div>
      ) : (
        isContentVideos?.map((item, index) => (
          <div 
            key={index}
            className="w-full max-w-xs shadow-md overflow-hidden group"
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
              <h3 className="text-md font-semibold text-adultdesu-navbartext line-clamp-2 group-hover:underline duration-300 cursor-pointer">{item.title}</h3>
              <p className="text-sm text-gray-500 no-underline">{formatDateToString(item.created)}</p>
              <p className="text-sm text-gray-500 no-underline">{ item.duration }</p>
            </div>
          </div>
        ))
      )}
      
    </>
  )
}

export default MainCardImageComponent;