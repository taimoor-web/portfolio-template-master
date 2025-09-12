import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Badge,
  Flex,
  Divider,
  HStack,
  ModalFooter,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaFigma, FaReact, FaElementor } from "react-icons/fa";
import { SiStyledcomponents, SiAdobexd, SiTailwindcss, SiWordpress, SiDotnet  } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import LottieLoader from "../Animations/LottieLoader";
import projectImage1 from "../images/project-cover.jpg";
import Gallery from "./PromptGallery";

// Create an icon mapping
const iconMapping = {
  FaFigma: FaFigma,
  FaReact: FaReact,
  RiTailwindCssFill: SiTailwindcss,
  SiStyledcomponents: SiStyledcomponents,
  TbBrandFramerMotion: TbBrandFramerMotion,
  SiAdobexd: SiAdobexd,
  SiWordpress: SiWordpress,
  FaElementor: FaElementor,
  SiDotnet :SiDotnet ,
  // Add any other icons you need here
};

const getIconComponent = (iconName) => {
  const IconComponent = iconMapping[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const MotionBox = chakra(motion.div);

const ProjectModal = ({
  isOpen,
  onClose,
  project,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "md", md: "4xl" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        maxH={{ base: "60vh", md: "80vh" }}
        overflow="hidden"
        borderRadius="lg"
      >
        <ModalHeader>
          <Heading size={{ base: "md", md: "lg" }} fontWeight="extrabold">
            {project.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="auto" position="relative">
          <Text>{project.modalDescription}</Text>

          {/* Swiper Carousel */}
          <Box
            position="relative"
            width={"100%"}
            height={{ base: "300px", md: "auto" }}
            overflow="hidden"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              initialSlide={currentIndex}
              style={{ height: "100%" }}
            >
              {project.modalImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Box
                    as="img"
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    objectFit={{ base: "contain", md: "cover" }}
                    width="100%"
                    height="100%"
                    borderRadius="lg"
                    bg="transparent"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box mt={"6"}>
            <Text fontWeight="bold" mb={2}>
              Tools/Technologies Used:
            </Text>
            <HStack wrap="wrap" spacing={4}>
              {project.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  display="flex"
                  alignItems="center"
                  fontSize="0.8em"
                  colorScheme="teal"
                  borderRadius="full"
                  px={3}
                  py={2}
                  mb={2}
                >
                  {getIconComponent(tech.icon)}
                  <Text ml={2}>{tech.title}</Text>
                </Badge>
              ))}
            </HStack>
          </Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const PortfolioCard = ({ project, onClick }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue(
    "0px 4px 20px rgba(0, 0, 0, 0.1)",
    "0px 4px 20px rgba(0, 0, 0, 0.6)"
  );
  const badgeBg = useColorModeValue(
    "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,45,45,1) 100%)"
  );
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <MotionBox
      onClick={onClick}
      cursor="pointer"
      whileTap={{ scale: 0.95 }}
      bg={cardBg}
      borderRadius="xl"
      overflow="hidden"
      boxShadow={cardShadow}
      p={6}
      position="relative"
      transition="box-shadow 0.3s ease"
    >
      <Box borderRadius="xl" overflow="hidden" mb={4}>
        <Image
          src={project.coverImage}
          alt={project.title}
          objectFit="cover"
          w={{ base: "100%", md: "100%" }}
          h={{ base: "200px", md: "250px" }}
          borderRadius="lg"
        />
      </Box>
      <Heading
        as="h3"
        size={{ base: "md", md: "lg" }}
        fontWeight="extrabold"
        mb={2}
        color={textColor}
      >
        {project.title}
      </Heading>
      <Text fontSize="sm" color={textColor} mb={4}>
        {project.description}
      </Text>
      <Badge
        bg={badgeBg}
        color="white"
        borderRadius="full"
        px={3}
        py={1}
        fontSize="0.8em"
        textTransform="capitalize"
      >
        {project.category}
      </Badge>
    </MotionBox>
  );
};

const PortfolioSection = ({ headTitle, description, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const color = useColorModeValue("gray.300", "gray.600");

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    onOpen();
  };

  return (
    <Box mb={10}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Box>
          <Heading
            as="h1"
            size={{ base: "md", md: "xl" }}
            color={textColor}
            mb={2}
          >
            {headTitle}
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>
            {description}
          </Text>
          <Divider my={"4"} color={color} />
        </Box>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(200px, 1fr))",
          md: "repeat(auto-fit, minmax(400px, 1fr))",
        }}
        gap={8}
      >
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </Grid>
      {selectedProject && (
        <ProjectModal
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isOpen={isOpen}
          onClose={onClose}
          project={selectedProject}
        />
      )}
    </Box>
  );
};

