import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, removeAll } from "../../slice/CartSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "7px",
};

export default function index({ open, handleClose, id }) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="pb-2"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Remove from cart
          </Typography>

          <div className="flex justify-end gap-2">
            <Button variant="outlined" onClick={handleRemoveItem}>
              yes
            </Button>
            <Button variant="outlined" onClick={() => handleClose()}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
