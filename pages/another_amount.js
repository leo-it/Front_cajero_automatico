import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { NumericKeyboard } from "../src/components/numericKeyboard";
import ModalAmount from "../src/components/modalsAmount";
import { ModalToCancel } from "../src/components/modalToCancel";
import { editCredit } from "../src/services/product";

const anothe_amount = () => {
  const [amount, setAmount] = useState("");
  const router = useRouter();
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [continueButton, setcontinueButton] = useState(false);
  const [credit, setCredit] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(false);
  const [openCancelModal, setOpenCancelModal] = useState(false);
  //
  //Functions
  //
  const handleClick = (item) => {
    item !== "Continuar" && setAmount(amount + item?.toString(10));

    item === "Borrar" && setAmount("");
    item === "Continuar" && setcontinueButton(true);
  };

  //
  //useEffects
  //
  useEffect(() => {
    /*  const intervalId = setInterval(() => {
      router.push("/");
      localStorage.clear();
    }, 30000);
    return () => {
      clearInterval(intervalId);
    }; */
  }, [amount, openCancelModal, open]);

  useEffect(() => {
    setCredit(window.localStorage.getItem("amount"));
    setId(window.localStorage.getItem("id"));
    setToken(window.localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (continueButton && parseInt(credit) >= parseInt(amount)) {
      let newCredit = parseInt(credit) - parseInt(amount);
      editCredit(id, token, newCredit)
        .then((response) => {
          localStorage.setItem("amount", JSON.stringify(parseInt(newCredit)));
          localStorage.setItem("operation", JSON.stringify("extracción"));
          localStorage.setItem(
            "operationAmount",
            JSON.stringify(parseInt(amount))
          );
          router.push("/operation_success");
        })
        .catch(function (error) {
          console.error(error);
        });
    } else if (continueButton) {
      setOpen(true);
      setcontinueButton(false);
    }
  }, [continueButton]);

  useEffect(() => {
    amount == 0 || amount === "" ? setIsDisabled(true) : setIsDisabled(false);
  }, [amount]);

  return (
    <>
      <ModalAmount open={open} setOpen={setOpen} />
      <Box sx={{ mt: 5, mx: 10, border: 2, p: 5, borderRadius: "8px" }}>
        <Typography align="center" variant="h4" sx={{ my: 5 }}>
          Otro monto{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "45%", p: 1, ml: 10, mr: 10 }}>
            <Typography align="center" variant="h3" gutterBottom>
              $ {amount ? parseFloat(amount).toLocaleString("en") : 0}{" "}
            </Typography>
            <Box sx={{ mt: 20 }}>
              <ModalToCancel
                setOpen={setOpenCancelModal}
                open={openCancelModal}
              />
            </Box>
          </Box>
          <Box sx={{ width: "45%" }}>
            <NumericKeyboard
              handleClick={handleClick}
              isDisabled={isDisabled}
            />
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
};
export default anothe_amount;
