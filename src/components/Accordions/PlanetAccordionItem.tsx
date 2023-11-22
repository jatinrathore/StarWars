import {
  AccordionButton,
  HStack,
  AccordionIcon,
  AccordionPanel,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { PiPlanetBold } from "react-icons/pi";
import usePlanets from "../../hooks/usePlanets";
import ListHeading from "./ListHeading";
import SkeletonList from "./SkeletonList";

const PlanetAccordionItem = () => {
  const { data, isLoading } = usePlanets();
  return (
    <>
      <h2>
        <AccordionButton
          _expanded={{ borderRadius: "5px", bg: "rgba(203, 26, 128, 1)" }}
        >
          <HStack as="span" flex="1" textAlign="left">
            <PiPlanetBold />
            <Text>Planet</Text>
          </HStack>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {isLoading && <SkeletonList />}
        <List>
          {data?.results.map((planet, idx) => (
            <ListItem key={idx} className="list-item">
              <ListHeading
                children={<PiPlanetBold style={{ marginRight: "10px" }} />}
                title={planet.name}
              />
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </>
  );
};

export default PlanetAccordionItem;
