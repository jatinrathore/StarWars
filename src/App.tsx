import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import SelectGroup from "./components/SelectGroup";
import HomePage from "./components/HomePage";

function App() {
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
          <HomePage />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
