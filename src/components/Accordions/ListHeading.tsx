import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { PiFilmReel } from "react-icons/pi";

interface Props {
  title: string;
  children: ReactNode;
}
const ListHeading = ({ title, children }: Props) => {
  return (
    <>
      <Box as="span" display="flex" alignItems="center">
        {children}
        {title}
      </Box>
      <FaChevronRight style={{ height: "10px" }} />
    </>
  );
};

export default ListHeading;
