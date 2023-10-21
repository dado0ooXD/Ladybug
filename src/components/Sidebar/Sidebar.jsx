import React from "react";
import ladybug from "../../assets/ladybug.png";
import { Box, useMediaQuery } from "@mui/material";
import "./Sidebar.css";
import { sidebarButtons } from "../../utils/sidebarButtons";
import SidebarButton from "../SidebarButton/SidebarButton";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // Responsiveness
  const isMdScreen = useMediaQuery("(max-width:900px)");

  // Redux
  const user = useSelector((state) => state.user);

  return (
    <Box
      sx={{
        width: "260px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box>
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
      <Box
        sx={{
          paddingLeft: "30px",
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <img
          src="https://next-busy-bee.vercel.app/assets/profile-pic.png"
          alt="user-img"
          className="user-img"
        />
        {!isMdScreen && (
          <Box sx={{ marginLeft: "7px" }}>
            <p className="user-name">{user?.username}</p>
            <p className="user-tag">@{user?.username?.toLowerCase()}</p>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
