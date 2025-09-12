import React from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/sidebar";

const Layout = ({ children }) => {
  const headerHeight = "4rem";
  const contentMarginLeft = useBreakpointValue({ base: 0, md: "250px" });

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1" pt={headerHeight} overflowY={"hidden"}>
        <Sidebar />
        <Box
          flex="1"
          p={4}
          pt={0}
          ml={contentMarginLeft} // Use the calculated marginLeft
          overflowY="auto"
          h={`calc(100vh - ${headerHeight})`}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
