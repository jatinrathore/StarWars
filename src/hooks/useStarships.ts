import { useQuery } from "react-query";
import APIClient from "../services/api-client";

export interface Starship {
  name: string;
  model: string;
  hyperdrive_rating: string;
}

const apiClient = new APIClient<Starship>("starships");

const useStarships = () =>
  useQuery({
    queryKey: ["starships"],
    queryFn: apiClient.getAll,
  });

export default useStarships;
