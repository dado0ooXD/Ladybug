import {
  Box,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./AuthModal.css";
import { GlobalContext } from "../../layout/Layout";
import { Formik } from "formik";
import * as Yup from "yup";

// Login Schema
const signUpSchema = Yup.object().shape({});

const AuthModal = () => {
  const { open, setOpen } = useContext(GlobalContext);
  const isXsScreen = useMediaQuery("(max-width:600px)");

  // Styles
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: !isXsScreen ? 550 : "100vw",
    height: !isXsScreen ? 400 : "100vh",
    backgroundColor: "#fff",
    borderRadius: "11px",
    boxShadow: 15,
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(!open);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {" "}
        <CloseIcon
          onClick={() => setOpen(!open)}
          sx={{ fontSize: "32px", padding: "10px", cursor: "pointer" }}
        />
        <form>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginTop: "20px", marginLeft: "58px", fontWeight: "bold" }}
            >
              Log in to Ladybug
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "80%" }}
              >
                <TextField placeholder="Email" />
                <TextField sx={{ marginTop: "15px" }} placeholder="Password" />
              </Box>
              <button className="modal-login">Log in</button>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AuthModal;
