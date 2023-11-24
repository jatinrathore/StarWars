import { HStack, Text } from "@chakra-ui/react";
import GridListSwitch from "../Switch/GridListSwitch";

interface Props {
  title: string;
  onGridChange: (isGrid: boolean) => void;
}
const FrameHeader = ({ title, onGridChange }: Props) => {
  return (
    <HStack width="100%">
      <Text flex="1" fontSize={25} fontWeight="500">
        {title}
      </Text>
      <GridListSwitch
        gridActive={true}
        onGridChange={(isGrid) => onGridChange(isGrid)}
      />
    </HStack>
  );
};

export default FrameHeader;
