import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

const OperationsGridButtons = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        mx: "20%",
        height: 174,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Button
          className="btn__operations"
          id="Extracción"
          onClick={() => router.push("/extraction")}
          size="large"
          variant="contained"
          color="neutral"
          sx={{ width: "30%", height: 50, mb: 2, mx:"auto" }}
        >
          Extracción
        </Button>{" "}
        <Button
          className="btn__operations"
          id="Consulta de saldo"
          onClick={() => router.push("/check_balance")}
          size="large"
          variant="contained"
          color="neutral"
          sx={{ height: 50,mx:"auto" /* width: "30%", height:50, mb: 2  */ }}
        >
          Consulta de saldo
        </Button>{" "}
      </Box>
      <Box sx={{ display: "flex", mt:"10px" }}>

      <Button
        className="btn__operations"
        id="Depósito"
        onClick={() => router.push("/deposit")}
        size="large"
        variant="contained"
        color="neutral"
        sx={{
          height: 50, mx:"auto" /* alignSelf: "flex-end", width: "30%", height:50, mb: 2 */,
        }}
      >
        Depósito
      </Button>{" "}
      </Box>
    </Box>
  );
};

export default OperationsGridButtons;
