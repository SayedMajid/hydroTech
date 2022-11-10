import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import seed from "../Assets/seedling.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box position="sticky" top={0}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          align={"center"}
          flex={{ base: 1, md: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Box
            height={{ lg: "32px", md: "24px", base: "20px" }}
            width={{ lg: "32px", md: "24px", base: "20px" }}
            mr="10px"
          >
            <Seeding />
          </Box>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            color={useColorModeValue("gray.800", "white")}
            fontSize={"xl"}
            fontWeight={"700"}
            letterSpacing={"1.8px"}
            bgGradient="linear(to-bl, green.300, blue.300)"
            bgClip="text"
          >
            HYDROTECH
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={"4%"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 1 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "inline-flex", md: "inline-flex" }}
            fontSize={"md"}
            size={{ base: "sm", md: "md", lg: "md" }}
            fontWeight={600}
            color={"white"}
            bgGradient="linear(to-br, green.300, blue.300)"
            onClick={() => navigate("/login")}
            _hover={{
              bg: "linear(to-br, green.300, blue.300)",
            }}
          >
            Log In
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const Seeding = () => {
  return (
    <img
      src="https://img.icons8.com/cotton/2x/hand-planting-1.png"
      alt="seedlingFontAwesome"
      height="100%"
      width="100%"
    />
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "black");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={{ md: 3 }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} width={"max-content"}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={{ lg: "md", md: "14px" }}
            letterSpacing="1px"
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/aboutus",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Fresh Products",
    href: "/products",
  },
  {
    label: "Contact Us",
    href: "/contactus",
  },
];
