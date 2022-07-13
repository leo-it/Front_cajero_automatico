import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const ModalComponent = ({children, title, subtitle, setOpen, open}) => {

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
  };
  return (
    <div>
      {" "}
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        >
        <Box sx={style}>
          <Typography sx={{fontWeight: 'bold' , textAlign: 'center', px:5, mt:4}} id="keep-mounted-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Box className="item--center" sx={{
          display: "flex",
          alignItems: "flex-center",
          flexDirection: "column",
          p: 1,
        }}>
            {children}

        </Box>

        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
