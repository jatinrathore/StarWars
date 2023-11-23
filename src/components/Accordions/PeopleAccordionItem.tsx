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
import ListHeading from "./ListHeading";
import SkeletonList from "./SkeletonList";
import { Link } from "react-router-dom";

const PeopleAccordionItem = () => {
  const { data, isLoading } = usePeoples();
  return (
    <>
      <h2>
        <Link to="/frame">
          <AccordionButton
            _expanded={{ borderRadius: "5px", bg: "rgba(203, 26, 128, 1)" }}
          >
            <HStack as="span" flex="1" textAlign="left">
              <LuUsers2 />
              <Text>People</Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
        </Link>
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
