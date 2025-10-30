import { Box, Container, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, rgba(100, 108, 255, 0.1) 0%, rgba(26, 26, 26, 0.1) 100%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontWeight: 900,
              mb: 4,
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
              background: "linear-gradient(45deg, #646cff 30%, #82b1ff 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
            }}
          >
            Hi, I'm{" "}
            <Box component="span" sx={{ display: "block" }}>
              Ashish Wilson
            </Box>
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 6,
              lineHeight: 1.8,
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
              maxWidth: "600px",
              mx: "auto",
              px: 2,
            }}
          >
            Full Stack Developer passionate about creating impactful web
            applications
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            "& .MuiButton-root": {
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1.1rem",
              textTransform: "none",
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href="#projects"
            sx={{
              background: "linear-gradient(45deg, #646cff 30%, #82b1ff 90%)",
              boxShadow: "0 3px 5px 2px rgba(100, 108, 255, .3)",
            }}
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="#contact"
            sx={{
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
