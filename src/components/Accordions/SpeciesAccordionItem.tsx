import {
  AccordionButton,
  HStack,
  AccordionIcon,
  AccordionPanel,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { PiAlien } from "react-icons/pi";
import useSpecies from "../../hooks/useSpecies";
import ListHeading from "./ListHeading";
import SkeletonList from "./SkeletonList";
import { Link } from "react-router-dom";

const SpeciesAccordionItem = () => {
  const { data, isLoading } = useSpecies();

  return (
    <>
      <h2>
        <Link to="/frame">
          <AccordionButton
            _expanded={{ borderRadius: "5px", bg: "rgba(203, 26, 128, 1)" }}
          >
            <HStack as="span" flex="1" textAlign="left">
              <PiAlien />
              <Text>Species</Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
        </Link>
      </h2>
      <AccordionPanel pb={4}>
        {isLoading && <SkeletonList />}
        <List>
          {data?.results.map((specie, idx) => (
            <ListItem key={idx} className="list-item">
              <ListHeading
                children={<PiAlien style={{ marginRight: "10px" }} />}
                title={specie.name}
              />
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </>
  );
};

export default SpeciesAccordionItem;
