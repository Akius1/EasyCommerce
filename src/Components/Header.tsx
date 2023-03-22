import React from 'react';
import { Box, Typography, } from "@mui/material";
import Divider from "@mui/material/Divider";
import { DPIconNotification } from '../Assets/icons';

const Header = () => {
  return (
    <Box sx={{ width: "100%", height: "100px", background: "white" }}>
    <Box
      sx={{
        mt: "10px",
        mb: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h4" component="h3">
          Welcome
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Your current sales auction and activity.
        </Typography>
      </Box>
      <DPIconNotification />
    </Box>
    <Divider />
  </Box>
  )
}

export default Header