import Banner from "./Componentes/Banner";
import Footer from "./Componentes/Footer";
import Navber from "./Componentes/Navber";
import PageIdea from "./Componentes/PageIdea";
import Questions from "./Componentes/Questions";
import RealCustomers from "./Componentes/RealCustomers";
import Reviews from "./Componentes/Reviews";
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
      <Reviews></Reviews>
      <Questions></Questions>
      <RealCustomers></RealCustomers>
      <Footer></Footer>
    </div>
  );
}
