import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const sidebarButtons = [
  {
    icon: <HomeOutlinedIcon sx={{ fontSize: "30px" }} />,
    name: "Home",
  },
  {
    icon: <TagIcon sx={{ fontSize: "30px" }} />,
    name: "Explore",
  },
  {
    icon: <NotificationsNoneOutlinedIcon sx={{ fontSize: "30px" }} />,
    name: "Notifications",
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: "30px" }} />,
    name: "Messages",
  },
  {
    icon: <BookmarkBorderOutlinedIcon sx={{ fontSize: "30px" }} />,
    name: "Bookmarks",
  },
  {
    icon: <PersonOutlineOutlinedIcon sx={{ fontSize: "30px" }} />,
    name: "Profile",
  },
  {
    icon: <MoreHorizIcon sx={{ fontSize: "30px" }} />,
    name: "More",
  },
];
