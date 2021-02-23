import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Box,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "./Link";
import { useRouter } from "next/router";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import React, { useRef } from "react";

const Navbar = () => {
  const menus = [
    { text: "ABOUT ME", link: "/" },
    { text: "PROJECTS", link: "/projects" },
    { text: "BLOG", link: "/blog" },
    { text: "CONTACT", link: "/" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  const bgColor = useColorModeValue("white", "gray.800");
  const btnRef = useRef();
  return (
    <Box
      w="full"
      minH="50px"
      px={8}
      boxShadow="lg"
      position={{base:"fixed", md:"absolute"}}
      bg={bgColor}
    >
      <HStack justifyContent="space-between" h="full" alignItems="center">
        <Link href="/" py={{ base: 4, md: 0 }}>
          <Text
            as="button"
            fontSize="lg"
            fontWeight="bold"
            fontStyle="italic"
            bgGradient="linear(to-l,blue.500,#1ABCD9)"
            bgClip="text"
            _hover={{
              bgGradient: "linear(to-r,blue.500,#1ABCD9)",
              bgClip: "text",
              borderRadius: "lg",
            }}
          >
            ahsanatha
          </Text>
        </Link>
        <HStack d={{ base: "none", md: "flex" }}>
          {menus.map((menu, idx) => {
            return (
              <Link
                href={menu.link}
                key={idx}
                h="100%"
                px={5}
                py={4}
                _hover={{
                  bgGradient: "linear(to-r,blue.500,#1ABCD9)",
                  boxShadow: "lg",
                  color: "white",
                }}
              >
                <Text fontSize="xs" fontWeight="medium" as="button">
                  {menu.text}
                </Text>
              </Link>
            );
          })}
        </HStack>
        <HStack>
          <IconButton
            onClick={toggleColorMode}
            variant="transparent"
            size="sm"
            icon={Icons}
          ></IconButton>
          <IconButton
            d={{ base: "flex", md: "none" }}
            variant="transparent"
            size="sm"
            onClick={onOpen}
            icon={<FaBars />}
          />
          />
        </HStack>
      </HStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menus</DrawerHeader>
            <DrawerBody>
              <VStack>
                {menus.map((menu, idx) => {
                  return (
                    <Link href={menu.link} key={idx} onClick={onClose}>
                      <Text fontSize="xs" fontWeight="medium" as="button">
                        {menu.text}
                      </Text>
                    </Link>
                  );
                })}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};
export default Navbar;
