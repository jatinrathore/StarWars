import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import homeLogo from "../assets/star-wars-movie-lucasfilm-disney-worries.webp";
const Dashboard = () => {
  return (
    <div>
      <Card maxW="70dvw" marginY="30px" marginX="auto">
        <CardBody bg="white" borderRadius="10px" color="black">
          <Image
            src={homeLogo}
            height="300px"
            width="100%"
            borderRadius="10px"
          />
          <Heading mt={4}>Welcome to Star Wars Dashboard</Heading>
          <Heading>Dashboard</Heading>
          <Text mt={4}>
            Star Wars is an American epic space opera media franchise created by
            George Lucas, which began with the eponymous 1977 film and quickly
            became a worldwide pop culture phenomenon.
          </Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;
