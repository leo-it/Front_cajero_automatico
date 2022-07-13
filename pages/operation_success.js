import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const operation_success = () => {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [id, setId] = useState("");
  const [operation, setOperation] = useState("");
  useEffect(() => {
    setAmount(window.localStorage.getItem("operationAmount"));
    setOperation(window.localStorage.getItem("operation"));
    setId(window.localStorage.getItem("id"));
    const intervalId = setInterval(() => {
      router.push("/");
      localStorage.clear();
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [amount]);
  return (
    <Box
      sx={{
        border: 2,
        p: 5,
        m: 5,
        height: "650px",
        width: "85%",
        mx: "auto",
        display: "flex",
        borderRadius: "8px",
      }}
    >
      <Typography
        className="item--center"
        sx={{ m: 10, px: 16, my: "auto" }}
        align="center"
        variant="h3"
        gutterBottom
      >
        Su {operation} de monto "
        {amount ? parseFloat(amount).toLocaleString("en") : 0} ", en la cuenta
        N° {id}, fue realizado con éxito.{" "}
      </Typography>
    </Box>
  );
};
export default operation_success;
