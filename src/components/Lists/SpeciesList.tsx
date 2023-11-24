import React, { ReactNode } from "react";
import useSpecies from "../../hooks/useSpecies";
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

const SpeciesList = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useSpecies();

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr bg="#4D5875">
            <Th color="white">Name</Th>
            <Th color="white">Classification</Th>
            <Th color="white">Average Lifespan</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontSize="14px">
          {isLoading && <Spinner mt={10} />}
          {data?.results.map((specie, index) => (
            <Tr key={index}>
              <Td>
                <Box display="flex">
                  {children}
                  <Text ml="10px">{specie.name}</Text>
                </Box>
              </Td>
              <Td>{specie.classification}</Td>
              <Td>{specie.average_lifespan}</Td>
              <Td textAlign="end">
                <CardMenu title={specie.name} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SpeciesList;
