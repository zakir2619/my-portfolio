import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FrontEnd from "./layouts/FrontEnd";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";
import FaqPage from "./pages/FaqPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <FrontEnd />,
      children: [
        { path: "", element: <Home /> },
        { path: "services", element: <ServicePage /> },
        { path: "team", element: <TeamPage /> },
        { path: "pricing", element: <PricingPage /> },
        { path: "faq", element: <FaqPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ],
  {
    basename: "/my-portfolio",
  }
);
export default router;