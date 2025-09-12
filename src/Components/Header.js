import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  useDisclosure,
  IconButton,
  HStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ToggleColorModeButton } from "../theme/ToggleColorModeButton";
import { FiHome, FiFileText, FiGrid, FiMail } from "react-icons/fi";
import { FaPen } from "react-icons/fa";

const MenuItems = ({
  color,
  hoverBgColor,
  setCurrentView,
  currentView,
  onClose,
}) => {
  const menuLinks = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <>
      {menuLinks.map((item) => (
        <Link
          px="4"
          py="2"
          mx={1}
          rounded="md"
          borderRadius={"full"}
          key={item}
          href={`#${item.toLowerCase()}`}
          color={color}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="light"
          _hover={{ textDecor: "none", bg: hoverBgColor }}
          bg={currentView === item ? hoverBgColor : "transparent"}
          onClick={() => {
            setCurrentView(item);
            if (onClose) onClose();
          }}
        >
          {item}
        </Link>
      ))}
    </>
  );
};

const MenuItemsForMobile = ({
  setCurrentView,
  currentView,
  onClose,
  hoverBgColor,
}) => {
  const linkColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const linkHoverColor = useColorModeValue("teal.500", "teal.300");
  const dividerColor = useColorModeValue("gray.200", "gray.700");

  const menuLinks = [
    { name: "About", icon: FiHome },
    { name: "Resume", icon: FiFileText },
    { name: "Portfolio", icon: FiGrid },
    { name: "Blog", icon: FaPen },
    { name: "Contact", icon: FiMail },
  ];

  return (
    <VStack spacing={4} align="stretch" w="100%" onClick={onClose} mt={8}>
      {menuLinks.map((item, index) => (
        <Link
          key={item.name}
          href={`#${item.name.toLowerCase()}`}
          onClick={() => setCurrentView(item.name)}
        >
          <HStack
            spacing={4}
            alignItems={"center"}
            px="4"
            py="2"
            mx={1}
            rounded="md"
            borderRadius={"full"}
            fontSize="xl"
            fontWeight="medium"
            color={linkColor}
            bg={currentView === item.name ? hoverBgColor : "transparent"}
            _hover={{ color: linkHoverColor, textDecor: "none" }}
          >
            <Box as={item.icon} boxSize={6} />
            <Text>{item.name}</Text>
          </HStack>
          {index < menuLinks.length - 1 && (
            <Divider mt={4} borderColor={dividerColor} />
          )}
        </Link>
      ))}
    </VStack>
  );
};

const Header = ({ setCurrentView, currentView }) => {
  const [sticky, setSticky] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = useColorModeValue(
    sticky ? "white" : "transparent",
    sticky ? "gray.800" : "transparent"
  );
  const color = useColorModeValue(sticky ? "gray.800" : "black", "white");
  const HamburgerIconBg = useColorModeValue("gray.100", "gray.800");

  const whiteGlass = "#e6e6e66b";
  const blackGlass = "#6666666b";

  const hoverBgColor = useColorModeValue(
    sticky ? blackGlass : whiteGlass,
    blackGlass
  );
  return (
    <Box
      as="header"
      position={"fixed"}
      top={{ base: "10", md: "4" }}
      left={{ base: "0", md: "auto" }}
      right={{ base: "auto", md: "0" }}
      w="auto"
      pl={{ base: 2, md: 12 }}
      pr={{ base: 2, md: 12 }}
      zIndex={"sticky"}
      bg={bgColor}
      transition="background-color 0.3s"
      boxShadow={sticky ? "sm" : "none"}
    >
      <Flex align="center" justify="space-between" p="4" m="0 auto">
        {/* Mobile Header */}
        <Flex display={{ base: "flex", md: "none" }} align="center">
          <IconButton
            aria-label="Open Menu"
            size="md"
            bg={HamburgerIconBg}
            mr={2}
            borderRadius={"full"}
            shadow={"sm"}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            _hover={{ bg: hoverBgColor }}
          />
          <ToggleColorModeButton />
        </Flex>

        {/* Desktop Header */}
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          bg={useColorModeValue("white", "gray.800")}
          p={2}
          borderRadius={"full"}
          boxShadow={"md"}
        >
          <MenuItems
            color={color}
            hoverBgColor={hoverBgColor}
            setCurrentView={setCurrentView}
            currentView={currentView}
          />
          <Box ml={"4"}>
            <ToggleColorModeButton />
          </Box>
        </Flex>
      </Flex>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack mt="24" spacing="6">
              <MenuItemsForMobile
                color={color}
                hoverBgColor={hoverBgColor}
                setCurrentView={setCurrentView}
                currentView={currentView}
                onClose={onClose}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
