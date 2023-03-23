import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Cards from "./Card";
import Grid from '@mui/material/Grid';

export default function OutlinedCard() {
 
  return (
    <Card sx={{ maxWidth: "100%", mt: "20px" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: "600",
              color: " #101828",
              lineHeight: "28px",
            }}
          >
            Featured Items
          </Typography>
          <Button
            variant="outlined"
            sx={{
              px: "10px",
              borderColor: "#D0D5DD",
              color: "#344054",
              textTransform: "capitalize",
              fontSize: 14,
              fontWeight: "600",
              lineHeight: "20px",
            }}
          >
            View Auction
          </Button>
        </Box>

        <Divider sx={{ my: "20px" }} />

    

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3, lg:4 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Cards />
          </Grid>
        ))}
      </Grid>
    </Box>

       
      </CardContent>
    </Card>
  );
}
