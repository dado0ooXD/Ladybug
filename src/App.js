import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { createContext, useState } from "react";
import LadybugPost from "./pages/LadybugPost/LadybugPost";

export const GlobalContext = createContext();
function App() {
  // Modal
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        open,
        setOpen,
        openSignup,
        setOpenSignup,
        openComments,
        setOpenComments,
      }}
    >
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<LadybugPost />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
