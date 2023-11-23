import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import homeLogo from "../assets/star-wars-movie-lucasfilm-disney-worries.webp";
const Dashboard = () => {
  return (
    <div>
      <Card maxW="70dvw" marginY="50" marginX="auto">
        <CardBody>
          <Image src={homeLogo} boxSize="200px" />
          <Heading>Welcome to Star Wars Dashboard</Heading>
          <Text>
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
