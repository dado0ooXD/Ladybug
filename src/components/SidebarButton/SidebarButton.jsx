import React, { useContext } from "react";
import "./SidebarButton.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalContext } from "../../App";

const SidebarButton = ({ item }) => {
  const { openComments, setOpenComments, setOpen, open } =
    useContext(GlobalContext);
  const userId = useSelector((state) => state.user.uid);
const navigate = useNavigate()

const toPages = () => {
  if(userId && item.name === "Bookmarks" ){
    navigate("/Bookmarks")
  }  
  else if(userId && item.name === "Home") {
    navigate("/")
  }
  else if(item.name === "Notifications" || item.name === "Messages" || item.name === "Profile" || item.name === "More" || item.name === "Explore"){
    alert("This feature is not developed at this moment.")
  }
  else{
   setOpen(!open)
  }


}

  return (
    <div
      className="ladybug-avatar"
      style={{ display: "flex", alignItems: "center", marginTop: "23px" }}
      onClick={toPages}
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
