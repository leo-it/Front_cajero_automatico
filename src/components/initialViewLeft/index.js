import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const InitialViewLeft = ({ value, setInputFocus }) => {
  return (
    <Box sx={{ width: "50%" }}>
      <Typography variant="h6" sx={{ mb: 5, ml: 5 }}>
        Ingrese DNI y Clave
      </Typography>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "flex-center",
          flexDirection: "column",
          p: 1,
          m: "auto",
        }}
      >
        {/* TODO centrar texto */}
        <input
          className="input__index"
          placeholder="DNI"
          readOnly
          id="DNI"
          name="DNI"
          value={value.DNI}
          onFocus={({ target }) => setInputFocus(target.name)}
        />{" "}
        <input
          className="input__index"
          id="password"
          placeholder="Clave"
          type="password"
          name="pass"
          readOnly
          value={value.pass}
          onFocus={({ target }) => setInputFocus(target.name)}
        />
        {/*   <TextField 
          sx={{ mx: "auto", mb: "20px" }}
          className="input__grey"
          id="DNI"
          placeholder="DNI"
          name="DNI"
          value={value.DNI}
          onFocus={({ target }) => setInputFocus(target.name)}
        ></TextField>
        <TextField
          type="password"
          sx={{ mx: "auto" }}
          className="input__grey"
          id="password"
          placeholder="Clave"
          name="pass"
          value={value.pass}
          onFocus={({ target }) => setInputFocus(target.name)}
        ></TextField> */}
      </Box>
    </Box>
  );
};
