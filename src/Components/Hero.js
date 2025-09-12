import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  useColorMode,
  SimpleGrid,
  Flex,
  useColorModeValue,
  GridItem,
  Image,
  Divider,
  Icon,
  Grid,
} from "@chakra-ui/react";
import webDesignImage from "../images/Web-design.jpg";
import webDevImage from "../images/cross-platform-dev.jpg";
import promptEng from "../images/Prompt-engineering.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiCsharp,
  SiAdobexd,
  SiApollographql,
} from "react-icons/si";

const Hero = () => {
  const bg = useColorModeValue("whiteAlpha.300", "gray.900");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const gridItemsBorderColor = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("gray.300", "gray.600");
  const iconColor = useColorModeValue("black", "white");

  const shadow = useColorModeValue("md", "lg");
  const { colorMode } = useColorMode();
  const heroRef = useRef(); // Ref to the Hero component

  // skill names and icons, you can add more skills here, the icons are from react-icons

  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "ReactJS", icon: FaReact },
    // { name: "NextJS", icon: SiNextdotjs },
    // { name: "Framer", icon: SiFramer },
    // { name: "C++", icon: SiCplusplus },
    // { name: "C#", icon: SiCsharp },
    // { name: "NodeJS", icon: FaNodeJs },
    // { name: "ExpressJS", icon: SiExpress },
    // { name: "MongoDB", icon: SiMongodb },
    // { name: "React Native", icon: FaReact },
    { name: "Figma", icon: FaFigma },
    { name: "Adobe XD", icon: SiAdobexd },
    { name: "API Integration", icon: SiApollographql, label: "Restful API's" },
  ];

  /* services names and images, you can add more services here
  example:
  {
    title: "Service Name",
    description: "Service Description",
    image: "Service Image",
  },

  the already existing images are in the images folder, you can add more images there. 
  If you want to change the existing images, refer to the following link: https://www.figma.com/design/MgHzIuAH2oo83w8ZLG2vfm/Editable-files-for-Portfolio-theme?node-id=0-1&t=ByPDxgDyR43R255i-1
  use password: Portfolio@3355
  */
  const services = [
    {
      title: "Web Design",
      description:
        "Creating visually appealing and user-friendly web interfaces.",
      image: webDesignImage,
    },
    {
      title: "Cross-platform Development",
      description: "Building seamless cross-platform applications.",
      image: webDevImage,
    },
    {
      title: "Prompt Engineering",
      description:
        "Leveraging AI to generate innovative and creative digital art.",
      image: promptEng,
    },
  ];

  return (
    <Box
      width="full"
      minH={{ base: "auto", md: "calc(100vh - 32px)" }}
      position="relative"
      borderRadius="xs"
      bg={colorMode === "dark" ? "gray.800" : "white"}
      overflow="auto"
      ref={heroRef}
      p={8}
    >
      <Box
        position="relative"
        zIndex="2"
        height="full"
        width="full"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justifyContent="space-between" alignItems="center" mb={8}>
          <Box>
            <Heading
              as="h1"
              size={{ base: "lg", md: "xl" }}
              color={textColor}
              textAlign={{ base: "center", md: "left" }}
            >
              Muhammad Taimoor Ahmad
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              textAlign={{ base: "center", md: "left" }}
            >
              UI/UX Designer | Wordpress Developer | Laravel Developer 
            </Text>
            <Divider my={"4"} color={color} />
          </Box>
        </Flex>
        <Box
          position="relative"
          zIndex="2"
          height="full"
          width="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading size="md" mb={4} color={textColor}>
            About me
          </Heading>
          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            mb={10}
            color={textColor}
            textAlign={"justify"}
          >
            I’m a passionate PHP Laravel Developer with strong experience in building secure, scalable, and efficient web 
            applications. I also specialize in WordPress development, creating responsive, pixel-perfect, and SEO-friendly 
            websites. Currently, I’m expanding my skills in React to develop modern, dynamic, and interactive interfaces. 
            With hands-on experience in UI/UX design, I focus on building digital products that are not only functional 
            but also visually engaging and user-friendly. I enjoy solving complex problems, writing clean and maintainable 
            code, and following best practices to ensure performance and reliability. My approach combines creativity with 
            technical expertise, allowing me to deliver complete solutions from backend to frontend. I’m always eager to learn 
            new technologies and improve my skills to stay ahead in the fast-paced world of web development.
          </Text>

          <Heading size="md" mb={4} color={textColor}>
            My Services
          </Heading>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={2}
            autoFlow="row dense"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            minChildWidth="300px"
            justifyContent="flex-start"
            alignItems="flex-start"
            mb={"10"}
          >
            {services.map((service, index) => (
              <GridItem
                key={index}
                bg={bg}
                borderWidth={"1px"}
                borderColor={gridItemsBorderColor}
                borderRadius="lg"
                boxShadow={shadow}
                overflow="hidden"
                position="relative"
                transition="transform 0.3s, box-shadow 0.3s"
                _hover={{
                  transform: "scale(0.98)", // Scale up on hover
                  boxShadow: "xl",
                }}
              >
                <Box position="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    objectFit="cover"
                    w="100%"
                    h={{ base: "150px", md: "200px", lg: "250px" }}
                    zIndex="1"
                  />
                </Box>
                <Box p={4} zIndex="0">
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    mb={2}
                    color={textColor}
                  >
                    {service.title}
                  </Text>
                  <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>
                    {service.description}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </SimpleGrid>

          <Heading size="md" mb={4} color={textColor}>
            My Skills
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={2}>
            {skills.map((skill, index) => {
              return (
                <Box
                  key={index}
                  minWidth="120px"
                  maxWidth="200px"
                  p={{ base: 2, md: 4 }}
                  border={`1px solid`}
                  borderColor={color}
                  borderRadius="lg"
                  transition="transform 0.3s, box-shadow 0.3s"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Flex alignItems="center" justifyContent="center">
                    <Icon
                      as={skill.icon}
                      boxSize={{ base: "16px", md: "24px" }}
                      color={iconColor}
                    />
                    <Text
                      ml={2}
                      fontSize={"12"}
                      fontWeight={"medium"}
                      color={textColor}
                    >
                      {skill.label || skill.name}
                    </Text>
                  </Flex>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
