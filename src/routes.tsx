import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./components/Dashboard";
import Example from "./components/Example";
import GridListSwitch from "./components/Switch/GridListSwitch";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <GridListSwitch />,
      },
      {
        path: "/jk",
        element: <Example />,
      },
    ],
  },
]);

export default router;
