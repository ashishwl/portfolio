import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(26, 26, 26, 0.8)",
      }}
    >
      <Container>
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #646cff 30%, #82b1ff 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ashish Wilson
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                "&:hover": {
                  color: "#646cff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                "&:hover": {
                  color: "#646cff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/projects"
              sx={{
                "&:hover": {
                  color: "#646cff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                "&:hover": {
                  color: "#646cff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
