import React from "react";
import "./Happenings.css";
import { Box } from "@mui/material";

const Happenings = ({ trending, hash, ladybugs, more }) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="trending">{trending}</p>
          {more}
        </Box>
        <p className="hash">{hash}</p>
        <p className="ladybug-popular">{ladybugs}</p>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Happenings;
