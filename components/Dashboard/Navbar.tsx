/** @format */

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ background: "#00296b", boxShadow: "none" }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          className="toolbars"
        >
          <Box>
            <Typography variant="h4">𝒴𝑜𝓊𝓇 𝓛𝑜𝑔𝑜</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "60vw",
            }}
          >
            {/* Menu Icon */}
            <IconButton
              sx={{ color: "white", display: { sm: "none" } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button sx={{ color: "white" }}>Home</Button>
              <Button sx={{ color: "white" }}>Forum</Button>
              <Button
                sx={{ color: "white" }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Services
              </Button>
              <Button
                sx={{ color: "white" }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Resources
              </Button>
              <Button sx={{ color: "white" }}>Customers</Button>
              <Button sx={{ color: "white" }}>Contacts</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "64px",
          }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Button sx={{ color: "black", marginBottom: "8px" }}>Home</Button>
          <Button sx={{ color: "black", marginBottom: "8px" }}>Forum</Button>
          <Button sx={{ color: "black", marginBottom: "8px" }}>Services</Button>
          <Button sx={{ color: "black", marginBottom: "8px" }}>
            Resources
          </Button>
          <Button sx={{ color: "black", marginBottom: "8px" }}>
            Customers
          </Button>
          <Button sx={{ color: "black", marginBottom: "8px" }}>Contacts</Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
