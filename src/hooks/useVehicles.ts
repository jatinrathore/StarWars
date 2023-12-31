import APIClient from "../services/api-client";
import { useQuery } from "react-query";

export interface Vehicle {
  name: string;
  model: string;
  max_atmosphering_speed: string;
}

const apiClient = new APIClient<Vehicle>("vehicles");

const useVehicles = () =>
  useQuery({
    queryKey: ["vehicles"],
    queryFn: apiClient.getAll,
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useVehicles;
