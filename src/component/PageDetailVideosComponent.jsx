import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import RelatedCardVideoComponent from "./card/RelatedCardVideoComonent";
import TagGenreDetailVideoComponent from "./feature/TagGenreDetailVideoComponent";
import { mockAPIDetailVideos } from '../utils/mockAPI/mockAPIDetailVideos';
import ButtonServerComponent from "./feature/ButtonServerComponent";
import NoVideoImage from '../component/assets/img/no-video.jpg';
import NewVideoCardComponent from "./card/NewVideoCardComponent";

const NoVideoImageComponent = () => {
  return (
    <img src={NoVideoImage} alt="Tidak ada video" className="w-full" />
  )
}

function PageDetailVideosComponent() {
  const { slug } = useParams();
  const [isDetailVideos, setDetailVideos] = useState(null);
  const [isServerVideo, setServerVideo] = useState([]);
  const [isServerAcitve, setServerActive] = useState(null);

  useEffect(() => {
    const fetchDetailVideos = async () => {
      try {
        const response = await mockAPIDetailVideos(slug);
        if (!response.status) toast(response.message);

        setDetailVideos(response?.data);
        setServerVideo(
          [response?.data?.videoEmbedFirst, response?.data?.videoEmbedSecond].map((item) => item?.includes("vid.xtapes.to") ? NoVideoImage : item));
        setServerActive(null)
        return;
      } catch (err) {
        toast('An error occurred while fetching mock Detail Videos (err1 GET)');
      }
    }

    fetchDetailVideos();
  }, [slug])

  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={`${isDetailVideos?.title} - Tonton video berkualitas HD tanpa buffering. Streaming ${isDetailVideos?.title} terbaru hanya di Adultdesu! Cari video 18+ favoritmu? Streaming HD tanpa batas dengan koleksi terlengkap dan tercepat. Klik sekarang dan nikmati!`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${isDetailVideos?.title} - Adultdesu`} />
        <meta property="og:description" content={`${isDetailVideos?.title} - Tonton video berkualitas HD tanpa buffering. Streaming ${isDetailVideos?.title} terbaru hanya di Adultdesu! Cari video 18+ favoritmu? Streaming HD tanpa batas dengan koleksi terlengkap dan tercepat. Klik sekarang dan nikmati!`} />
        <meta property="og:url" content={`https://adultdesu.tv/videos/${isDetailVideos?.slug}`} />
        <meta name="keywords" content="streaming, 18+, bokep eropa, mia khalifa, bokep indonesia, video porno, adultdesu, adult, movie adult, netflix and chill, video eropa, video bokep, bokep streaming film dewasa, tontonan eksklusif, hiburan 18+, koleksi premium, video HD, film romantis, tayangan malam, video eksotis, streaming privat, konten khusus, film panas, adult streaming, video privat, nonton premium, film sensasi, hiburan malam, tontonan spesial, koleksi eksklusif, private movies, premium videos, film daring, tayangan khusus, high quality streaming, exclusive content, adult movies, entertainment 18+, private entertainment, premium collection"/>
        <title>{isDetailVideos?.title ? `Adultdesu - ${isDetailVideos.title}` : "Adultdesu - Streaming HD"}</title>

        <link rel="canonical" href="https://adultdesu.tv" />
      </Helmet>
      <div className="container mx-auto my-12">
        <div className="grid grid-cols-12 gap-4 mb-7 duration-300 transition-transform">
          <div className="col-span-12 md:col-span-8 bg-adultdesu-backgroundbox rounded-sm px-4 py-3 text-adultdesu-navbartext">
            { isDetailVideos?.title }
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 md:col-span-8 h-fit bg-transparent">
            {/* BOX GRID UNTUK IFRAME */}
            <div className="grid grid-cols-1 bg-adultdesu-backgroundbox py-3 px-5 rounded-sm">
              {/* IFRAME VIDEO */}
              <div className="relative w-full pb-[56.25%] overflow-hidden rounded-sm">
                  <iframe
                    src={!isServerAcitve ? isServerVideo[0] : isServerAcitve}
                    title={isDetailVideos?.title}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    referrerPolicy="origin"
                  />
              </div>
              {/* BUTTON SERVER */}
              <div className="grid grid-cols-12 mt-3">
                <div className="col-span-8 flex gap-2">
                  <ButtonServerComponent 
                    isServerVideo={isServerVideo}
                    isServerAcitve={isServerAcitve}
                    setServerActive={setServerActive}
                  />
                </div>

                <div className="col-span-4">
                  <span className="flex justify-end text-gray-500 opacity-50 text-sm">
                    <svg className="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>

                    <span className="mx-2">{isDetailVideos?.duration}</span>
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-12 mt-10 mb-5">
                <div className="col-span-12 md:col-start-7 md:col-span-6 flex flex-wrap justify-end">
                  <TagGenreDetailVideoComponent isDataGenre={isDetailVideos?.tags} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 my-7 duration-300 transition-transform bg-adultdesu-backgroundbox rounded-sm p-5">
              <span className="text-lg text-adultdesu-navbartext underline underline-offset-2 decoration-adultdesu-navbartext">
                New Videos
              </span>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                <NewVideoCardComponent />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 h-fit bg-adultdesu-backgroundbox py-3 px-5 rounded-sm hidden md:block">
            <div className="grid grid-cols-1">
              <span className="text-adultdesu-navbartext underline underline-offset-2 decoration-adultdesu-navbartext my-5 text-lg">Related Videos</span>
              <RelatedCardVideoComponent />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default PageDetailVideosComponent;