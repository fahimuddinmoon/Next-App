import Banner from "./Componentes/Banner";
import Footer from "./Componentes/Footer";
import Navber from "./Componentes/Navber";
import PageIdea from "./Componentes/PageIdea";
import RealCustomers from "./Componentes/RealCustomers";
import ShowProjects from "./Componentes/ShowProjects";
import Survice from "./Componentes/Survice";
import TransparentPricing from "./Componentes/TransparentPricing";

export default function Home() {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Survice></Survice>
      <ShowProjects></ShowProjects>
      <TransparentPricing></TransparentPricing>
      <PageIdea></PageIdea>
      <RealCustomers></RealCustomers>
      <Footer></Footer>
    </div>
  );
}
