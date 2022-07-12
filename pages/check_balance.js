import React, { useEffect, useState } from "react";
import { Box, Button , Typography} from "@mui/material";
import { useRouter } from "next/router";
const check_balance = () => {
  const router = useRouter();
  const [credit, setCredit] = useState("");
  //TODO agregar modal para cancelar

  //
  //useEffects
  //
  useEffect(() => {
    setCredit(window.localStorage.getItem("amount"));
        const intervalId = setInterval(() => {
      router.push("/");
    }, 15000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Box className="container__mui">
      
        <Typography align="center" variant="h4" gutterBottom marginTop={10}>
          Su saldo es
        </Typography>
        <Typography align="center" variant="h3" gutterBottom marginTop={7}>
        $ {credit ? parseFloat(credit).toLocaleString("en") : 0}{" "}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom marginTop={7}>
          ¿Desea realizar otra operación?
        </Typography>
        <Box textAlign="center" marginTop={4}>
          <Button
            id="Si"
            onClick={() => router.push("/operations")}
            variant="contained"
            color="warning"
            sx={{ height: 50, width:"90px" , mb: 2, mr: 10 }}
          >
            <Typography  variant="h6"  >
          Si
        </Typography>
          </Button>{" "}
          <Button
            className=""
            id="No"
            onClick={() => router.push("/cancellation")}
            variant="contained"
            color="warning"
            sx={{ height: 50, width:"90px" , mb: 2 }}
          >
             <Typography  variant="h6"  >
          No
        </Typography>
          </Button>{" "}
        </Box>
      </Box>
    </>
  );
};

export default check_balance;
