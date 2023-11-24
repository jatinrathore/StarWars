import {
  Box,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useFilms from "../../hooks/useFilms";
import CardMenu from "../Cards/CardMenu";

const FilmsList = () => {
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
              <Td>{film.title}</Td>
              <Td>{film.director}</Td>
              <Td>{film.release_date}</Td>
              <Td>
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
