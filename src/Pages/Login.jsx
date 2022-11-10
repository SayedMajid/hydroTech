import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/actions";
import { CheckIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function SimpleCard() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [state, setState] = useState("init");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, token } = useSelector((store) => store);
  console.log(isLoggedIn, token);

  const Login = () => {
    const payload = {
      email,
      password,
    };

    dispatch(loginUser(payload));
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Input valid credentials");
      return;
    }

    Login();
    setState("submit");

    setTimeout(() => {
      setState("init");

      setTimeout(() => {
        navigate("/");
      }, 500);
    }, 3000);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              required
              type="email"
              fontSize="md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="eve.holt@reqres.in"
            />

            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              fontSize="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link
                  onClick={() => alert("Password is : cityslicka")}
                  color={"blue.400"}
                >
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bgGradient="linear(to-bl, green.300, blue.300)"
                color={"white"}
                isDisabled={email === "" || password === ""}
                isLoading={state === "submit"}
                _hover={{
                  bg: "linear(to-bl, green.300, blue.300)",
                }}
                onClick={handleLogin}
              >
                {isLoggedIn ? <CheckIcon /> : "Login In"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
