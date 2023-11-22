import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup width={60}>
        <InputLeftElement children={<BsSearch />} />
        <Input borderRadius={5} placeholder="Search" />
      </InputGroup>
    </>
  );
};

export default SearchInput;
