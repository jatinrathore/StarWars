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
  });

export default useFilms;
