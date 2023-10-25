import React from "react";
import { Box, Typography } from "@mui/material";
import "./Ladybug.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import IosShareIcon from "@mui/icons-material/IosShare";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { addComment, addText, addUserComment } from "../../store/commentSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Ladybug = ({ text, name, id }) => {
  /// Context
  const { openComments, setOpenComments, setOpen, open } =
    useContext(GlobalContext);

  // Redux
  const userId = useSelector((state) => state.user.uid);
  const dispatch = useDispatch();
  const commentId = useSelector((state) => state.comments.comment.postId);

  // Text

  const getTextAndUser = async () => {
    const commentRef = doc(db, "posts", id);
    const commentSnap = await getDoc(commentRef);
    const commentText = await commentSnap.data().text;
    const userComment = await commentSnap.data().name;
    dispatch(addText({ commentText }));
    dispatch(addUserComment({ userComment }));
  };

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
      <Box sx={{ flex: 3, display: "flex" }}>
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
          onClick={() => {
            if (userId) {
              getTextAndUser();
              dispatch(addComment({ id }));
              setOpenComments(!openComments);
              console.log(commentId);
            } else {
              setOpen(!open);
            }
          }}
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

export default Ladybug;
