import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { createContext, useState } from "react";
import LadybugPost from "./pages/LadybugPost/LadybugPost";
import Bookmarks from "./pages/Bookmarks/Bookmarks";

export const GlobalContext = createContext();
function App() {
  // Modal
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [loggingOut, setLogOut] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        open,
        setOpen,
        openSignup,
        setOpenSignup,
        openComments,
        setOpenComments,
        loggingOut,
        setLogOut,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<LadybugPost />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
