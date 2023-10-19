import React from "react";
import ladybug from "../../assets/ladybug.png";
import { Box } from "@mui/material";
import "./Sidebar.css";
import { sidebarButtons } from "../../utils/sidebarButtons";
import SidebarButton from "../SidebarButton/SidebarButton";

const Sidebar = () => {
  return (
    <Box sx={{ width: "260px" }}>
      <div className="ladybug-avatar" style={{ marginTop: "20px" }}>
        <img className="ladybug-logo" src={ladybug} alt="ladybug-logo" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          marginLeft: "30px",
        }}
        className="hide"
      >
        {sidebarButtons.map((item, index) => (
          <SidebarButton key={index} item={item} />
        ))}
      </div>
      <button className="ladybug">Ladybug</button>
    </Box>
  );
};

export default Sidebar;
