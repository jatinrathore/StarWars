import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import FrameCard from "../Cards/FrameCard";
import SkeletonCard from "../Cards/SkeletonCard";
import GridListSwitch from "../Switch/GridListSwitch";
import useVehicles from "../../hooks/useVehicles";
import VehiclesList from "../Lists/VehiclesList";
import vehicleCardImg from "../../assets/vehicles.jpg";

const VehiclesFrame = () => {
  const { data, isLoading } = useVehicles();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const [isGridActive, setGrid] = useState(false);

  return (
    <Box padding="10px">
      <HStack width="100%">
        <Text flex="1" fontSize={25} fontWeight="500">
          Vehicles
        </Text>
        <GridListSwitch
          gridActive={false}
          onGridChange={(isGrid) => setGrid(isGrid)}
        />
      </HStack>
      {isGridActive ? (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={4}
          padding="20px 0"
        >
          {isLoading && skeleton.map((s, idx) => <SkeletonCard key={idx} />)}
          {data?.results.map((planet, index) => (
            <FrameCard
              title={planet.name}
              children={<LiaCarSideSolid className="card--icon" />}
              cardImg={vehicleCardImg}
              key={index}
            />
          ))}
        </SimpleGrid>
      ) : (
        <VehiclesList children={<LiaCarSideSolid size="20px" />} />
      )}
    </Box>
  );
};

export default VehiclesFrame;
