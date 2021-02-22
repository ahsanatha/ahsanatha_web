import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  Box,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Button,
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
  const { lagiOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  const btnRef = useRef();
  return (
    <>
      <Box
        w="full"
        minh="8vh"
        position={{ md: "inherit", base: "fixed" }}
        top={0}
        zIndex={1}
        px={8}
        boxShadow="lg"
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
              onclick={onOpen}
              icon={Icons}
            ></IconButton>
            <IconButton
              as={Button}
              d={{ base: "flex", sm: "none" }}
              variant="transparent"
              size="sm"
              onclick={onOpen}
              ref={btnRef}
              icon={<FaBars />}
            />
          </HStack>
        </HStack>
      </Box>
      <Drawer
        isOpen={lagiOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay zIndex={999}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menus</DrawerHeader>
            <DrawerBody>
              <VStack>
                {menus.map((menu, idx) => {
                  return (
                    <Link href={menu.link} key={idx}>
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
    </>
  );
};
export default Navbar;
