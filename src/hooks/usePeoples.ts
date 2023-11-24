import { useQuery } from "react-query";
import APIClient from "../services/api-client";

export interface People {
  name: string;
  birth_year: string;
  gender: string;
}

const apiClient = new APIClient<People>("people");

const usePeoples = () =>
  useQuery({
    queryKey: ["people"],
    queryFn: apiClient.getAll,
  });

export default usePeoples;
