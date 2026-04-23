import useDocumentTitle from "../hooks/useMeta";
import Contact from "../components/Contact";
const ContactPage = () => {
  useDocumentTitle("Contact Page");
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;