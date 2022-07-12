import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import InputsOptions from "../src/components/inputsOptions";

const extraction = () => {
  const [credit, setCredit] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    setCredit(window.localStorage.getItem("amount"));
    setId(window.localStorage.getItem("id"));
    setToken(window.localStorage.getItem("token"));
  }, []);

  return (
    <Box className="container__mui">
      <div>
          <Typography
        sx={{ mb: 6 }}
        align="center"
        variant="h4"
        gutterBottom
        component="div"
      >
        Extracción
      </Typography>
      <InputsOptions credit={credit} id={id} token={token} />
      </div>
    
    </Box>
  );
};

export default extraction;
