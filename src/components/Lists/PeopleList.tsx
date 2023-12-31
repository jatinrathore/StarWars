import usePeoples from "../../hooks/usePeoples";
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

const PeopleList = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = usePeoples();

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr bg="#4D5875">
            <Th color="white">Name</Th>
            <Th color="white">Birth Year</Th>
            <Th color="white">Gender</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontSize="14px">
          {isLoading && <Spinner mt={10} />}
          {data?.results.map((people, index) => (
            <Tr key={index}>
              <Td>
                <Box display="flex">
                  {children}
                  <Text ml="10px">{people.name}</Text>
                </Box>
              </Td>
              <Td>{people.birth_year}</Td>
              <Td>{people.gender}</Td>
              <Td textAlign="end">
                <CardMenu title={people.name} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PeopleList;
