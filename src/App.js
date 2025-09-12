// App.js
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Layout from "./Layout";
import { useEffect } from "react";

function App() {
  // Effect to disable right-click and copy shortcuts
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable copy (Ctrl+C) and select all (Ctrl+A) shortcuts
    const handleKeydown = (event) => {
      if (
        (event.ctrlKey && (event.key === "c" || event.key === "a")) ||
        (event.metaKey && (event.key === "c" || event.key === "a"))
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Layout />
      </div>
    </ChakraProvider>
  );
}

export default App;
