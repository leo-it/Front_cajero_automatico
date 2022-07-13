import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import ModalComponent from "../modal";
import { useRouter } from "next/router";

const ModalAmount = ({ setOpen, open }) => {
  const router = useRouter();
  const handleAnotherAmount = () => {
    router.asPath === "/another_amount"
      ? setOpen(false)
      : router.push("/another_amount");
  };
  return (
    <ModalComponent 
      title="Su saldo es insuficiente. Puede consultar su saldo, probar con otro monto o cancelar la operación."
      open={open}
      setOpen={setOpen}
    >
      <Box sx={{ width: 600 , mt:6, mx:"auto"}}>
        <Button
          className="btn__modal"
          id="Cancelar"
          onClick={() => router.push("/cancellation")}
          variant="contained"
          color="warning"
          sx={{ m: 1 }}
        >
          Cancelar
        </Button>
        <Button
          className="btn__modal"
          id="check_balance"
          onClick={() => router.push("/check_balance")}
          variant="contained"
          color="warning"
          sx={{ m: 1 }}
        >
          Consultar saldo
        </Button>{" "}
        <Button
          className="btn__modal"
          id="another_amount"
          onClick={() => handleAnotherAmount()}
          variant="contained"
          color="warning"
          sx={{ m: 1 }}
        >
          Otro monto
        </Button>
      </Box>
    </ModalComponent>
  );
};

export default ModalAmount;
