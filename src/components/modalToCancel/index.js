import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ModalComponent from "../modal";

export const ModalToCancel = ({ open, setOpen, redirect }) => {
  const router = useRouter();
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button
        className="btn__cancel"
        id="Cancelar"
        onClick={handleOpen}
        size="large"
        variant="contained"
        color="warning"
        sx={{ mb: 2 }}
      >
        Cancelar
      </Button>
      <ModalComponent
        title="¿Desea cancelar la operacion?"
        open={open}
        setOpen={setOpen}
      >
        <Button 
          className="btn__cancel"
          id="Cancelar"
          onClick={() => router.push("/cancellation")}
          size="large"
          variant="contained"
          color="warning"
          sx={{ my: 2, mx:"auto" }}
        >
          Si
        </Button>
      </ModalComponent>
    </div>
  );
};
