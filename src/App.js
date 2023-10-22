import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { createContext, useState } from "react";

export const GlobalContext = createContext();
function App() {
  // Modal
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ open, setOpen, openSignup, setOpenSignup }}
    >
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
