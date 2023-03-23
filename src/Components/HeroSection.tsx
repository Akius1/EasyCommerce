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
import { DPIconContent, DPIconThumbsUp } from "../Assets/icons";

const HeroSection = () => {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1.5)', color:" #F79009",  }}
        >
          •
        </Box>
      );
  return (
    <Card sx={{ maxWidth: "100%", p: "20px", position:"relative" }}>
      <CardMedia
        sx={{ height: 140, borderRadius: "10px" }}
        image={heroImage}
        title="green iguana"
      />
      <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'  }}>
        <DPIconContent style={{position:"absolute", top:"120"}} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl:"180px"
          }}
        >
          <Typography gutterBottom variant="h6" component="div" >
            Starts in: 3 days : 2 hours : 24 minutes
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap:"5px",
            }}
          >
            <Typography component={'div'} variant={"body2"} sx={{backgroundColor:"#FFFAEB", color:"#B54708" , py:"2px", px:"8px", }}>{bull} Not Live</Typography>
            <Typography variant={"body2"} sx={{ color:"#475467" , py:"2px", px:"8px", }}>Layers Auction</Typography>
          </Box>
        </Box>

        <CardActions>
        <Button variant="outlined" sx={{px:"10px", borderColor: "#D0D5DD", color: "#344054", textTransform: "capitalize"}} >
            <DPIconThumbsUp />
            <span style={{paddingLeft:"5px"}}>
            Accept Invite
            </span>
            
        </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
