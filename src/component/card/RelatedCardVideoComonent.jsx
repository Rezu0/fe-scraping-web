import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { mockApiRelatedVideoFilter } from '../../utils/mockAPI/mockAPIRelatedVideo';
import LoadingBar from "react-top-loading-bar";

function RelatedCardVideoComponent() {
  const [isRelatedVideo, setRelatedVideo] = useState([]);
  const [isProgressBar, setIsProgressBar] = useState(0);
  const [isSlugBefore, setSlugBefore] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const fetchRelatedVideos = async () => {
    try {
      const response = await mockApiRelatedVideoFilter();
      if (!response.status) toast(response.message);

      setRelatedVideo(response?.data);
      return;
    } catch (err) {
      toast('An error occurred while fetching mock related videos (err1 GET)');
      return;
    }
  }

  useEffect(() => {
    setSlugBefore((prev) => {
      if (prev !== slug) {
        fetchRelatedVideos();
        return slug;
      }
      
      return prev;
    });
  }, [setRelatedVideo, slug])

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
      fetchRelatedVideos();
    }, 100);
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <LoadingBar 
        color="#E97991"
        progress={isProgressBar}
        onLoaderFinished={() => setIsProgressBar(0)}
      />
      {isRelatedVideo?.map((item, index) => (
        <div 
          key={index}
          className="col-span-6"
          onClick={async () => await loadingBarState(`/videos/${item.slug}`)}
        >
          <div className="w-full max-w-xs overflow-hidden group">
            <img 
              srcSet={item.image}
              alt="Thumbnail"
              className="w-full h-30 object-cover rounded-md hover:opacity-50 cursor-pointer duration-300"
              loading="lazy"
            />

            <div className="py-1">
              <h3 className="text-xs font-semibold text-adultdesu-navbartext line-clamp-2 group-hover:underline duration-300 cursor-pointer">{item.title}</h3>
            </div>
          </div>
        </div>
      ))}

      
    </div>
  );
}

export default RelatedCardVideoComponent;