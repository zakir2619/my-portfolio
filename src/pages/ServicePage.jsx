import Services from "../components/Services";
import useDocumentTitle from "../hooks/useMeta";

const ServicePage = () => {
  useDocumentTitle("Services ");
  return (
    <div>
      <Services />
    </div>
  );
};

export default ServicePage;