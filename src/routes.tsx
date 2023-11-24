import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./components/Dashboard";
import FilmsFrame from "./components/Frames/FilmsFrame";
import PeopleFrame from "./components/Frames/PeopleFrame";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/films",
        element: <FilmsFrame />,
      },
      {
        path: "/people",
        element: <PeopleFrame />,
      },
    ],
  },
]);

export default router;
