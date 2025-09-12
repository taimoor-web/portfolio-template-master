// Layout.js

import { Box, Grid, CSSReset, useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { useState } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import { Sidebar } from "./theme/components/Sidebar";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import backgroundImage from "./images/backdrop.jpg"; // Replace with your own image or keep as is

function Layout() {
  // State to manage the currently displayed view
  const [currentView, setCurrentView] = useState("About");

  // Access the current color mode (light or dark)
  const { colorMode } = useColorMode();

  // Function to render content based on the current view
  const renderContent = () => {
    switch (currentView) {
      case "About":
        return <Hero />; // About section
      case "Resume":
        return <Resume />; // Resume section
      case "Portfolio":
        return <Portfolio />; // Portfolio section
      case "Contact":
        return <Contact />; // Contact section
      default:
        return <Hero />; // Default to About section
    }
  };

  return (
    <>
      <Box
        height="100vh"
        width="full"
        bgImage={`url(${backgroundImage})`} // Change to your own image
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
        borderRadius="xs"
        overflow="auto"
      >
        {/* Overlay box with opacity to enhance readability */}

        <Box
          position="fixed"
          top="0"
          right="0"
          bottom="0"
          left="0"
          bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
          zIndex="1"
          borderRadius="xs"
        />

        {/* Reset CSS styles to ensure consistency across browsers */}

        <CSSReset />

        {/* Global styles for background animation */}

        <Global
          styles={css`
            body {
              background: ${colorMode === "dark"
                ? "linear-gradient(270deg, #00072d, #212529)"
                : "linear-gradient(270deg, #f0e7db, #f9f7f7)"};
              background-size: 400% 400%;
              animation: gradientAnimation 15s ease infinite;
            }
            @keyframes gradientAnimation {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}
        />

        {/* Main grid layout */}

        <Grid
          templateColumns={{ base: "1fr", md: "300px 1fr" }}
          gap={4}
          p={4}
          height={{ base: "auto", md: "100vh" }}
        >
          {/* Sidebar Section */}

          <Box
            p={4}
            borderRadius="md"
            bg={colorMode === "dark" ? "gray.800" : "white"}
            color={colorMode === "dark" ? "white" : "black"}
            height={{ base: "auto", md: "calc(100vh - 32px)" }}
            position={{ base: "relative", md: "sticky" }}
            top={4}
            boxShadow="lg"
            zIndex="2"
          >
            {/* Sidebar component containing navigation links */}

            <Sidebar />
          </Box>

          {/* Main Content Area */}

          <Box
            borderRadius="md"
            boxShadow="lg"
            overflowY="auto"
            position="relative"
            zIndex="2"
          >
            {/* Header with navigation controls */}

            <Header setCurrentView={setCurrentView} currentView={currentView} />

            {/* Render the selected content based on currentView */}

            {renderContent()}
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Layout;
