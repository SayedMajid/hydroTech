import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import { CheckCircleIcon } from "@chakra-ui/icons";
import "../style.css";

const Services = () => {
  return (
    <>
      <Box pos={"sticky"} top="0" zIndex={2} >
        <Navbar />
      </Box>
      <Box pos='relative' >
        <Box h={{ base: "200px", md: "400px", lg: "450px" }} opacity='0.8' >
          <img
            className="servicesBg"
            src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGh5ZHJvcG9uaWMlMjBmYXJtfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="farmImage"
          />
        </Box>
        <Text
          pos="absolute"
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          textAlign="center"
          fontWeight="500"
          letterSpacing={"1.2px"}
          color='white'
          fontSize={{ lg: "4xl", md: "2xl", base: "xl" }}
        >
          Our Services
        </Text>
      </Box>
      <Flex gap={10} flexDir={"column"} p="20px">
        {servicesData.map((el, i) => (
          <Flex
            flexDir={"column"}
            gap="20px"
            m="auto"
            boxShadow="md"
            borderRadius="10px"
            p="40px"
            w={{ lg: "1000px", md: "700px", base: "350px" }}
          >
            <Text
              textAlign={"center"}
              bgGradient="linear(to-r, green.300, blue.600)"
              fontSize={{ lg: "3xl", md: "2xl", base: "xl" }}
              bgClip={"text"}
            >
              {el.title}
            </Text>
            <Flex justify={"center"}>
              <List width={"fit-content"} spacing={3}>
                {el.children.map((list) => (
                  <ListItem fontSize={{ lg: "lg", md: "md", base: "sm" }}>
                    <ListIcon as={CheckCircleIcon} color="green.300" />
                    {list}
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Footer />
    </>
  );
};

const servicesData = [
  {
    title: "Hydroponic Farm Infrastructure Providers",
    children: [
      "NFT manufacturing, installation and commissioning",
      "Cocopith growing - Grow bags of fruits, Troughs for leafy greens",
      "Vertical farming using aeroponics",
      "Installation and commissioning of Aquaponics farms",
      "Supply and installation of DUTCH buckets",
      "Setup a DWC farm for leafy greens",
      "Supply of technical grade hydroponics nutrients and residual free pesticides",
      "Polyhouse designing and installation",
      "Setting up indoor farms using High quality artificial growing lights",
    ],
  },
  {
    title: "Operations and Management",
    children: [
      "Maintenance and operation of hydroponic farms",
      "Providing trained resources to manage the day operations of the hydroponic / aquaponics farm",
    ],
  },
  {
    title: "Consultations",
    children: [
      "Project consultations",
      "Argonomy and horticulture consultation",
      "Market connect consultation",
    ],
  },
];

export default Services;
