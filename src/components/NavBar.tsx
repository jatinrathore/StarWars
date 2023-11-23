import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Star_Wars.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="20px" display="flex" justifyContent="space-between">
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          borderRadius="10px"
          objectFit="cover"
          cursor="pointer"
        />
      </Link>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
