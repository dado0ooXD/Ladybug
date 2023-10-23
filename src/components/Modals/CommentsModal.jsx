import { Box, Modal, useMediaQuery } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./CommentsModal.css";

const CommentsModal = () => {
  // Context
  const { openComments, setOpenComments } = useContext(GlobalContext);

  // Responsive
  const isXsScreen = useMediaQuery("(max-width:600px)");

  // Modal Style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: !isXsScreen ? 550 : "100vw",
    height: !isXsScreen ? 450 : "100vh",
    backgroundColor: "#fff",
    borderRadius: "11px",
    boxShadow: 15,
  };
  return (
    <Modal
      open={openComments}
      onClose={() => {
        setOpenComments(!openComments);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}></Box>
    </Modal>
  );
};

export default CommentsModal;
