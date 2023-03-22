import React from "react";
import {
  Card,
  Typography,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import heroImage from "../Assets/images/Image.png";
import { DPIconContent } from "../Assets/icons";

const HeroSection = () => {
  return (
    <Card sx={{ maxWidth: "100%", p: "20px", position:"relative" }}>
      <CardMedia
        sx={{ height: 140, borderRadius: "10px" }}
        image={heroImage}
        title="green iguana"
      />
      <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: 'center',  }}>
        <DPIconContent style={{position:"absolute", top:"120"}} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Starts in: 3 days : 2 hours : 24 minutes
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>Not Live</Box>
            <Typography>Layers Auction</Typography>
          </Box>
        </Box>

        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
