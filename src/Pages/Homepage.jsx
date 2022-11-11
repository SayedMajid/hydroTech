import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import video from "../Assets/hompage-video.webm";
import { Box, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import "../style.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Box>
        <Box
          className="videoWrapper"
          display={{ base: "inline", md: "inline", lg: "inline" }}
        >
          <video className="videoHome" loop autoPlay muted>
            <source src={video} type="video/webm" />
          </video>
        </Box>
        <Box
          position={{ base: "absolute", md: "absolute", lg: "absolute" }}
          display={{ base: "none", md: "none", lg: "block" }}
          top={{ base: "20%", md: "40%", lg: "10%" }}
          left={{ base: "50%", md: "50%", lg: "50%" }}
          transform={{
            base: "translate(-50%, 0)",
            md: "translate(-50%, 0)",
            lg: "translate(-50%, 0)",
          }}
          p="20px"
        >
          <Text
            textAlign="center"
            color={{ base: "white", md: "white", lg: "white" }}
            fontSize={{ base: "sm", md: "md", lg: "lg", xl: "2xl" }}
          >
            Production re-invented
          </Text>
          <Text
            fontSize={{ base: "lg", md: "4xl", lg: "4xl", xl: "6xl" }}
            textAlign="center"
            color={{ lg: "white", md: "white", base: "white" }}
          >
            Agriculture Meets Technology
          </Text>
          <Text
            textAlign="center"
            color={{ base: "white", md: "white", lg: "white" }}
            fontSize={{ base: "sm", md: "md", lg: "lg", xl: "2xl" }}
          >
            Grow residue free
          </Text>
        </Box>
      </Box>
      <Flex flexDirection={{ base: "column", md: "row" }} p="40px 20px">
        <Box
          bgClip="text"
          bgGradient="linear(to-r, green.300, blue.600)"
          width="50%"
          fontSize={{ lg: "6xl", md: "4xl", sm: "xl" }}
          letterSpacing="1.2px"
        >
          Why Hydroponic ?
        </Box>
        <Box
          width={{ base: "100%", md: "80%", lg: "50%" }}
          fontSize={{ lg: "2xl" }}
        >
          Plants grown in soil need a more space to spread out as the roots
          reach out as far as possible into the soil to capture as much water
          and nutrients as possible. Soil holds water and nutrients for only few
          minutes before it is filtered down the water table, or gets soaked up
          by other plants nearby. That makes it nearly impossible to control
          exactly how much water each of your plants receive, or which nutrients
          they benefit from in the process.
        </Box>
      </Flex>
      <SimpleGrid
        spacing={8}
        templateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
        p="60px 20px"
        bg="#eff2f5"
      >
        {gridItems.map((el) => (
          <GridItem bg="rgba(0,0,0,0.3)">
            <Box
              _hover={{ transform: "scale(1.07)" }}
              transition="all 0.25s ease"
            >
              <img src={el.img} alt={el.name} />
            </Box>
            <Box
              p="10px"
              color={"white"}
              letterSpacing="1.2px"
              textAlign="center"
            >
              <Text fontSize={{ lg: "2xl" }}>{el.name}</Text>
              <Text fontSize={{ lg: "lg" }}>{el.subName}</Text>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
      <Box p="40px 20px">
        <Text
          textAlign="center"
          bgClip="text"
          bgGradient={"linear(to-r, green.300, blue.600)"}
          fontSize={{ lg: "6xl", md: "4xl", base: "2xl" }}
          mb="40px"
        >
          Our Successful Projects
        </Text>
        <SimpleGrid
          spacing={{ base: 2, md: 4, lg: 8 }}
          templateColumns={{
            lg: "repeat(4,1fr)",
            md: "repeat(3,1fr)",
            base: "repeat(2,1fr)",
          }}
          overflow="hidden"
        >
          {projects.map((el) => (
            <GridItem
              boxShadow={"sm"}
              transition="0.25s all ease-in-out"
              _hover={{ transform: "scale(1.04)" }}
              overflow="hidden"
            >
              <img src={el.img} alt="" />
              <Text
                p="20px"
                fontSize={{ lg: "2xl", md: "2xl", base: "xl" }}
                textAlign={"center"}
              >
                {el.place}
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

const gridItems = [
  {
    name: "Hydroponic",
    subName: "Products",
    img: "https://nowafarms.in/assets/img/gallery/01.jpg",
  },
  {
    name: "Pesticide",
    subName: "Free",
    img: "https://nowafarms.in/assets/img/gallery/aa1.jpg",
  },
  {
    name: "100% Locally",
    subName: "Grown",
    img: "https://nowafarms.in/assets/img/gallery/aa2.jpg",
  },
  {
    name: "100%",
    subName: "Usable",
    img: "https://nowafarms.in/assets/img/gallery/aa3.jpg",
  },
];

const projects = [
  {
    img: "https://nowafarms.in/assets/img/gallery/gg1.jpg",
    place: "Nashik",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/gg2.jpg",
    place: "Pune",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/gg3.jpg",
    place: "Mumbai",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/08.jpg",
    place: "Nagpur",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/gg4.jpg",
    place: "Thane",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/11.jpg",
    place: "Surat",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/gg5.jpg",
    place: "Amroha",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/14.jpg",
    place: "Delhi",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/gg6.jpg",
    place: "Uttarakhand",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/18.jpg",
    place: "Bangalore",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/gg7.jpg",
    place: "Srinagar",
  },
  {
    img: "https://nowafarms.in/assets/img/gallery/gg8.jpg",
    place: "Goa",
  },
];

export default Homepage;
