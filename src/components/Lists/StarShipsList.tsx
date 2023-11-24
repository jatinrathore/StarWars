import React, { ReactNode } from "react";
import useStarships from "../../hooks/useStarships";
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

const StarShipsList = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useStarships();

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr bg="#4D5875">
            <Th color="white">Name</Th>
            <Th color="white">Model</Th>
            <Th color="white">Hyperdrive Rating</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontSize="14px">
          {isLoading && <Spinner mt={10} />}
          {data?.results.map((starship, index) => (
            <Tr key={index}>
              <Td>
                <Box display="flex">
                  {children}
                  <Text ml="10px">{starship.name}</Text>
                </Box>
              </Td>
              <Td>{starship.model}</Td>
              <Td>{starship.hyperdrive_rating}</Td>
              <Td textAlign="end">
                <CardMenu title={starship.name} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default StarShipsList;
