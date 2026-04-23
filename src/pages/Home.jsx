
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Team from "../components/Team";
import useDocumentTitle from "../hooks/useMeta";



const Home = () => {
  useDocumentTitle("Home");
  
  // const changeMsg = () => (msg === defaultMsg) ? setMsg (expendedMsg) : setMsg(defaultMsg);
  return (
    <div>
      <Hero />
      <Services />
      <Team />
      <Pricing />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;