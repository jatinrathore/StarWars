import usePlanets from "../../hooks/usePlanets";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Spinner,
  Td,
  Box,
  Text,
} from "@chakra-ui/react";
import CardMenu from "../Cards/CardMenu";
import { ReactNode } from "react";

const PlanetList = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = usePlanets();

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr bg="#4D5875">
            <Th color="white">Name</Th>
            <Th color="white">Climate</Th>
            <Th color="white">Gravity</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontSize="14px">
          {isLoading && <Spinner mt={10} />}
          {data?.results.map((planet, index) => (
            <Tr key={index}>
              <Td>
                <Box display="flex">
                  {children}
                  <Text ml="10px">{planet.name}</Text>
                </Box>
              </Td>
              <Td>{planet.climate}</Td>
              <Td>{planet.gravity}</Td>
              <Td>
                <CardMenu title={planet.name} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PlanetList;
