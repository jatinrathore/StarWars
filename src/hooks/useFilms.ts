import { useQuery } from "react-query";
import APIClient from "../services/api-client";

export interface Films {
  title: string;
  release_date: string;
  director: string;
}

const apiClient = new APIClient<Films>("films");

const useFilms = () =>
  useQuery({
    queryKey: ["films"],
    queryFn: apiClient.getAll,
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useFilms;
