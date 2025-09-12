import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Heading,
  Divider,
} from "@chakra-ui/react";
import LottieLoader from "../Animations/LottieLoader";

// Import static images
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";

// Static data structure
// Note: This can be replaced with API data following the same structure:
// {
//   category: string,
//   images: string[]
// }
const GALLERY_DATA = [
  {
    category: "Landscape Generation",
    images: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image2,
      image3,
      image4,
      image5,
    ],
  },
];

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const color = useColorModeValue("gray.300", "gray.600");

  useEffect(() => {
    // Simulate loading to show animation for 1.5 seconds, you can change/remove the time as needed, or use data from API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Box>
        <Heading
          as="h1"
          size={{ base: "md", md: "xl" }}
          color={textColor}
          mb={2}
        >
          Images Showcase
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Divider my={"4"} color={color} />
      </Box>
      {isLoading ? (
        <LottieLoader />
      ) : (
        GALLERY_DATA.map((category, index) => (
          <Box key={index} mb={8}>
            <Grid
              templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
              autoRows="150px"
              gap={4}
            >
              {category.images.map((imageUrl, idx) => {
                // Determine row and column spans to create a bento effect
                const rowSpan = idx % 5 === 0 ? 2 : 1;
                const colSpan = idx % 3 === 0 ? 2 : 1;

                return (
                  <GridItem
                    key={`${index}-${idx}`}
                    rowSpan={rowSpan}
                    colSpan={colSpan}
                    overflow="hidden"
                  >
                    <Box as="button" width="100%" height="100%">
                      <Image
                        src={imageUrl}
                        objectFit="cover"
                        borderRadius={"md"}
                        width="100%"
                        height="100%"
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.05)" }}
                        alt={`${category.category} image ${idx + 1}`}
                      />
                    </Box>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Gallery;
