import React, { ReactNode } from "react";
import useVehicles from "../../hooks/useVehicles";
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

const VehiclesList = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useVehicles();

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr bg="#4D5875">
            <Th color="white">Name</Th>
            <Th color="white">Model</Th>
            <Th color="white">Top Speed</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontSize="14px">
          {isLoading && <Spinner mt={10} />}
          {data?.results.map((vehicle, index) => (
            <Tr key={index}>
              <Td>
                <Box display="flex">
                  {children}
                  <Text ml="10px">{vehicle.name}</Text>
                </Box>
              </Td>
              <Td>{vehicle.model}</Td>
              <Td>{vehicle.max_atmosphering_speed}</Td>
              <Td textAlign="end">
                <CardMenu title={vehicle.name} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default VehiclesList;
