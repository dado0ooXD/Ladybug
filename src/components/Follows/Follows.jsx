import React from "react";
import "./Follows";
import { Box, Typography } from "@mui/material";
import { followsData } from "../../utils/follows";
import FollowCard from "../FollowCard/FollowCard";

const Follows = () => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold">
        Who to follow
      </Typography>
      <Box>
        {followsData.map((item, index) => (
          <FollowCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default Follows;
