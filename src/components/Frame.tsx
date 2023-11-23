import { Box } from "@chakra-ui/react";
import FrameHeader from "./FrameHeader";
import FrameBody from "./FrameBody";

const Frame = () => {
  return (
    <Box padding="10px">
      <FrameHeader title="Films" />
      <FrameBody />
    </Box>
  );
};

export default Frame;
