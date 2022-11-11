import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import construction from "../Assets/construction.gif"

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <Box w="fit-content" m="10% auto">
        <img
          src={construction}
          alt=""
        />
      </Box>
    </>
  );
};

export default Aboutus;
