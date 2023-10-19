import React from "react";
import "./SidebarButton.css";
import { Box, Typography } from "@mui/material";

const SidebarButton = ({ item }) => {
  return (
    <div
      className="ladybug-avatar"
      style={{ display: "flex", alignItems: "center", marginTop: "23px" }}
    >
      <Box>{item.icon}</Box>
      <Typography
        className="typo"
        variant="h6"
        sx={{ marginLeft: "12px", fontSize: "21px" }}
      >
        {item.name}
      </Typography>
    </div>
  );
};

export default SidebarButton;
