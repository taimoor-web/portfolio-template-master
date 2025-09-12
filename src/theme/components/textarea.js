import { mode } from "@chakra-ui/theme-tools";
export const textareaStyles = {
  components: {
    Textarea: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: "8px",
        },
      },

      variants: {
        main: (props) => ({
          field: {
            bg: mode("transparent", "navy.800")(props),
            border: "1px solid !important",
            color: mode("secondaryGray.900", "white")(props),
            borderColor: mode("secondaryGray.100", "whiteAlpha.100")(props),
            borderRadius: "16px",
            fontSize: "sm",
            p: "20px",
            _placeholder: { color: "secondaryGray.400" },
          },
        }),
        auth: (props) => ({
          field: {
            bg: "white",
            border: "1px solid",
            borderColor: "secondaryGray.100",
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        authSecondary: (props) => ({
          field: {
            bg: "white",
            border: "1px solid",

            borderColor: "secondaryGray.100",
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        search: (props) => ({
          field: {
            border: "none",
            py: "11px",
            borderRadius: "inherit",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        filled: (props) => ({
          bg: mode('gray.200', 'gray.700')(props),
          _hover: {
            bg: mode('gray.200', 'gray.600')(props),
          },
          _focus: {
            borderColor: mode('blue.500', 'blue.300')(props),
            boxShadow: `0 0 0 1px ${mode('blue.500', 'blue.300')(props)}`,
          },
          _placeholder: {
            color: mode('gray.500', 'whiteAlpha.700')(props),
          },
        }),
      },
      defaultProps: {
        // If you want 'filled' to be the default variant
        variant: 'filled',
      },
    },
  },
};
