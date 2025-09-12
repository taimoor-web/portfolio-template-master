import {
  useColorMode,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Icon,
  useDisclosure,
  Tooltip,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ToggleColorModeButton = ({ iconButtonProps, width, height }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const label =
    colorMode === "light" ? "Switch to dark mode" : "Switch to light mode";
    const IconComponent = colorMode === "light" ? MdDarkMode : MdLightMode;

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="right">
      <PopoverTrigger>
        <IconButton
          isRound
          aria-label={label}
          icon={<Icon as={IconComponent} w={width} h={height} />}
          onClick={toggleColorMode}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          {...iconButtonProps} // Additional props are passed here
        />
      </PopoverTrigger>
      <PopoverContent
        bg={colorMode === "light" ? "white" : "navy.900"} // Background color
        borderRadius="md" // Border radius
        boxShadow="xl" // Box shadow
        p="12px" // Padding
        animation="ease-in-out" // Optional animation for smooth appearance
        w={"auto"}
        minWidth="max-content"
      >
        <PopoverArrow />
        <Text color={useColorModeValue("gray.800", "gray.200")}>{label}</Text> {/* Display the label text inside the Popover */}
      </PopoverContent>
    </Popover>
  );
};
