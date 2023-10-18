import { Box } from "@mui/material";
import React from "react";
import Layout from "../../layout/Layout";
import ladybug from "../../assets/ladybug.png";

const Home = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box sx={{ backgroundColor: "pink", height: "60px" }}>
          <Box>Home</Box>
          <Box></Box>
        </Box>
        <Box sx={{ backgroundColor: "gray", height: "150px" }}>
          <img
            src={ladybug}
            alt="ladybug-logo"
            style={{ height: "40px", width: "45px" }}
          />
          <Box>
            <textarea></textarea>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
