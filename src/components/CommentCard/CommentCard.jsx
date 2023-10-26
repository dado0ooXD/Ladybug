import React from "react";
import "./CommentCard.css";
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import IosShareIcon from "@mui/icons-material/IosShare";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

const CommentCard = ({ name, text }) => {
  return (
    <Box
      sx={{
        height: "110px",
        borderBottom: "1px solid rgb(243 244 246)",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <Box
        // onClick={() => {
        //   navigate(`/${id}`);
        // }}
        sx={{ flex: 3, display: "flex", cursor: "pointer" }}
      >
        <Box>
          {" "}
          <img
            src="https://next-busy-bee.vercel.app/assets/profile-pic.png"
            alt="user-img"
            className="user-img-post"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
            marginTop: "3px",
          }}
        >
          <Box>
            <Typography
              variant="p"
              sx={{ color: "black", fontWeight: "bold", fontSize: "15px" }}
            >
              {name}
            </Typography>
            <Typography
              variant="p"
              sx={{ marginLeft: "5px", fontSize: "14px", color: "gray" }}
            >
              @{name}
            </Typography>
            <Typography variant="p" sx={{ fontSize: "12px" }}></Typography>
          </Box>
          <Typography variant="p" sx={{ marginTop: "10px", fontSize: "14px" }}>
            {text}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <SmsOutlinedIcon
          sx={{ marginLeft: "30px", fontSize: "20px", cursor: "pointer" }}
        />

        <FavoriteBorderIcon
          sx={{ marginLeft: "55px", fontSize: "20px", cursor: "pointer" }}
        />
        <SignalCellularAltIcon sx={{ marginLeft: "55px", fontSize: "20px" }} />
        <IosShareIcon sx={{ marginLeft: "55px", fontSize: "20px" }} />
      </Box>
    </Box>
  );
};

export default CommentCard;
