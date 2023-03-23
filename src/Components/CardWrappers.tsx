import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Cards from "./Card";
import Grid from "@mui/material/Grid";
import { useGetAllDataQuery } from "../stores/apiServices";
type DataType = {
  name: string;
  title: string;
  bid: string;
  image: string;
};

export default function OutlinedCard() {
  const { data, error, isLoading } = useGetAllDataQuery("");

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
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 4 }}
            columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
          >
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data && data.data ? (
              data.data.map((product: DataType) => (
                <Grid item xs={2} sm={4} md={4} key={product.name}>
                  <Cards product={product} />
                </Grid>
              ))
            ) : null}
          </Grid>
        </Box>

      </CardContent>
    </Card>
  );
}
