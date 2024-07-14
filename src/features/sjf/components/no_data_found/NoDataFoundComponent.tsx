import React from "react";
import { Typography, Box, styled, keyframes } from "@mui/material";
import NoDataFoundGif from "../../../../assets/gif/NoDataFound.gif";
// Define a keyframe animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component with animation
const AnimatedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  animation: `${fadeIn} 1s ease-out`,
}));

const NoDataFoundComponent = () => {
  return (
    <AnimatedBox
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <img
        src={NoDataFoundGif}
        alt="No Data"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
        {" No Data Found"}
      </Typography>
    </AnimatedBox>
  );
};

export default NoDataFoundComponent;
