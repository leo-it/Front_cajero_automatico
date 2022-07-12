import { Button, ButtonGroup } from "@mui/material";
import React from "react";

export const ExtractionButons = ({handleContinue}) => {
  return (
    <ButtonGroup >
      <Button
        className="btn__operations"
        id="Cancelar"
        onClick={() => router.push("/")}
        size="large"
        variant="contained"
        color="warning"
        sx={{ width: "30%", height: 50, mb: 2 }}
      >
        Cancelar
      </Button>
      <Button
        className="btn__operations"
        id="continuar"
        onClick={() => handleContinue()}
        size="large"
        variant="contained"
        color="warning"
        sx={{ width: "30%", height: 50, mb: 2 }}
      >
        Continuar
      </Button>
    </ButtonGroup>
  );
};
