import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import OperationsGridButtons from "../src/components/operationsGridButtons";
import OperationsText from "../src/components/operationsText/index";
import { ModalToCancel } from "../src/components/modalToCancel";
import { SetTimeOut } from "../src/components/setTimeOut";

const operations = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      router.push("/");
    }, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, [open]);
  
  useEffect(() => {
    setName(window.localStorage.getItem("name"));
  }, []);

  return (
    <Box sx={{ border: 2,  p: 5, m: 5 }}>
      <OperationsText name={name} />
      <OperationsGridButtons />
      <ModalToCancel setOpen={setOpen} open={open} />
    </Box>
  );
  {
  }
};

export default operations;
