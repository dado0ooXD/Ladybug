import { Box, Typography } from "@mui/material";
import React from "react";
import "./Suggested.css";
import SearchIcon from "@mui/icons-material/Search";
import { happenings } from "../../utils/suggested";
import Happenings from "../Happenings/Happenings";

const Suggested = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "61px",
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "25px",
            border: "none",
            backgroundColor: " rgb(243 244 246)",
            padding: "10px",
            marginLeft: "40px",
          }}
        >
          <SearchIcon style={{ color: "gray" }} />
          <input
            type="text"
            placeholder="Search Ladybug"
            className="suggested-input"
          ></input>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(243 244 246)",
          width: "275px",
          padding: "10px 10px 30px 10px",
          marginLeft: "40px",
          marginTop: "10px",
          borderRadius: "11px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          What's Happening?
        </Typography>
        {happenings.map((item, index) => (
          <Happenings key={index} {...item} />
        ))}
      </Box>
      <Box sx={{ backgroundColor: "purple" }}></Box>
    </Box>
  );
};

export default Suggested;
