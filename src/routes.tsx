import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./components/Dashboard";
import FramesPage from "./pages/FramesPage";
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
        path: "/frame",
        element: <FramesPage />,
      },
    ],
  },
]);

export default router;
