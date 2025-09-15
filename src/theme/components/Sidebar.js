import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Divider,
  Icon,
  useColorMode,
  Badge,
  Wrap,
  WrapItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { EmailIcon, CalendarIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from "react-icons/si";

export const Sidebar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();
  
  return (
    <Box
      p={4}
      height={{ base: "auto", md: "calc(100vh - 32px)" }}
      alignItems="center"
    >
      <VStack spacing={4} align="center">
        <Box
          position="relative"
          width="120px"
          height="120px"
          borderRadius="md"
          bg={colorMode === "dark" ? "gray.700" : "gray.300"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={require("../../images/Avatar.jpeg")}
            alt="Taimoor"
            borderRadius="full"
            boxSize="100px"
            objectFit="cover"
          />
        </Box>
        <Text fontSize={{ sm: "md", base: "lg" }} fontWeight="bold">
          Muhammad Taimoor Ahmad
        </Text>
        <Wrap spacing={2} justify="center">
          <WrapItem>
            <Badge variant="outline">Developer | Designer</Badge>
          </WrapItem>
        </Wrap>
        {isMobile ? (
          <Accordion allowToggle width="full">
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="sm" fontWeight="bold">
                    More Info
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack spacing={3} align="start" width="full">
                  <HStack spacing={3} align="center">
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="full"
                      bg={colorMode === "dark" ? "gray.700" : "white"}
                      p={6}
                      boxShadow="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={EmailIcon} />
                    </Box>
                    <Box>
                      <Text fontSize="sm" fontWeight="bold">
                        EMAIL
                      </Text>
                      <Text fontSize="xs">muhammadtaimoorahmad55@gmail.com</Text>
                    </Box>
                  </HStack>
                  <HStack spacing={3} align="center">
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="full"
                      bg={colorMode === "dark" ? "gray.700" : "white"}
                      p={6}
                      boxShadow="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={PhoneIcon} />
                    </Box>
                    <Box>
                      <Text fontSize="sm" fontWeight="bold">
                        phone Number
                      </Text>
                      <Text fontSize="xs">+92 3008068378</Text>
                    </Box>
                  </HStack>
                  <HStack spacing={3} align="center">
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="full"
                      bg={colorMode === "dark" ? "gray.700" : "white"}
                      p={6}
                      boxShadow="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={CalendarIcon} />
                    </Box>
                    <Box>
                      <Text fontSize="sm" fontWeight="bold">
                        BIRTHDAY
                      </Text>
                      <Text fontSize="xs">August 23, 2002</Text>
                    </Box>
                  </HStack>
                  <HStack spacing={3} align="center">
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="full"
                      bg={colorMode === "dark" ? "gray.700" : "white"}
                      p={6}
                      boxShadow="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaMapMarkerAlt} />
                    </Box>
                    <Box>
                      <Text fontSize="sm" fontWeight="bold">
                        LOCATION
                      </Text>
                      <Text fontSize="xs">Lahore, Pakistan</Text>
                    </Box>
                  </HStack>
                </VStack>
                <Divider my={"6"} />
                <HStack spacing={4} mt={4} justifyContent={"center"}>
                <IconButton
                  as={Link}
                  href="https://www.linkedin.com/" //add your linkedin profile link here
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  size="lg"
                  isExternal
                />
                <IconButton
                  as={Link}
                  href="https://www.fiverr.com/" //add your facebook profile link here
                  aria-label="Fiverr"
                  icon={<SiFiverr  />}
                  size="lg"
                  isExternal
                />
                <IconButton
                  as={Link}
                  href="https://www.fiverr.com/sellers/m_taimoor_ahmad/edit" //add your instagram profile link here
                  aria-label="Upwork"
                  icon={<SiUpwork  />}
                  size="lg"
                  isExternal
                />
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ) : (
          <>
            <Divider />
            <VStack spacing={3} align="start" width="full">
              <HStack spacing={3} align="center">
                <Box
                  width="20px"
                  height="20px"
                  borderRadius="full"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  p={6}
                  boxShadow="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={EmailIcon} />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    EMAIL
                  </Text>
                  <Text fontSize="xs">muhammadtaimoorahmad55<br></br>@gmail.com</Text>
                </Box>
              </HStack>
              <HStack spacing={3} align="center">
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="full"
                      bg={colorMode === "dark" ? "gray.700" : "white"}
                      p={6}
                      boxShadow="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={PhoneIcon} />
                    </Box>
                    <Box>
                      <Text fontSize="sm" fontWeight="bold">
                        phone Number
                      </Text>
                      <Text fontSize="xs">+92 3008068378</Text>
                    </Box>
                  </HStack>
              <HStack spacing={3} align="center">
                <Box
                  width="20px"
                  height="20px"
                  borderRadius="full"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  p={6}
                  boxShadow="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={CalendarIcon} />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    BIRTHDAY
                  </Text>
                  <Text fontSize="xs">August 23, 2002</Text>
                </Box>
              </HStack>
              <HStack spacing={3} align="center">
                <Box
                  width="20px"
                  height="20px"
                  borderRadius="full"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  p={6}
                  boxShadow="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaMapMarkerAlt} />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    LOCATION
                  </Text>
                  <Text fontSize="xs">Lahore, Pakistan</Text>
                </Box>
              </HStack>
              <Divider />
              <HStack spacing={4} mt={4} justifyContent={"center"}>
                <IconButton
                  as={Link}
                  href="https://www.linkedin.com/" //add your linkedin profile link here
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  size="lg"
                  isExternal
                />
                <IconButton
                  as={Link}
                  href="https://www.fiverr.com/" //add your facebook profile link here
                  aria-label="Fiverr"
                  icon={<SiFiverr  />}
                  size="lg"
                  isExternal
                />
                <IconButton
                  as={Link}
                  href="https://www.Upwork.com/" //add your instagram profile link here
                  aria-label="Upwork"
                  icon={<SiUpwork  />}
                  size="lg"
                  isExternal
                />
              </HStack>
            </VStack>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Sidebar;
