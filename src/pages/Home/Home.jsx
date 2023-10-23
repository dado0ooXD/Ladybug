import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Layout from "../../layout/Layout";
import ladybug from "../../assets/ladybug.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Home.css";
import { GlobalContext } from "../../App";
import { useSelector } from "react-redux";
import { useState } from "react";
import { allPosts, createLadybug } from "../../firebase";
import { useEffect } from "react";
import Ladybug from "../../components/Ladybug/Ladybug";

const Home = () => {
  // Context
  const { open, setOpen } = useContext(GlobalContext);

  // ID from redux
  const userId = useSelector((state) => state.user.uid);
  const name = useSelector((state) => state.user.username);

  // Ladybug post
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  // Create ladybug post
  const createLadybugPost = () => {
    if (!userId) {
      setOpen(!open);
    } else {
      createLadybug({
        comments: [],
        likes: "",
        name: name,
        text: text,
      });
    }
    setText("");
  };

  // Getting posts from database
  useEffect(() => {
    allPosts().then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "60px",
            display: "flex",
            alignItems: "center",
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
                fontSize: "21px",
              }}
              placeholder="What's happening?!"
              value={text}
              onChange={(e) => setText(e.target.value)}
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
              <button onClick={createLadybugPost} className="ladybug-btn">
                Ladybug
              </button>
            </Box>
          </Box>
        </Box>
        <Box>
          {posts.map((item) => (
            <Ladybug key={item.id} {...item} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
