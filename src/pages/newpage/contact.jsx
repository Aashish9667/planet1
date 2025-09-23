"use client";

import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box className="flex flex-col min-h-screen">
      {/* Main Content */}
      <Box flex={1} px={{ xs: 3, md: 0 }} py={{ xs: 6, md: 10 }} bg="white">
        <Container>
          {/* Section Title */}
          <Typography
            variant="overline"
            textAlign="center"
            display="block"
            mb={1}
            data-aos="fade-down"
          >
            CONTACT
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            mb={4}
            data-aos="fade-up"
          >
            Get in Touch with Me!
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Left Side: Office Info */}
            <Grid item xs={12} md={4} data-aos="fade-right">
              <Paper
                elevation={0}
                sx={{ p: 3, borderRadius: 2, backgroundColor: "#f5f7fa" }}
              >
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <LocationOnIcon />
                    <Box>
                      <Typography fontWeight={600}>Our Office:</Typography>
                      <Typography variant="body2">New Delhi, India</Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <PhoneIcon />
                    <Box>
                      <Typography fontWeight={600}>Contact Number:</Typography>
                      <Typography variant="body2">+123 431 3131</Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <EmailIcon />
                    <Box>
                      <Typography fontWeight={600}>Email Us:</Typography>
                      <Typography variant="body2">
                        websitename@mail.com
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            {/* Right Side: Contact Form */}
            <Grid item xs={12} md={8} data-aos="fade-left">
              <Paper
                elevation={3}
                sx={{
                  maxWidth: 600,
                  width: "100%",
                  px: { xs: 2, sm: 4, md: 6 },
                  py: { xs: 4, sm: 6, md: 8 },
                  mx: "auto",
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  data-aos="fade-up"
                >
                  Contact Us
                </Typography>

                <Typography
                  variant="body1"
                  align="center"
                  gutterBottom
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  We'd love to hear from you. Please fill out the form below.
                </Typography>

                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay={100}>
                      <TextField fullWidth label="Full Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay={200}>
                      <TextField fullWidth label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay={300}>
                      <TextField fullWidth label="Subject" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay={400}>
                      <TextField fullWidth label="Message" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} data-aos="zoom-in" data-aos-delay={500}>
                      <Button
                        fullWidth
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "white",
                            color: "black",
                            "& .MuiSvgIcon-root": { color: "black" },
                          },
                          "& .MuiSvgIcon-root": { color: "white" },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 3,
          backgroundColor: "#f5f5f5",
        }}
        data-aos="fade-up"
        data-aos-delay={600}
      >
        <Typography variant="body2">© 2025 AK. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
}
