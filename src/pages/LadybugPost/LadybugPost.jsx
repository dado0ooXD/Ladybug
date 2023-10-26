import React, { useEffect, useState } from "react";
import "./LadybugPost.css";
import Layout from "../../layout/Layout";
import { Box, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const LadybugPost = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  // Getting comments

  useEffect(() => {
    const getComments = async () => {
      const docRef = doc(db, "posts", id);
      const specDoc = await getDoc(docRef);
      setComments(specDoc.data());
      console.log(comments.comments);
    };
    getComments();
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
            borderBottom: "1px solid rgb(243 244 246)",
          }}
        >
          <WestIcon
            sx={{ fontSize: "25px", padding: "0 10px", cursor: "pointer" }}
          />
          <Typography
            variant="h6"
            sx={{
              marginLeft: "15px",
            }}
          >
            Ladybug
          </Typography>
        </Box>
        <Box
          sx={{
            height: "120px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            borderBottom: "1px solid rgb(243 244 246)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
            >
              <img
                src="https://next-busy-bee.vercel.app/assets/profile-pic.png"
                alt="user-img"
                className="user-img-post"
              />
              <Box sx={{ marginLeft: "10px" }}>
                <span style={{ fontWeight: "bold" }}>{comments.name}</span>{" "}
                <br />
                <span style={{ fontSize: "14px" }}>@{comments.name}</span>
              </Box>
            </Box>
            <MoreHorizIcon sx={{ marginRight: "10px" }} />
          </Box>
          <Typography variant="p" sx={{ marginLeft: "65px" }}>
            {comments.text}
          </Typography>
        </Box>

        <Box
          sx={{
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="p">
            <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
              {comments.likes.length}
            </span>{" "}
            Likes
          </Typography>
        </Box>

        <Box sx={{ height: "40px", backgroundColor: "gray" }}></Box>

        {comments?.comments?.map((item, index) => (
          <CommentCard key={index} {...item} />
        ))}
      </Box>
    </Layout>
  );
};

export default LadybugPost;
