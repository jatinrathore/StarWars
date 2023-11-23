import { Box, HStack, Text } from "@chakra-ui/react";
import GridListSwitch from "./Switch/GridListSwitch";

interface Props {
  title: string;
}
const FrameHeader = ({ title }: Props) => {
  return (
    <HStack width="100%">
      <Text flex="1" fontSize={20} fontWeight="500">
        {title}
      </Text>
      <GridListSwitch />
    </HStack>
  );
};

export default FrameHeader;
