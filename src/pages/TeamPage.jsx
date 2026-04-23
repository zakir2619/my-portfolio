import Services from "../components/Services";
import useDocumentTitle from "../hooks/useMeta";


const TeamPage = () => {
  useDocumentTitle("Team ");
  return (
    <div>
      <Services />
    </div>
  );
};

export default TeamPage;