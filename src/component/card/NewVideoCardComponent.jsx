import { useEffect, useState } from "react";
import { toast } from "sonner";
import { mockAPIVideos } from '../../utils/mockAPI/mockAPIVideos';
import { formatDateToString } from "../../utils/date/handlerDate";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function NewVideoCardComponent() {
  const navigate = useNavigate();
  const [isProgressBar, setIsProgressBar] = useState(0);
  const [isContentVideos, setContentVideos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContentVideos = async () => {
      setLoading(true);
      try {
        const response = await mockAPIVideos({ limit: 12 });
        if (!response.status) toast(response.message);

        setContentVideos(response?.data);
        return;
      } catch (err) {
        toast('An error occurred while fetching mock Videos (err1 GET)');
      } finally {
        setLoading(false);
      }
    }

    fetchContentVideos();
  }, [setContentVideos]);

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
       color="#E97991"
       progress={isProgressBar}
       onLoaderFinished={() => setIsProgressBar(0)}
      />
      {isLoading ? (
        <div className="w-full text-center text-adultdesu-navbartext">
          Loading...
        </div> 
      ) : (
        isContentVideos?.map((item, index) => (
          <div
            key={index} 
            className="w-full max-w-xs overflow-hidden group"
            onClick={async () => await loadingBarState(`/videos/${item.slug}`)}
          >
            <img 
              srcSet={item.image}
              className="w-full h-36 md:h-48 object-cover rounded-md hover:opacity-50 cursor-pointer duration-300"
              loading="lazy"
            />

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

export default NewVideoCardComponent;