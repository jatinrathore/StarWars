import { HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const CardMenuItem = ({ title, children }: Props) => {
  return (
    <HStack>
      {children}
      <Text>{title}</Text>
    </HStack>
  );
};

export default CardMenuItem;
