import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalAmount from "../../components/modalsAmount";
import { ModalToCancel } from "../modalToCancel";
import { editCredit } from "../../services/product";

const InputsOptions = ({ credit, id, token }) => {
  const router = useRouter();
  //
  //useStates
  //
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState("");
  //
  //functions
  //
  const handleContinue = () => {
    if (value === "anotherAmount") {
      router.push("/another_amount");
    } else {
      if (parseInt(credit) >= parseInt(value)) {
        let newCredit = parseInt(credit) - parseInt(value);
        editCredit(id, token, newCredit)
          .then((response) => {
            localStorage.setItem("amount", JSON.stringify(parseInt(newCredit)));
            localStorage.setItem("operation", JSON.stringify("extraccion"));
            localStorage.setItem(
              "operationAmount",
              JSON.stringify(parseInt(value))
            );
            router.push("/operation_success");
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        setOpen(true);
      }
    }
  };
  //
  //useEffect
  //
  useEffect(() => {
    const intervalId = setInterval(() => {
      router.push("/");
      localStorage.clear();
    }, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, [value, open, openCancelModal]);

  const handleChange = (e) => {
    setIsDisabled(false);
    setValue(e.target.value);
  };
  return (
    <>
      <ModalAmount open={open} setOpen={setOpen} />

      <Box className="item--center" sx={{ mb: 10 }}>
        <FormControl>
          <RadioGroup
            row
            sx={{ display: "flex" }}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <Box className="radio__button__group">
              <FormControlLabel
                value="500"
                onChange={handleChange}
                control={<Radio />}
                label="$500"
              />
              <FormControlLabel
                value="2000"
                onChange={handleChange}
                control={<Radio />}
                label="$2.000"
              />
              <FormControlLabel
                value="3000"
                onChange={handleChange}
                control={<Radio />}
                label="$3.000"
              />
            </Box>
            <Box className="radio__button__group">
              <FormControlLabel
                value="5000"
                onChange={handleChange}
                control={<Radio />}
                label="$5.000"
              />
              <FormControlLabel
                value="6000"
                control={<Radio />}
                label="$6.000"
                onChange={handleChange}
              />
              <FormControlLabel
                value="anotherAmount"
                onChange={handleChange}
                control={<Radio />}
                label="Otro monto"
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <ButtonGroup sx={{ mx: 20 }} className="item__space--around">
          {/* TODO agregar el modal para cancelar */}
          <ModalToCancel open={openCancelModal} setOpen={setOpenCancelModal} />
          <Button
            onClick={() => handleContinue(value)}
            disabled={isDisabled}
            type="submit"
            id="continuar"
            size="large"
            variant="contained"
            color="warning"
            sx={{ width: "200px", mb: 2 }}
          >
            Continuar
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default InputsOptions;
