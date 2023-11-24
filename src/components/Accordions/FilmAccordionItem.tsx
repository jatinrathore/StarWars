import {
  AccordionButton,
  HStack,
  AccordionIcon,
  AccordionPanel,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { PiFilmReel } from "react-icons/pi";
import useFilms from "../../hooks/useFilms";
import "./Accordions.css";
import ListHeading from "./ListHeading";
import SkeletonList from "./SkeletonList";
import { Link } from "react-router-dom";

const FilmAccordionItem = () => {
  const { data, isLoading } = useFilms();

  return (
    <>
      <h2>
        <Link to="/films">
          <AccordionButton
            _expanded={{ borderRadius: "5px", bg: "rgba(203, 26, 128, 1)" }}
          >
            <HStack as="span" flex="1" textAlign="left">
              <PiFilmReel />
              <Text>Films</Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
        </Link>
      </h2>
      <AccordionPanel>
        {isLoading && <SkeletonList />}
        <List>
          {data?.results.map((film, idx) => (
            <ListItem key={idx} className="list-item">
              <ListHeading
                children={<PiFilmReel style={{ marginRight: "10px" }} />}
                title={film.title}
              />
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </>
  );
};

export default FilmAccordionItem;
