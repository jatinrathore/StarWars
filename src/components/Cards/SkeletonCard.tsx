import { Stack, Skeleton, Box } from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
  return (
    <>
      <Box>
        <Box>
          <Skeleton height={40} borderRadius="5px" />
        </Box>
        <Box mt={2}>
          <Skeleton height={10} borderRadius="5px" />
        </Box>
      </Box>
    </>
  );
};

export default SkeletonCard;
