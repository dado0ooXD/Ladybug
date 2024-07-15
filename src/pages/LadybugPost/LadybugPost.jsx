import React, { useEffect, useState } from "react";
import "./LadybugPost.css";
import Layout from "../../layout/Layout";
import { Box, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import IosShareIcon from "@mui/icons-material/IosShare";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { convertTimestamp } from "../../utils/date";

const LadybugPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
            onClick={() => {
              navigate("/");
            }}
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
                style={{ padding: "3px" }}
              />
              <Box
                sx={{
                  marginLeft: "10px",
                  display: "flex",
                }}
              >
                <Box>
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {comments?.name}
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: "13px", color: "gray" }}>
                    @{comments?.name}
                  </span>
                </Box>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "14px",
                    marginLeft: "30px",
                    marginTop: "3px",
                    color: "gray",
                  }}
                >
                  {convertTimestamp(comments?.createdAt?.seconds)}
                </Typography>
              </Box>
            </Box>
            <MoreHorizIcon sx={{ marginRight: "10px" }} />
          </Box>
          <Typography
            variant="p"
            sx={{ marginLeft: "65px", paddingBottom: "10px", fontSize: "14px" }}
          >
            {comments?.text}
          </Typography>
        </Box>

        <Box
          sx={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid rgb(243 244 246)",
          }}
        >
          <Typography variant="p">
            <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
              {comments?.likes?.length}
            </span>{" "}
            Likes
          </Typography>
        </Box>

        <Box
          sx={{
            height: "40px",
            padding: "5px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderBottom: "1px solid rgb(243 244 246)",
          }}
        >
          <SmsOutlinedIcon sx={{ color: "gray" }} />
          <FavoriteBorderIcon sx={{ color: "gray" }} />
          <SignalCellularAltIcon sx={{ color: "gray" }} />
          <IosShareIcon sx={{ color: "gray" }} />
        </Box>

        {comments?.comments?.map((item, index) => (
          <CommentCard key={index} {...item} />
        ))}
      </Box>
    </Layout>
  );
};

export default LadybugPost;
