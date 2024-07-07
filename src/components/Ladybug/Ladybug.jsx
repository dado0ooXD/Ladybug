import { Box, Typography } from "@mui/material";
import "./Ladybug.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IosShareIcon from "@mui/icons-material/IosShare";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { addComment, addText, addUserComment } from "../../store/commentSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { addToBookmarks, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Ladybug = ({ text, name, id, comments, likes }) => {
  // Navigate
  const navigate = useNavigate();

  /// Context
  const { openComments, setOpenComments, setOpen, open } =
    useContext(GlobalContext);

  // Redux
  const userId = useSelector((state) => state.user.uid);
  const commentId = useSelector((state) => state.comments.comment.postId);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  // Text
  const getTextAndUser = async () => {
    const commentRef = doc(db, "posts", id);
    const commentSnap = await getDoc(commentRef);
    const commentText = await commentSnap.data().text;
    const userComment = await commentSnap.data().name;

    // Adding text and comment to redux
    dispatch(addText({ commentText }));
    dispatch(addUserComment({ userComment }));
  };

  // Like post
  const likeLadybug = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const likes = docSnap.data().likes;
    console.log(likes);

    // Is post liked

    await updateDoc(docRef, {
      likes: [...likes, username],
    });
    console.log("else ===>", likes);
  };

  const unlikeLadybug = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const likes = docSnap.data().likes;
    if (likes.includes(username)) {
      await updateDoc(docRef, {
        likes: likes.filter((item) => item !== username),
      });
    }
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
      <Box
        onClick={() => {
          navigate(`/${id}`);
        }}
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
        {comments.length > 0 && (
          <span
            style={{
              fontSize: "12px",
              marginBottom: "3px",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {comments.length}
          </span>
        )}
        { likes.includes(username) ? (
          <FavoriteIcon
            style={{
              color: "#fa8072",
              marginLeft: "55px",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              unlikeLadybug();
            }}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{
              marginLeft: "55px",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              if (userId) {
                likeLadybug();
              } else {
                setOpen(!open);
              }
            }}
          />
        )}
        {likes.length > 0 && (
          <span
            style={{
              fontSize: "12px",
              marginBottom: "3px",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {likes.length}
          </span>
        )}
        <BookmarkBorderIcon sx={{ marginLeft: "55px", fontSize: "20px" }} onClick={() => {
          addToBookmarks({name, text, id, comments, likes})
        }} />
        <IosShareIcon sx={{ marginLeft: "55px", fontSize: "20px" }} />
      </Box>
    </Box>
  );
};

export default Ladybug;
