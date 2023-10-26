import { Box, Modal, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./CommentsModal.css";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsIcon from "@mui/icons-material/Collections";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CommentsModal = () => {
  // Context
  const { openComments, setOpenComments } = useContext(GlobalContext);

  // Comment
  const [comment, setComment] = useState("");

  // Responsive
  const isXsScreen = useMediaQuery("(max-width:600px)");

  // Redux
  const commentId = useSelector((state) => state.comments.comment.postId);
  const name = useSelector((state) => state.user.username);
  const commentText = useSelector((state) => state.comments.text.commentText);
  const commentName = useSelector((state) => state.comments.userComment.user);

  // Modal Style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: !isXsScreen ? 550 : "100vw",
    height: !isXsScreen ? 320 : "100vh",
    backgroundColor: "#fff",
    borderRadius: "11px",
    boxShadow: 15,
  };

  // Adding comment function
  const addComment = async () => {
    const commentRef = doc(db, "posts", commentId);
    const commentSnap = await getDoc(commentRef);
    const prevItems = await commentSnap.data();

    // Comment
    const postComments = await commentSnap.data().comments;

    // Adding comment to firebase
    await updateDoc(commentRef, {
      ...prevItems,
      comments: [...postComments, { name: name, text: comment }],
    });
    // console.log(commentText);
    setComment("");
    setOpenComments(!openComments);
  };

  return (
    <Modal
      open={openComments}
      onClose={() => {
        setOpenComments(!openComments);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseIcon
          onClick={() => {
            setOpenComments(!openComments);
          }}
          sx={{ fontSize: "32px", padding: "10px", cursor: "pointer" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: !isXsScreen ? "73%" : "40%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "90%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://next-busy-bee.vercel.app/assets/profile-pic.png"
              alt="user-img"
              className="user-img-post"
            />
            <Box sx={{ marginLeft: "20px" }}>
              <Box>
                <Box>
                  <span style={{ fontWeight: "bold" }}>{commentName}</span>{" "}
                  <span style={{ fontSize: "14px" }}>@{commentName}</span>
                </Box>
              </Box>
              <Box sx={{ marginTop: "5px" }}>
                <span style={{ fontSize: "14px" }}>{commentText}</span>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 2,
              width: "90%",
            }}
          >
            <Box sx={{ display: "flex", marginTop: "30px" }}>
              <img
                src="https://next-busy-bee.vercel.app/assets/profile-pic.png"
                alt="user-img"
                className="user-img-post"
              />
              <textarea
                style={{
                  width: "100%",

                  marginLeft: "20px",
                  outline: "none",
                  resize: "none",

                  border: "none",
                  background: "transparent",
                  borderBottom: "1px solid rgb(243 244 246)",
                  marginTop: "10px",
                  fontSize: "19px",
                }}
                placeholder="Send your reply"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <Box sx={{ marginLeft: "60px" }}>
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
              <button className="ladybug-btn" onClick={addComment}>
                Ladybug
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommentsModal;
