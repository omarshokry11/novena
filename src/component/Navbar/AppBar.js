import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function AppBar() {
  return (
    <Box
      sx={{
        bgcolor: "#223a66",
        color: "#FFF",
        padding: "10px 0",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: "flex", alignItems: "center", padding: "5px 0" }}>
              <ContactSupportIcon
                sx={{ marginRight: "8px", fontSize: "17px" }}
              />
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                support@novena.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", padding: "5px 0" }}>
              <LocationOnIcon sx={{  fontSize: "17px" }} />
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                Address Ta-134/A, New York, USA
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                textAlign: "right",
                justifyContent: { sm: "left", md: "right" },
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginRight: "7px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Call Now :
              </Typography>
              <Typography
                sx={{
                  marginRight: "7px",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                823-4565-13456
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AppBar;
