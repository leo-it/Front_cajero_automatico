import { Box, Typography } from "@mui/material";
import React from "react";

const OperationsText = ({name}) => {
  let nameFormat = name?.replace (/"/g, "", '');
  return (
    <Box sx={{ mb: 5 }}>
      <Typography align="center" variant="h4" gutterBottom component="div">
        Bienvenido {nameFormat}
      </Typography>
      <Typography align="center" variant="h5" gutterBottom component="div">
        ¿Qué operación deseas realizar?{" "}
      </Typography>
    </Box>
  );
};

export default OperationsText;
