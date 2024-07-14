import React, { useEffect, useState } from "react";
import "./Bookmarks.css";
import Layout from "../../layout/Layout";
import { db, getBookmarks } from "../../firebase";
import { useSelector } from "react-redux";
import Ladybug from "../../components/Ladybug/Ladybug";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import { collection, onSnapshot, query } from "firebase/firestore";

const Bookmarks = () => {
  const [bookmarkPosts, setBookmarkPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const bookmarkCollection = collection(db, "bookmarks");

  // Redux

  const username = useSelector((state) => state.user.username);

  // Getting bookmarks on page
  // useEffect(() => {
  //   getBookmarks().then((bookmarks) => {
  //     setBookmarkPosts(bookmarks);
  //   });
  // }, []);

  useEffect(() => {
    const renderBookmarks = async () => {
      const collection = query(bookmarkCollection);
      const bookmarks = await onSnapshot(collection, (snapshot) => {
        setBookmarkPosts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        // console.log(posts, "Hi")
      });

      return bookmarks;
    };
    renderBookmarks();
  }, []);

  // Users bookmark posts
  const usersBookmarks = bookmarkPosts.filter((item) => item.user === username);

  return (
    <Layout>
      <Box
        sx={{
          borderBottom: "1px solid rgb(243 244 246)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >
          Bookmarks
        </Typography>
        <Typography
          variant="p"
          sx={{ marginLeft: "10px", fontSize: "14px", color: "gray" }}
        >
          @{bookmarkPosts[0]?.user}
        </Typography>

        <Box
          sx={{
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
            borderRadius: "25px",
            border: "1px solid rgb(243 244 246)",
            // backgroundColor: " rgb(243 244 246)",
            margin: "10px",
          }}
        >
          <SearchIcon style={{ color: "gray" }} />
          <input
            value={searchValue}
            type="text"
            placeholder="Search bookmarks"
            className="bookmarks-input"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </Box>
      </Box>
      <div>
        {usersBookmarks
          ?.filter((item) =>
            item.text.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Ladybug key={item.id} {...item} />
          ))}
      </div>
    </Layout>
  );
};

export default Bookmarks;