const PROJECTS_DATA = [
  {
    title: "OTG Hauling",
    description: "OTG Hauling is a professional website developed in WordPress. It represents a company in the US freight industry, providing hauling and logistics services tailored to meet transportation needs.",
    modalDescription:
      "OTG Hauling is a WordPress-based website designed for a US-based freight and logistics company. The platform highlights a full range of transportation and hauling services, catering to both small-scale and large-scale freight needs across the country. The website has been developed with a professional layout, ensuring ease of navigation for clients seeking reliable freight solutions. It emphasizes core services such as heavy equipment transport, full truckload (FTL) and partial load services, time-sensitive freight, and nationwide logistics coverage. With a focus on user experience, the site integrates clear service categories, contact options, and resourceful content to strengthen the company’s digital presence in the competitive US freight industry.",
    category: "Web Development",
    coverImage: projectImage1,
    modalImages: [projectImage1],
    sideProject: false,
    techStack: [
      { title: "WordPress", icon: "SiWordpress" },
      { title: "Tailwind", icon: "RiTailwindCssFill" },
      { title: "Elementor Pro", icon: "FaElementor" },
    ],
  },
  {
    title: "Bruce Piano",
    description: "Bruce Piano is a WordPress-developed website that showcases a piano sales and service business. Based in the United States, it highlights piano rentals, tuning, repair, and restoration services while providing customers with an easy-to-navigate online experience.",
    modalDescription:
      "Bruce Piano is a professionally developed WordPress website created to represent a leading piano sales and service business in the United States. The website highlights a wide range of services including piano sales, rentals, tuning, moving, repair, and restoration. It has been designed with a clean and user-friendly interface to make browsing seamless for customers, while also emphasizing the company’s expertise and long-standing reputation in the piano industry. The site integrates service information, booking features, and customer resources to ensure a smooth online experience for clients seeking both new and restored pianos.",
    category: "Web Development",
    coverImage: projectImage1,
    modalImages: [projectImage1],
    sideProject: false,
    techStack: [
      { title: "WordPress", icon: "SiWordpress" },
      { title: "Tailwind", icon: "RiTailwindCssFill" },
      { title: "Elementor Pro", icon: "FaElementor" },
    ],
  },
  {
    title: "Dirty Bird",
    description: "Dirty Bird Trucking is a professional freight service provider in the United States, offering dependable dry van shipping and nationwide transportation solutions. The website is designed to showcase the company’s expertise in handling full truckload and partial load services, expedited freight, and secure, insured deliveries.",
    modalDescription:
      "Dirty Bird Trucking LLC is a United States-based freight company specializing in dry van shipping and nationwide logistics solutions. The website highlights a wide range of services including full truckload (FTL) and partial load transportation, expedited and time-sensitive freight, as well as compliant and insured shipping options. Designed with a clean and professional layout, the site emphasizes the company’s reliability, broker partnerships, and commitment to delivering freight safely and on time, making it a trusted choice in the US trucking industry.",
    category: "Web Development",
    coverImage: projectImage1,
    modalImages: [projectImage1],
    sideProject: false,
    techStack: [
      { title: "WordPress", icon: "SiWordpress" },
      { title: "Tailwind", icon: "RiTailwindCssFill" },
      { title: "Elementor Pro", icon: "FaElementor" },
    ],
  },
  // Add more projects as needed
];

const SIDE_PROJECTS_DATA = [
  {
    title: "FYP Fix NearBy",
    description: "Fix NearBy” is a web-based platform developed as a Final Year Project with the aim of connecting users to nearby technical and repair service providers in real time. The system is designed to simplify the process of finding reliable electricians, plumbers, mechanics, and other essential technicians by utilizing location-based services. Built using .NET for the backend and React.js for the frontend, the platform ensures fast performance, scalability, and a seamless user experience.",
    modalDescription: "The project focuses on bridging the gap between users and skilled service providers by offering an intuitive interface, secure authentication, and real-time communication features. Service providers can register and showcase their expertise, while users can review profiles, ratings, and availability before making a request. By addressing the challenges of accessibility and trust in on-demand repair services, “Fix NearBy” provides a reliable solution for everyday technical issues. This project not only demonstrates technical proficiency in full-stack web development but also emphasizes practical problem-solving to meet real-world community needs.",
    category: "WebApp",
    coverImage: projectImage1,
    modalImages: [projectImage1],
    sideProject: true,
    techStack: [
      { title: "ReactJs", icon: "FaReact " },
      { title: "Tailwind", icon: "RiTailwindCssFill" },
      { title: "DotNet", icon: "SiDotnet" },
    ],
  },
  
  // Add more side projects as needed
];

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const bg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    // Simulate loading to show animation for 1.5 seconds, you can change/remove the time as needed, or use data from API
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        position={{ base: "fixed", md: "absolute" }}
        top="0"
        left="0"
        right="0"
        bottom="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={bg}
      >
        <LottieLoader />
      </Box>
    );
  }

  return (
    <Stack spacing={12} p={8} bg={bg}>
      <PortfolioSection
        headTitle={"Projects"}
        description={
          "These projests represent my work in Cross-platform development and UI/UX design, including full stack applications and systems built to solve real-world problems"
        }
        projects={PROJECTS_DATA}
      />
      <PortfolioSection
        headTitle={"Final Year Project"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        projects={SIDE_PROJECTS_DATA}
      />
      <Gallery />{" "}
      {/* This component is for the gallery section, you can show whatever images you want here in a grid format*/}
    </Stack>
  );
};

export default Portfolio;
