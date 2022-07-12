import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const cancellation = () => {
  const router = useRouter();

  useEffect(() => {
        const intervalId = setInterval(() => {
      router.push("/");
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Box textAlign="center" sx={{ border: 2, width: "95%", height: "650px", p: 20, m: 4 }}>
      <Typography  variant="h3" sx={{mt:20}}>
        La operación ha sido cancelada.
      </Typography>
    </Box>
  );
};

export default cancellation;
