import Pricing from "../components/Pricing";
import useDocumentTitle from "../hooks/useMeta";


const PricingPage = () => {
  useDocumentTitle("Pricing");
  return (
    <div>
      <Pricing />
    </div>
  );
};

export default PricingPage;