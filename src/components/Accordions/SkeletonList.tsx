import { Stack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const SkeletonList = () => {
  return (
    <Stack>
      <Skeleton height="35px" />
      <Skeleton height="35px" />
      <Skeleton height="35px" />
      <Skeleton height="35px" />
      <Skeleton height="35px" />
    </Stack>
  );
};

export default SkeletonList;
