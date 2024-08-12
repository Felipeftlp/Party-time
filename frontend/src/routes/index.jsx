import { createBrowserRouter } from "react-router-dom";

// pages
import App from "../App";
import Home from "../pages/Home";
import CreateParty from "../pages/CreateParty";
import Party from "../pages/Party";
import EditParty from "../pages/EditParty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/party/new",
        element: <CreateParty />,
      },
      {
        path: "/party/:id",
        element: <Party />,
      },
      {
        path: "/party/edit/:id",
        element: <EditParty />,
      },
    ],
  },
]);

export default router;