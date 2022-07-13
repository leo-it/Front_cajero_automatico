import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NumericKeyboard } from "../src/components/numericKeyboard";
import { useRouter } from "next/router";
import { FieldsDeposit } from "../src/components/FieldsDeposit";
import { ModalToCancel } from "../src/components/modalToCancel";
import { editCredit } from "../src/services/product";

//TODO usar localstorash
const deposit = () => {
  const router = useRouter();

  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [continueButton, setcontinueButton] = useState(false);
  const [credit, setCredit] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputFocus, setInputFocus] = useState("");
  const [value, setValue] = useState({
    valueOne: "",
    valueTwo: "",
    valueTrhee: "",
    valueFour: "",
  });

  //
  //useEffects
  //
  useEffect(() => {
    setAmount(
      value.valueOne * 100 +
        value.valueTwo * 200 +
        value.valueTrhee * 500 +
        value.valueFour * 1000
    );

    const intervalId = setInterval(() => {
      router.push("/");
      localStorage.clear();
    }, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, [value]);

  useEffect(() => {
    if (continueButton) {
      let newCredit = parseInt(credit) + parseInt(amount);
      editCredit(id, token, newCredit)
        .then((response) => {
          localStorage.setItem("amount", JSON.stringify(parseInt(newCredit)));
          localStorage.setItem("operation", JSON.stringify("depósito"));
          localStorage.setItem(
            "operationAmount",
            JSON.stringify(parseInt(amount))
          );
          router.push("/operation_success");
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [continueButton]);

  useEffect(() => {
    amount > 0 && setIsDisabled(false);
    amount === 0 || (amount === "" && setIsDisabled(true));
    amount == 0 || amount === "" ? setIsDisabled(true) : setIsDisabled(false);
  }, [amount]);

  useEffect(() => {
    setCredit(window.localStorage.getItem("amount"));
    setId(window.localStorage.getItem("id"));
    setToken(window.localStorage.getItem("token"));
  }, []);
  //
  //Functions
  //
  const handleClick = (item) => {
    if (inputFocus) {
      setValue({
        ...value,
        [inputFocus]:
          value[inputFocus].length < 4 &&
          item !== "Borrar" &&
          item !== "Continuar"
            ? value[inputFocus] + item?.toString(10)
            : value[inputFocus],
      });
    }
    item === "Borrar" &&
      setValue({
        ...value,
        [inputFocus]: value[inputFocus].substring(
          0,
          value[inputFocus].length - 1
        ),
      });

    /* item === "Borrar" && */ item === "Continuar" && setcontinueButton(true);
  };

  return (
    <Box className="container__mui">
      <Typography align="center" variant="h4" gutterBottom>
        Depósito
      </Typography>
      <Box sx={{ display: "flex" }}>
        <FieldsDeposit value={value} setInputFocus={setInputFocus} />
        <Box sx={{ p: 1, width: "45%", ml:10 }}>
          <Typography align="center" variant="h6" gutterBottom>
            Monto a depositar
          </Typography>
          <Typography align="center" variant="h4" gutterBottom component="div">
            $ {amount ? parseFloat(amount).toLocaleString("en") : 0}{" "}
          </Typography>
          <NumericKeyboard handleClick={handleClick} isDisabled={isDisabled} />
        </Box>
      </Box>
      <Box sx={{ ml: 16 }}>
        <ModalToCancel open={openCancelModal} setOpen={setOpenCancelModal} />
      </Box>
    </Box>
  );
};

export default deposit;
