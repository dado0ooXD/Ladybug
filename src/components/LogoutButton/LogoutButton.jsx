import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { userDb } from "../../firebase";
import { signOutUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

export default function LogoutButton({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Dispatch
  const dispatch = useDispatch();

  // Logout
  const LogOut = () => {
    signOut(userDb)
      .then(() => {
        dispatch(signOutUser());
      })
      .catch((error) => alert(error.message));
  };

  // Handle close
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={LogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
