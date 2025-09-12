import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Badge,
  Icon,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Divider,
  VStack,
  Grid,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaWordpress,
  FaElementor,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiApollographql,
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { IoIosCloudyNight } from "react-icons/io";
import { SiDotnet } from "react-icons/si";

  // Add your work history and experience here in this component.  
const ExperienceSection = () => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const borderColor = useColorModeValue("gray.800", "gray.200");

  const experiences = [
    {
      title: "OTG Hauling",
      description:
        "OTG Hauling is a professional website developed in WordPress. It represents a company in the US freight industry, providing hauling and logistics services tailored to meet transportation needs.",
      techStack: [
        { name: "Wordpress", icon: FaWordpress },
        { name: "Elementor Pro", icon: FaElementor },

      ],
      details:
        "OTG Hauling is a WordPress-based website designed for a US-based freight and logistics company. The platform highlights a full range of transportation and hauling services, catering to both small-scale and large-scale freight needs across the country. The website has been developed with a professional layout, ensuring ease of navigation for clients seeking reliable freight solutions. It emphasizes core services such as heavy equipment transport, full truckload (FTL) and partial load services, time-sensitive freight, and nationwide logistics coverage. With a focus on user experience, the site integrates clear service categories, contact options, and resourceful content to strengthen the company’s digital presence in the competitive US freight industry.",
    },
    {
      title: "Bruce Piano",
      description: "Bruce Piano is a WordPress-developed website that showcases a piano sales and service business. Based in the United States, it highlights piano rentals, tuning, repair, and restoration services while providing customers with an easy-to-navigate online experience.",
      techStack: [
        { name: "Wordpress", icon: FaWordpress },
        { name: "Elementor Pro", icon: FaElementor },
      ],
      details: "Bruce Piano is a professionally developed WordPress website created to represent a leading piano sales and service business in the United States. The website highlights a wide range of services including piano sales, rentals, tuning, moving, repair, and restoration. It has been designed with a clean and user-friendly interface to make browsing seamless for customers, while also emphasizing the company’s expertise and long-standing reputation in the piano industry. The site integrates service information, booking features, and customer resources to ensure a smooth online experience for clients seeking both new and restored pianos.",
    },
    {
      title: "Dirty Bird",
      description: "Dirty Bird Trucking is a professional freight service provider in the United States, offering dependable dry van shipping and nationwide transportation solutions. The website is designed to showcase the company’s expertise in handling full truckload and partial load services, expedited freight, and secure, insured deliveries.",
      techStack: [
        { name: "Wordpress", icon: FaWordpress },
        { name: "Elementor Pro", icon: FaElementor },
      ],
      details: "Dirty Bird Trucking LLC is a United States-based freight company specializing in dry van shipping and nationwide logistics solutions. The website highlights a wide range of services including full truckload (FTL) and partial load transportation, expedited and time-sensitive freight, as well as compliant and insured shipping options. Designed with a clean and professional layout, the site emphasizes the company’s reliability, broker partnerships, and commitment to delivering freight safely and on time, making it a trusted choice in the US trucking industry.",
    },
    {
      title: "FYP Fix NearBy",
      description: "Help Around Me” is a web-based platform developed as a Final Year Project with the aim of connecting users to nearby technical and repair service providers in real time. The system is designed to simplify the process of finding reliable electricians, plumbers, mechanics, and other essential technicians by utilizing location-based services. Built using .NET for the backend and React.js for the frontend, the platform ensures fast performance, scalability, and a seamless user experience.",
      techStack: [
        { name: "Reactjs", icon: FaReact },
        { name: "Dot Net", icon: SiDotnet  },
        { name: "MongoDB", icon: SiMongodb  },
        { name: "PostgreSQL", icon: SiPostgresql  },
      ],
      details: "The project focuses on bridging the gap between users and skilled service providers by offering an intuitive interface, secure authentication, and real-time communication features. Service providers can register and showcase their expertise, while users can review profiles, ratings, and availability before making a request. By addressing the challenges of accessibility and trust in on-demand repair services, “Help Around Me” provides a reliable solution for everyday technical issues. This project not only demonstrates technical proficiency in full-stack web development but also emphasizes practical problem-solving to meet real-world community needs.",
    },
    
  ];

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Work Experience
      </Heading>
      <Stack spacing={6}>
        {experiences.map((exp, index) => (
          <Box
            key={index}
            py={4}
            borderRadius="lg"
            transition="all 0.3s ease"
          >
            <VStack align="start" spacing={0} width="100%">
              <Flex justify="space-between" width="100%" align="center">
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  {exp.title}
                </Text>
                {exp.badges && (
                  <Flex wrap="wrap" justify="flex-end">
                    {exp.badges.map((badge, idx) => (
                      <Badge key={idx} colorScheme="green" mr={2} mb={2}>
                        {badge}
                      </Badge>
                    ))}
                  </Flex>
                )}
              </Flex>
              <Text fontSize="sm" color={textColor}>
                {exp.description}
              </Text>
              <Divider my={2} />
              <Text fontSize="sm" color={textColor}>
                {exp.details}
              </Text>
              <Flex wrap="wrap" mt={4}>
                {exp.techStack.map((tech, idx) => (
                  <Flex
                    key={idx}
                    align="center"
                    mr={4}
                    mt={2}
                    p={1.5}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="full"
                    color={textColor}
                  >
                    <Icon as={tech.icon} w={4} h={4} />{" "}
                    <Text ml={2} fontSize="xs">
                      {tech.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </VStack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const Resume = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  const dividerColor = useColorModeValue("gray.300", "gray.600");
  const headingColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const iconColor = useColorModeValue("black", "white");

  /* 
  Define skill icons
  you can use the skills from the Hero.js file, or add more skills here, pass those using props.
*/
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

  return (
    <Box p={8} bg={bg} minH="100vh" color={color}>
      <Flex justifyContent="center" alignItems="center">
        <Box w="full" rounded="lg" textAlign="left">
          <Flex justifyContent="space-between" alignItems="center" mb={8}>
            <Box>
              <Heading
                as="h1"
                size={{ base: "lg", md: "xl" }}
                color={headingColor}
                textAlign={{ base: "center", md: "left" }}
              >
                Muhammad Taimoor Ahmad
              </Heading>
              <Text
                fontSize="lg"
                color={color}
                textAlign={{ base: "center", md: "left" }}
              >
                UI/UX Designer | Cross-platform developer | Prompt Engineer
              </Text>
              <Divider my={"4"} color={dividerColor} />
              <Stack spacing={0}>
                <Flex alignItems="center">
                  <Icon as={FaMapMarkerAlt} mr={2} />
                  <Text>Lahore, Pakistan</Text>
                </Flex>

                <Flex alignItems="center">
                  <Icon as={FaEnvelope} mr={2} />
                  <Text>muhammadtaimoorahmad55@gmail.com</Text>
                </Flex>
              </Stack>
            </Box>
          </Flex>

          <Box mb={8}>
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              Profile
            </Heading>
            <Text textAlign={"justify"}>
            I’m a passionate PHP Laravel Developer with strong experience in building secure, scalable, and efficient web 
            applications. I also specialize in WordPress development, creating responsive, pixel-perfect, and SEO-friendly 
            websites. Currently, I’m expanding my skills in React to develop modern, dynamic, and interactive interfaces. 
            With hands-on experience in UI/UX design, I focus on building digital products that are not only functional 
            but also visually engaging and user-friendly. I enjoy solving complex problems, writing clean and maintainable 
            code, and following best practices to ensure performance and reliability. My approach combines creativity with 
            technical expertise, allowing me to deliver complete solutions from backend to frontend. I’m always eager to learn 
            new technologies and improve my skills to stay ahead in the fast-paced world of web development.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={8}>
            <Box>
              <Heading as="h3" size="md" mb={4} color={headingColor}>
                Education
              </Heading>
              <List spacing={3} textAlign={"justify"}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  BS Computer Science, University of South Asia, Lahore 
                  (2021-2025)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                 ICS , Govt Civil lines Collage, Lahore. (2019-2021) -
                 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Matriculation, Seek School System, Lahore. (2017-2019)
        
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h3" size="md" mb={4} color={headingColor}>
                Courses
              </Heading>
              <List spacing={3} textAlign={"justify"}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                 
                  Laravel Development
                  (Oct 2022 -  Noc 2022)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  6 Months of Experience in Wordpress (Dynamic Online technologies)
                  (Mar 2022)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  UI/UX Design
                  (Jan 2022 - Feb 2022)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  HTML, CSS, Bootstrap
                  (Nov 2021 - Dec 2021)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Microsoft Office
                  (July 2021 - Aug 2021)
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={8}>
            <Box>
              <Heading as="h3" size="md" mb={4} color={headingColor}>
                Skills
              </Heading>
              <Grid
                templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
                gap={2}
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Box
                      key={index}
                      minWidth="120px"
                      maxWidth="200px"
                      p={4}
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
                        <Icon size={"18"} color={iconColor} />
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

            <Box>
              <Heading as="h3" size="md" mb={4} color={headingColor}>
                Hobbies & Languages
              </Heading>
              <Text mb={2}>Hobbies</Text>
              <Text textAlign={"justify"}>
                Learning About Different Coding Languages, Cricket, Badminton and Weightlifting
              </Text>
              <Text mt={4} mb={2}>
                Languages
              </Text>
              <Text>Urdu - (Native)</Text>
              <Text>English - (Professional)</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
      <ExperienceSection />
    </Box>
  );
};

export default Resume;
