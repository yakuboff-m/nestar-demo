import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Enets</Box>
        </Stack>
      </Container>
  );
}

export default withLayoutMain(Home);
