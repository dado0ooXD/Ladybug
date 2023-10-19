import { Box, Typography } from "@mui/material";
import React from "react";
import Layout from "../../layout/Layout";
import ladybug from "../../assets/ladybug.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box
          sx={{
            height: "60px",
            display: "flex",
            alignItems: "center",
            // borderBottom: "1px solid rgb(243 244 246)",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              style={{ marginLeft: "10px" }}
            >
              Home
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "140px",
            display: "flex",
            borderTop: "1px solid rgb(243 244 246)",
            borderBottom: "1px solid rgb(243 244 246)",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              marginTop: "7px",
              padding: "4px",
            }}
          >
            <img
              src={ladybug}
              alt="ladybug-logo"
              style={{ height: "35px", width: "40px" }}
            />
          </Box>
          <Box
            sx={{
              flex: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: "5px",
            }}
          >
            <textarea
              style={{
                outline: "none",
                resize: "none",
                height: "60px",
                border: "none",
                background: "transparent",
                borderBottom: "1px solid rgb(243 244 246)",
                marginTop: "10px",
              }}
              placeholder="What's happening?!"
            ></textarea>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box>
                <CollectionsIcon style={{ color: " #FA8072", fontSize: 23 }} />
                <SignalCellularAltIcon
                  style={{ color: " #FA8072", marginLeft: "5px", fontSize: 23 }}
                />
                <SentimentSatisfiedAltIcon
                  style={{ color: " #FA8072", marginLeft: "5px", fontSize: 23 }}
                />
                <EventNoteIcon
                  style={{ color: " #FA8072", marginLeft: "5px", fontSize: 23 }}
                />
                <LocationOnIcon
                  style={{ color: " #FA8072", marginLeft: "5px", fontSize: 23 }}
                />
              </Box>
              <button className="ladybug-btn">Ladybug</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
