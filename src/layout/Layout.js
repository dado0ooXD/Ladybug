import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { createContext, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Suggested from "../components/Suggested/Suggested";
import LoginModal from "../components/Modals/LoginModal";
import SignupModal from "../components/Modals/SignupModal";

//Context
export const GlobalContext = createContext();

const Layout = ({ children }) => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const isMdScreen = useMediaQuery("(max-width:1200px)");

  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ open, setOpen, openSignup, setOpenSignup }}
    >
      <Box sx={{ height: "100vh", position: "relative" }}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
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
            style={{ height: "100vh", border: "1px solid rgb(243 244 246)" }}
          >
            {children}
          </Grid>
          {!isMdScreen && (
            <Grid item xl={3.5} lg={3.5} md={4} sm={4} xs={0}>
              <Suggested />
            </Grid>
          )}
        </Grid>
        <Box
          sx={{
            height: "80px",
            backgroundColor: "#fa8072",
            width: "100%",
            position: "absolute",
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
                People on Busy Bee are always the first to know.
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
        <LoginModal />
        <SignupModal />
      </Box>
    </GlobalContext.Provider>
  );
};

export default Layout;
