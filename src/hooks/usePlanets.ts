import APIClient from "../services/api-client";
import { useQuery } from "react-query";

export interface Planet {
  name: string;
  climate: string;
  gravity: string;
}

const apiClient = new APIClient<Planet>("planets");

const usePlanets = () =>
  useQuery({
    queryKey: ["planets"],
    queryFn: apiClient.getAll,
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlanets;
