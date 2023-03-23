import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import laptopImage from "../Assets/icons/Imagelaptop.svg";
import { Divider } from "@mui/material";


const Cards = () => {
    const nameAbbrev = (
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: " #475467",
            borderRadius: "100%",
            width: "32px",
            height: "32px",
            background: "#F2F4F7",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            KO
          </Typography>
        </Box>
      );
  return (
    <Card sx={{ maxWidth: 293.5 }}>
          <CardMedia
            component="img"
            height="140"
            image={laptopImage}
            alt="green iguana"
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "5px",
              }}
            >
              {nameAbbrev}
              <Typography
                sx={{ fontSize: 12, fontWeight: "600" }}
                component="div"
              >
                Koray Okumus{" "}
                <span style={{ color: "#98A2B3" }}>(Highest Bidder)</span>
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                fontSize: 14,
                fontWeight: "600",
                my: "10px",
                lineHeight: "20px",
              }}
            >
              Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Rose Gold
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "5px",
                mb: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: "400",
                  lineHeight: "20px",
                  color: " #344054",
                }}
                component="span"
              >
                Current Bid:
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: 14, fontWeight: "600", lineHeight: "20px" }}
              >
                ₦795,000
              </Typography>
            </Box>
            <Divider />
          </CardContent>
          <CardActions>
            <Button
              sx={{ width: "100%", background: "#004CCC", color: "white" }}
            >
              Add to wishlist
            </Button>
          </CardActions>
        </Card>
  )
}

export default Cards