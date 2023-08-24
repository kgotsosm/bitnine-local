import { useEffect } from "react";
import { Navbar, AgensSql, EnterprisePack, Features, PackageDetails, Footer } from "../components";

const MainContent = () => {

  return (
    <>
      <Navbar />
      <AgensSql />
      <EnterprisePack />
      <Features />
      <PackageDetails />
      <Footer />
    </>
  );
};

export default MainContent;
