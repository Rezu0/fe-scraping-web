import { Helmet } from "react-helmet-async";
import NavbarComponent from "./navbar/NavbarComponent";
import { Outlet } from "react-router-dom";

function HomeComponent() {
  return (
    <>
      <Helmet>
        <title>Watch Free HD Porn - Adultdesu</title>
        <meta 
          name="description"
          content="Website content 18+ dari Eropa dan sekitarnya"
        />
      </Helmet>

      <NavbarComponent />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-red-300 p-4 text-center">Kolom 1</div>
        <div className="bg-red-400 p-4 text-center">Kolom 2</div>
        <div className="bg-red-500 p-4 text-center">Kolom 3</div>
      </div> */}

      <div className="container text-white mx-auto px-4">
        <Outlet />
      </div>


    </>
  )
}

export default HomeComponent;