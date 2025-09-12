import React from "react";
import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";

import lottieAnimation from "../theme/loading-animationJSON.json";

const LottieLoader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      <Lottie animationData={lottieAnimation} loop={true} />
    </Box>
  );
};

export default LottieLoader;
