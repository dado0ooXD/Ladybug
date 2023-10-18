import { Grid } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        item
        xl={4}
        lg={4}
        style={{
          background: "lightgray",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        1
      </Grid>
      <Grid item xl={4} lg={4} style={{ height: "100vh" }}>
        {children}
      </Grid>
      <Grid item xl={4} lg={4} style={{ background: "lightgray" }}>
        3
      </Grid>
    </Grid>
  );
};

export default Layout;
