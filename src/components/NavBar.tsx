import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Star_Wars.png";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="20px" display="flex" justifyContent="space-between">
      <Image
        src={logo}
        boxSize="60px"
        borderRadius="10px"
        objectFit="cover"
        cursor="pointer"
      />
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
