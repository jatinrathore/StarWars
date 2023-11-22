import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { LuUsers2 } from "react-icons/lu";
import usePeoples from "../../hooks/usePeoples";
import { PiFilmReel } from "react-icons/pi";
import ListHeading from "./ListHeading";
import SkeletonList from "./SkeletonList";

const PeopleAccordionItem = () => {
  const { data, isLoading } = usePeoples();
  return (
    <>
      <h2>
        <AccordionButton
          _expanded={{ borderRadius: "5px", bg: "rgba(203, 26, 128, 1)" }}
        >
          <HStack as="span" flex="1" textAlign="left">
            <LuUsers2 />
            <Text>People</Text>
          </HStack>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {isLoading && <SkeletonList />}
        <List>
          {data?.results.map((people, idx) => (
            <ListItem key={idx} className="list-item">
              <ListHeading
                children={<LuUsers2 style={{ marginRight: "10px" }} />}
                title={people.name}
              />
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </>
  );
};

export default PeopleAccordionItem;
