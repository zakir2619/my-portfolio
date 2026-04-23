import Faq from "../components/Faq";
import useDocumentTitle from "../hooks/useMeta";



const FaqPage = () => {
  useDocumentTitle  ("FAQ ");
  return (
    <div>
      <Faq />
    </div>
  );
};

export default FaqPage;