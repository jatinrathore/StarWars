import APIClient from "../services/api-client";
import { useQuery } from "react-query";

export interface Species {
  name: string;
  classification: string;
  average_lifespan: string;
}

const apiClient = new APIClient<Species>("species");

const useSpecies = () =>
  useQuery({
    queryKey: ["species"],
    queryFn: apiClient.getAll,
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useSpecies;
