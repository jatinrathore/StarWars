import {
  Box,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useFilms from "../../hooks/useFilms";
import CardMenu from "../Cards/CardMenu";
import { ReactNode } from "react";

const FilmsList = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useFilms();

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr bg="#4D5875">
            <Th color="white">Name</Th>
            <Th color="white">Director</Th>
            <Th color="white">Realease Date</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontSize="14px">
          {isLoading && <Spinner mt={10} />}
          {data?.results.map((film, index) => (
            <Tr key={index}>
              <Td>
                <Box display="flex">
                  {children}
                  <Text ml="10px">{film.title}</Text>
                </Box>
              </Td>
              <Td>{film.director}</Td>
              <Td>{film.release_date}</Td>
              <Td textAlign="end">
                <CardMenu title={film.title} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FilmsList;
