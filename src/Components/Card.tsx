import React from "react";
import {Box,  Card, CardActions, CardContent, Button, Typography, Divider, CardMedia } from "@mui/material/";
import {makeStyles} from "@mui/styles";

import { ExtraFirstLetter } from "../helper";

type DataType = {
  name: string;
  title: string;
  bid: string;
  image: string;
};
type AuctionResponseType = {
  success: string;
  message: string;
  data: Array<DataType>;
};
const useStyles = makeStyles({
    flexGrow: {
      flex: '1',
    },
    button: {
      backgroundColor: '#004CCC',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#004CCC',
        // padding: "4px",
    },
    
  },
  cardactions: {
    paddingTop: 0,
    "&:last-child": {
      paddingBottom: 8
    }
  },

})
const Cards: React.FC<any> = ({ product }) => {
    
      const classes = useStyles()

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
      <Typography
        sx={{ fontSize: 14, color: "#475467", fontWeight: "500" }}
        color="text.secondary"
      >
        {ExtraFirstLetter(product.name)}
      </Typography>
    </Box>
  );
  return (
    <Card sx={{ maxWidth: 293.5 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
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
          <Typography sx={{ fontSize: 12, fontWeight: "600" }} component="div">
            {product.name}
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
          {product.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "5px",
            mb: "12px",
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
            {product.bid}
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardActions className={classes.cardactions}>
        <Button sx={{ width: "100%", textTransform: "capitalize", }} className={classes.button}>
          Add to wishlist
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
