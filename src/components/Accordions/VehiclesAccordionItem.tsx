import {
  AccordionButton,
  HStack,
  AccordionIcon,
  AccordionPanel,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { LiaCarSideSolid } from "react-icons/lia";
import useVehicles from "../../hooks/useVehicles";
import ListHeading from "./ListHeading";
import SkeletonList from "./SkeletonList";

const VehiclesAccordionItem = () => {
  const { data, isLoading } = useVehicles();

  return (
    <>
      <h2>
        <AccordionButton
          _expanded={{ borderRadius: "5px", bg: "rgba(203, 26, 128, 1)" }}
        >
          <HStack as="span" flex="1" textAlign="left">
            <LiaCarSideSolid />
            <Text>Vehicles</Text>
          </HStack>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {isLoading && <SkeletonList />}
        <List>
          {data?.results.map((vehicle, idx) => (
            <ListItem key={idx} className="list-item">
              <ListHeading
                children={<LiaCarSideSolid style={{ marginRight: "10px" }} />}
                title={vehicle.name}
              />
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </>
  );
};

export default VehiclesAccordionItem;
