import React from "react";
import "../../App.css"; // Import the CSS for styling
import { Box, useColorMode } from "@chakra-ui/react";

const Card = ({ children, className, ...props }) => {
  const { colorMode } = useColorMode();

  const glassEffect = {
    bg: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'white', // Semi-transparent background for dark mode
    backdropFilter: colorMode === 'dark' ? 'blur(10px)' : 'none', // Apply blur effect for dark mode only
    boxShadow: colorMode === 'dark' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'sm', // Conditional boxShadow based on colorMode
  };
  return (
    <Box
      borderRadius="10px"
      p={4} // p="16px" can be used as well
      w="auto"
      h="auto"
      overflow="hidden"
      {...glassEffect}
      {...props} // This will allow you to pass any other Chakra UI style props when using the Card component
    >
      {children}
    </Box>
  );
};

export default Card;
