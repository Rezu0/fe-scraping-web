import { Helmet } from "react-helmet-async";
import NavbarComponent from "./navbar/NavbarComponent";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import FooterComponent from "./navbar/FooterComponent";
import ButtonScrollUpComponent from "./feature/ButtonScrollUpComponent";

function HomeComponent() {
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tonton pulugan ribu video berkualitas tinggi secara gratis! Nikmati streaming cepat tanpa buffering dengan koleksi Video 18+ HD terbaru. Temukan video favoritmu sekarang!" />
        <meta name="keywords" content="streaming, 18+, bokep eropa, mia khalifa, bokep indonesia, video porno, adultdesu, adult, movie adult, netflix and chill, video eropa, video bokep, bokep streaming film dewasa, tontonan eksklusif, hiburan 18+, koleksi premium, video HD, film romantis, tayangan malam, video eksotis, streaming privat, konten khusus, film panas, adult streaming, video privat, nonton premium, film sensasi, hiburan malam, tontonan spesial, koleksi eksklusif, private movies, premium videos, film daring, tayangan khusus, high quality streaming, exclusive content, adult movies, entertainment 18+, private entertainment, premium collection"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Adultdesu - Watch Free HD Porn" />
        <meta property="og:description" content="Tonton pulugan ribu video berkualitas tinggi secara gratis! Nikmati streaming cepat tanpa buffering dengan koleksi Video 18+ HD terbaru. Temukan video favoritmu sekarang!" />
        <meta property="og:url" content="https://adultdesu.tv" />
        <title>Watch Free HD Porn - Adultdesu</title>
        <link rel="canonical" href="https://adultdesu.tv" />
      </Helmet>

      <NavbarComponent />

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="container text-white mx-auto px-4">
            <Outlet />
            <Toaster position="bottom-right" />
            <ButtonScrollUpComponent />
          </div>
          {/* Konten utama di sini */}
        </main>
        <FooterComponent />
      </div>
    </>
  )
}

export default HomeComponent;