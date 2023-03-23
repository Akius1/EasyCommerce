import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { DPIconNotification } from "../Assets/icons";

const Header = () => {
  const notifyCircle = (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "12px",
        top: "10px",
        color: " #FFFFFF",
        borderRadius: "100%",
        width: "24px",
        height: "22px",
        background: "#F04438;",
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          color: "#FFFFFF",
          fontWeight: "500",
          lineHeight: "18",
        }}
      >
        2
      </Typography>
    </Box>
  );
  return (
    <Box sx={{ width: "100%", height: "100px", background: "white" }}>
      <Box
        sx={{
          mt: "10px",
          mb: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              color: "101828",
              lineHeight: "38px",
            }}
          >
            Welcome
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "101828",
              lineHeight: "24px",
            }}
          >
            Your current sales auction and activity.
          </Typography>
        </Box>
        <Box sx={{position: "relative"}}>
          <DPIconNotification />
          {notifyCircle}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default Header;
