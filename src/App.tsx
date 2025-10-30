import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#646cff",
    },
    background: {
      default: "#242424",
      paper: "#1a1a1a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <main>
          <Hero />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
