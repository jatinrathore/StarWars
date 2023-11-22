import APIClient from "../services/api-client";
import { useQuery } from "react-query";

export interface Species {
  name: string;
  homeworld: string;
  average_lifespan: string;
}

const apiClient = new APIClient<Species>("species");

const useSpecies = () =>
  useQuery({
    queryKey: ["species"],
    queryFn: apiClient.getAll,
  });

export default useSpecies;
