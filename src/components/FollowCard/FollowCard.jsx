import React from "react";
import "./FollowCard.css";
import { Box } from "@mui/material";

const FollowCard = ({ image, name, tag, followBtn }) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img src={image} alt="profile" className="profile-picture" />
        <Box sx={{ marginLeft: "10px", marginTop: "7px" }}>
          <p className="name">{name}</p>
          <p className="tag">{tag}</p>
        </Box>
      </Box>
      <Box>{followBtn}</Box>
    </Box>
  );
};

export default FollowCard;
