import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import Dashboard from "../components/Dashboard";
import SelectGroup from "../components/SelectGroup";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
                   "main"`,
        lg: `"nav nav" 
                 "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="sm">
        <GridItem area="aside">
          <SelectGroup />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box>
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Homepage;
