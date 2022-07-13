import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ModalAmount from "../modalsAmount";

export const NumericKeyboard = ({ isDisabled, handleClick }) => {
  const arrayButtonsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Borrar", 0];
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ModalAmount open={open} setOpen={setOpen} />

      <Box sx={{ border: 2, py: 3, borderRadius: '8px', pl:{lg:9,sm:3} }}>
        <Grid container>
          <Grid item xs={4}>
            <Button
              id="1"
              onClick={() => handleClick(1)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">1</Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              id="2"
              onClick={() => handleClick(2)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "100px", sm:"60px"} , height: "60px" }}
            >
              <Typography variant="h6">2</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={4}>
            <Button
              id="3"
              onClick={() => handleClick(3)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">3</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={4}>
            <Button
              id="4"
              onClick={() => handleClick(4)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">4</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={3}>
            <Button
              id="5"
              onClick={() => handleClick(5)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "100px", sm:"60px"}, height: "60px" }}
            >
              <Typography variant="h6">5</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={4}>
            <Button
              id="6"
              onClick={() => handleClick(6)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">6</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={4}>
            <Button
              id="7"
              onClick={() => handleClick(7)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">7</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={3}>
            <Button
              id="8"
              onClick={() => handleClick(8)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "100px", sm:"60px"}, height: "60px" }}
            >
              <Typography variant="h6">8</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={4}>
            <Button
              id="9"
              onClick={() => handleClick(9)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">9</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={4}>
            <Button
              id="Borrar"
              onClick={() => handleClick("Borrar")}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">Borrar</Typography>
            </Button>
          </Grid>{" "}
          <Grid item xs={3}>
            <Button
              id="0"
              onClick={() => handleClick(0)}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "100px", sm:"60px"}, height: "60px" }}
            >
              <Typography variant="h6">0</Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              disabled={isDisabled}
              id="Continuar"
              onClick={() => handleClick("Continuar")}
              size="large"
              variant="contained"
              color="warning"
              sx={{ mb: 2, width:{lg: "140px", sm:"80px"}, height: "60px" }}
            >
              <Typography variant="h6">Continuar</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
