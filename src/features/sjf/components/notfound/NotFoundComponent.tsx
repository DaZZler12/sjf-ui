import React from "react";
import { Typography, Box, styled, keyframes } from "@mui/material";
import NotFoundGif from "../../../../assets/gif/404Page.gif";

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

const NotFound: React.FC = () => {
  return (
    <AnimatedBox
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <img
        src={NotFoundGif}
        alt="No Data Animation"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </AnimatedBox>
  );
};

export default NotFound;
