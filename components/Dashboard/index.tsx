/** @format */

import React from "react";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import girlImage from "../../public/assets/girl (1).png";
import manImage from "../../public/assets/man.png";
import Image from "next/image";

function Dashboard() {
  return (
    <Box className="dashboard-container">
      <Navbar />
      <Box className="outerBox">
        <Box className="main-content">
          <Box className="intro-section">
            <Typography className="intro-title"> Free Open Source</Typography>
            <Typography variant="h3" className="intro-subtitle">
              Reservation and
            </Typography>
            <Typography variant="h3" className="intro-subtitle">
              Booking System
            </Typography>
            <Typography variant="h3" className="intro-subtitle">
              For Hotels
            </Typography>
            <Typography variant="body1" className="intro-description">
              Take your Hotel Bussiness Online with the help Of us.
            </Typography>
            <Box className="button-group">
              <Button
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowRightIcon />}
                className="demo-button"
              >
                {" "}
                View Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="download-button"
              >
                Download
              </Button>
            </Box>
          </Box>

          <Box className="image-section">
            <Image
              src={girlImage}
              alt="girl"
              style={{
                maxHeight: "600px",
                width: "950px",
                marginLeft: "15rem",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box className="featured-section">
            <Stack display={"flex"} className="featured-content">
              <Typography variant="body1" className="featured-title">
                We Got Featured !
              </Typography>
              <Typography variant="body1" className="featured-description">
                We got mentioned and listed on various platform . You can find
                us here
              </Typography>
            </Stack>
            <Box className="platforms">
              <Box className="platform">𝐂𝐚𝐩𝐭𝐞𝐫𝐫𝐚</Box>
              <Box className="platform">𝖦𝗈𝗈𝖽𝖥𝗂𝗋𝗆𝗌</Box>
              <Box className="platform">𝓢𝓸𝓯𝓽𝔀𝓪𝓻𝓮 𝓢𝓾𝓰𝓰𝓮𝓼𝓽</Box>
              <Box className="platform">𝒕𝒆𝒄𝒉𝑱𝒐𝒄𝒌𝒆𝒚</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Box className="download-stats">
          <Box
            // sx={{
            //   display: "flex",
            //   flexDirection: "column",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            className="stat"
          >
            <span
              // style={{
              //   background: "#E18B6B",
              //   position: "relative",
              //   top: "70px",
              //   width: "74px",
              //   height: "74px",
              //   borderRadius: "55px",
              //   zIndex: "-1",
              // }}
              className="stat-icon"
            ></span>
            <Typography
              variant="h2"
              // sx={{ fontWeight: "bold" }}
              className="stat-label"
            >
              25,000+
            </Typography>
            <Typography variant="h6">Downloads</Typography>
          </Box>
          <Box
            // sx={{
            //   display: "flex",
            //   flexDirection: "column",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            className="stat"
          >
            <span
              style={{ background: "#FEDC56" }}
              // style={{
              //   background: "#FEDC56",
              //   position: "relative",
              //   top: "70px",
              //   width: "74px",
              //   height: "74px",
              //   borderRadius: "55px",
              //   zIndex: "-1",
              // }}
              className="stat-icon"
            ></span>
            <Typography
              variant="h2"
              // sx={{ fontWeight: "bold" }}
              className="stat-label"
            >
              120+{" "}
            </Typography>
            <Typography variant="h6">Countries</Typography>
          </Box>
          <Box
            // sx={{
            //   display: "flex",
            //   flexDirection: "column",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            className="stat"
          >
            <span
              // style={{
              //   background: "cyan",
              //   position: "relative",
              //   top: "70px",
              //   width: "74px",
              //   height: "74px",
              //   borderRadius: "55px",
              //   zIndex: "-1",
              // }}
              style={{ background: "cyan" }}
              className="stat-icon"
            ></span>
            <Typography
              variant="h2"
              // sx={{ fontWeight: "bold" }}
              className="stat-label"
            >
              10,000+{" "}
            </Typography>
            <Typography variant="h6">Users</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box className="container">
          <Box className="channelManagerBox">
            <Typography variant="h4" className="channelManagerTitle">
              Channel Manager
            </Typography>
            <Typography className="channelManagerText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              voluptatibus quam
            </Typography>
            <Typography className="channelManagerText">
              nisi eaque totam tenetur odio repellat, nesciunt,
            </Typography>
            <Button endIcon={<ArrowForwardIcon />} className="readMoreButton">
              Read more
            </Button>
          </Box>
          <Box className="channelCardsBox">
            <Box className="cardBox">
              <Card className="card">
                <Box className="iconBox">
                  <HubOutlinedIcon />
                </Box>
                <Typography variant="body1" className="cardTitle">
                  Multi Channel Integration
                </Typography>
                <Typography className="cardText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quasi deleniti delectus deserunt amet ratione, necessitatibus,
                  beatae optio soluta, possimus repellendus harum! Maxime
                  repellat
                </Typography>
              </Card>
              <Card className="card">
                <Box className="iconBox">
                  <HubOutlinedIcon />
                </Box>
                <Typography variant="body1" className="cardTitle">
                  Manage Channel Bookings
                </Typography>
                <Typography className="cardText">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum odio adipisci necessitatibus velit inventore
                  recusandae? Architecto possimus dolores maxime voluptatum
                  inventore sunt pariatur dignissimos unde.
                </Typography>
              </Card>
            </Box>
            <Box className="cardBox" sx={{ marginTop: "10px" }}>
              <Card className="card">
                <Box className="iconBox">
                  <LoyaltyOutlinedIcon />
                </Box>
                <Typography variant="body1" className="cardTitle">
                  Manage Prices & Inventory
                </Typography>
                <Typography className="cardText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  nobis iusto, velit soluta, sequi aspernatur quas quae
                  reprehenderit hic ea officia sed voluptates quasi, veniam
                  laudantium odit distinctio laboriosam unde.
                </Typography>
              </Card>
              <Card className="card">
                <Box className="iconBox">
                  <ApartmentOutlinedIcon />
                </Box>
                <Typography variant="body1" className="cardTitle">
                  Manage Multiple Hotels
                </Typography>
                <Typography className="cardText">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Obcaecati, sapiente ab? Explicabo quam odit officia soluta,
                  porro dolore hic error animi dicta ex at voluptate corrupti
                  culpa, pariatur architecto aliquid.
                </Typography>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
          paddingBottom: "40px",
        }}
      >
        <Box className="testimonialscontainer">
          <Box className="testimonialsBox">
            <Typography variant="h4" className="testimonialsTitle">
              Testimonials
            </Typography>
            <Typography className="testimonialsText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              voluptatibus quam
            </Typography>
            <Typography className="testimonialsText">
              nisi eaque totam tenetur odio repellat, nesciunt,
            </Typography>
            <Button endIcon={<ArrowForwardIcon />} className="readMoreButton">
              Read more
            </Button>
          </Box>
          <Box className="testimonialsCardsBox">
            <Card className="testimonialCard">
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati, sapiente ab? Explicabo quam odit officia soluta,
              </Typography>
              <CardActions className="cardActions">
                <Typography variant="body1" className="testimonialName">
                  John Doe
                </Typography>
                <Typography variant="body2">Marketing head</Typography>
              </CardActions>
              <Avatar className="avatar1">
                <Image
                  src={manImage}
                  alt="man"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Avatar>
            </Card>
            <Card className="testimonialCard">
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati, sapiente ab? Explicabo quam odit officia soluta,
              </Typography>
              <CardActions className="cardActions">
                <Typography variant="body1" className="testimonialName">
                  Jack Ryan
                </Typography>
                <Typography variant="body2">Web Developer</Typography>
              </CardActions>
              <Avatar className="avatar2">
                <Image
                  src={manImage}
                  alt="man"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Avatar>
            </Card>
            <Card className="testimonialCard">
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati, sapiente ab? Explicabo quam odit officia soluta,
              </Typography>
              <CardActions className="cardActions">
                <Typography variant="body1" className="testimonialName">
                  Jenna Thom
                </Typography>
                <Typography variant="body2">Business head</Typography>
              </CardActions>
              <Avatar className="avatar3">
                <Image
                  src={manImage}
                  alt="man"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Avatar>
            </Card>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "absolute", top: "325%" }}>.</Box>
    </Box>
  );
}

export default Dashboard;
