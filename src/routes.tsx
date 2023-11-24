import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./components/Dashboard";
import FilmsFrame from "./components/Frames/FilmsFrame";
import PeopleFrame from "./components/Frames/PeopleFrame";
import PlanetFrame from "./components/Frames/PlanetFrame";
import SpeciesFrame from "./components/Frames/SpeciesFrame";
import StarShipsFrame from "./components/Frames/StarShipsFrame";
import VehiclesFrame from "./components/Frames/VehiclesFrame";
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
      {
        path: "/planets",
        element: <PlanetFrame />,
      },
      {
        path: "/species",
        element: <SpeciesFrame />,
      },
      {
        path: "/starships",
        element: <StarShipsFrame />,
      },
      {
        path: "/vehicles",
        element: <VehiclesFrame />,
      },
    ],
  },
]);

export default router;
