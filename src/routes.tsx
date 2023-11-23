import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./components/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
