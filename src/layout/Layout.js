import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  return (
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
        md={5}
        sm={7}
        xs={12}
        style={{ height: "100vh", border: "1px solid rgb(243 244 246)" }}
      >
        {children}
      </Grid>
      {!isXsScreen && (
        <Grid
          item
          xl={3.5}
          lg={3.5}
          md={4}
          sm={4}
          xs={0}
          style={{ background: "lightgray" }}
        >
          3
        </Grid>
      )}
    </Grid>
  );
};

export default Layout;
