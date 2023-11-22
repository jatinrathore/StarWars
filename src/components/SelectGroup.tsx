import { Accordion, AccordionItem, border } from "@chakra-ui/react";
import FilmAccordionItem from "./Accordions/FilmAccordionItem";
import PeopleAccordionItem from "./Accordions/PeopleAccordionItem";
import PlanetAccordionItem from "./Accordions/PlanetAccordionItem";
import SpeciesAccordionItem from "./Accordions/SpeciesAccordionItem";
import StarShipAccordionItem from "./Accordions/StarShipAccordionItem";
import VehiclesAccordionItem from "./Accordions/VehiclesAccordionItem";

const SelectGroup = () => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem padding={2} border="none">
          <FilmAccordionItem />
        </AccordionItem>

        <AccordionItem padding={2} border="none">
          <PeopleAccordionItem />
        </AccordionItem>

        <AccordionItem padding={2} border="none">
          <PlanetAccordionItem />
        </AccordionItem>

        <AccordionItem padding={2} border="none">
          <SpeciesAccordionItem />
        </AccordionItem>

        <AccordionItem padding={2} border="none">
          <StarShipAccordionItem />
        </AccordionItem>

        <AccordionItem padding={2} border="none">
          <VehiclesAccordionItem />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SelectGroup;
