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
import { Link } from "react-router-dom";

const PlanetAccordionItem = () => {
  const { data, isLoading } = usePlanets();
  return (
    <>
      <h2>
        <Link to="/planets">
          <AccordionButton
            _expanded={{ borderRadius: "5px", bg: "rgba(203, 26, 128, 1)" }}
          >
            <HStack as="span" flex="1" textAlign="left">
              <PiPlanetBold />
              <Text>Planets</Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
        </Link>
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
