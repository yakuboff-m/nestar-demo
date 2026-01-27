import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box className="agent-img">
        <img src="/img/profile/girl.svg" alt="" />
      </Box>
      <Typography className="agent-name">Martin</Typography>
      <Typography className="agent-role">AGENT</Typography>
    </Stack>
  );
};

export default TopAgentCard;