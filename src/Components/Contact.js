// src/components/Contact.js
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  useColorModeValue,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  IconButton,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiFiverr  } from "react-icons/si";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const bgColor = useColorModeValue("white", "gray.800");
  const buttonBg = useColorModeValue("black", "whiteAlpha.900");
  const buttonTextColor = useColorModeValue("white", "gray.800");
  const buttonHoverBg = useColorModeValue("gray.700", "white");

  // State for the message input
  const [message, setMessage] = useState("");

  // Function to handle the Send Message button click
  const handleSendMessage = () => {
    if (message.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }
    const mailtoLink = `mailto:muhammadtaimoorahmad55@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box
      p={{ base: 4, md: 8 }}
      bg={bgColor}
      color={textColor}
      position="relative"
      minH="100vh"
    >
      <VStack align="stretch">
        <Heading
          size={{ base: "lg", md: "xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Get in Touch
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          textAlign={{ base: "center", md: "left" }}
        >
          We are always here to assist you. Whether you have questions, need support, or want to discuss your project, feel free to reach out to us.
        </Text>

        <FormControl id="email" isReadOnly>
          <FormLabel>To:</FormLabel>
          <Input value="muhammadtaimoorahmad55@gmail.com" isReadOnly />
        </FormControl>

        <FormControl id="message" my={"4"}>
          <FormLabel>Write a Message</FormLabel>
          <Box position="relative">
            <Textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              size="md"
              pr="60px"
              height="200px"
            />
            <IconButton
              icon={<IoSend />}
              aria-label="Send Message"
              position="absolute"
              bottom="10px"
              right="10px"
              bg={buttonBg}
              color={buttonTextColor}
              _hover={{ bg: buttonHoverBg }}
              onClick={handleSendMessage}
            />
          </Box>
        </FormControl>

        <Spacer />

        {/* Connect Through Section */}
        <Box>
          <Text fontSize={{ base: "md", md: "lg" }} mb={2}>
            Connect through:
          </Text>
          <HStack spacing={4}>
            {/* LinkedIn IconButton */}
            <IconButton
              as={Link}
              href="https://www.upwork.com/"
              aria-label="Upwork"
              icon={<SiUpwork  />}
              size="lg"
              bg={buttonBg}
              color={buttonTextColor}
              _hover={{ bg: buttonHoverBg }}
              isExternal
            />
            <IconButton
              as={Link}
              href="https://www.fiverr.com/"
              aria-label="Fiverr"
              icon={<SiFiverr />}
              size="lg"
              bg={buttonBg}
              color={buttonTextColor}
              _hover={{ bg: buttonHoverBg }}
              isExternal
            />
             <IconButton
              as={Link}
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              icon={<FaLinkedinIn  />}
              size="lg"
              bg={buttonBg}
              color={buttonTextColor}
              _hover={{ bg: buttonHoverBg }}
              isExternal
            />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;
