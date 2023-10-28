import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Suggested from "../components/Suggested/Suggested";
import LoginModal from "../components/Modals/LoginModal";
import SignupModal from "../components/Modals/SignupModal";
import { useSelector } from "react-redux";
import { GlobalContext } from "../App";
import CommentsModal from "../components/Modals/CommentsModal";

const Layout = ({ children }) => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const isMdScreen = useMediaQuery("(max-width:1199px)");

  // Context
  const { open, setOpen, openSignup, setOpenSignup } =
    useContext(GlobalContext);

  // Redux
  const userId = useSelector((state) => state.user.uid);

  return (
    // <Box sx={{ position: "relative" }}>
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {!isXsScreen && (
        <Grid
          item
          xl={3.5}
          lg={3.5}
          md={3}
          sm={1}
          xs={0}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Sidebar />
        </Grid>
      )}
      <Grid
        item
        xl={5}
        lg={5}
        md={9}
        sm={11}
        xs={12}
        style={{ border: "1px solid rgb(243 244 246)" }}
      >
        {children}
      </Grid>
      {!isMdScreen && (
        <Grid item xl={3.5} lg={3.5} md={4} sm={4} xs={0}>
          <Suggested />
        </Grid>
      )}
      {!userId ? (
        <Box
          sx={{
            height: "80px",
            backgroundColor: "#fa8072",
            width: "100%",
            position: "fixed",
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {!isXsScreen && (
            <Box>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", color: "white" }}
              >
                Don't miss out on the buzz.
              </Typography>
              <Typography
                variant="p"
                style={{ fontSize: "16px", color: "white" }}
              >
                People on Ladybug are always the first to know.
              </Typography>
            </Box>
          )}
          <div className="buttons">
            <button
              className="login-btn"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Log in
            </button>
            <button
              className="signup-btn"
              onClick={() => {
                setOpenSignup(!openSignup);
              }}
            >
              Sign up
            </button>
          </div>
        </Box>
      ) : null}
      <LoginModal />
      <SignupModal />
      <CommentsModal />
    </Grid>

    // </Box>
  );
};

export default Layout;
