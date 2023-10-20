import {
  Box,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./LoginModal.css";
import { GlobalContext } from "../../layout/Layout";
import { Formik } from "formik";
import * as Yup from "yup";

// Login Schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .min(10, "Email must have at least 10 characters")
    .max(30, "Email must have max 30 characters"),
  password: Yup.string()
    .required("Email is required")
    .min(8, "Password must have at least 8 characters")
    .max(30, "Email must have max 30 characters"),
});

const LoginModal = () => {
  // Open Modal
  const { open, setOpen } = useContext(GlobalContext);
  const isXsScreen = useMediaQuery("(max-width:600px)");

  // Log in data
  const initialState = { email: "", password: "" };

  // Styles
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
    <Formik
      enableReinitialize
      initialValues={initialState}
      onSubmit={(values, { resetForm }) => {}}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
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
                  sx={{
                    marginTop: "20px",
                    marginLeft: "58px",
                    fontWeight: "bold",
                  }}
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
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "80%",
                    }}
                  >
                    <TextField
                      placeholder="Email"
                      error={errors.email}
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                    />
                    <Typography
                      variant="body2"
                      style={{ marginTop: "7px", color: "red" }}
                    >
                      {errors.email && touched.email && errors.email}
                    </Typography>
                    <TextField
                      sx={{ marginTop: "15px" }}
                      placeholder="Password"
                      error={errors.password}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="password"
                    />
                    <Typography
                      variant="body2"
                      style={{ marginTop: "7px", color: "red" }}
                    >
                      {errors.password && touched.password && errors.password}
                    </Typography>
                  </Box>
                  <button className="modal-login">Log in</button>
                </Box>
              </Box>
            </form>
          </Box>
        </Modal>
      )}
    </Formik>
  );
};

export default LoginModal;
