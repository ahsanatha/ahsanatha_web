import { Box, color, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  const menus = [
    { text: "ABOUT ME", link: "/" },
    { text: "PROJECTS", link: "/projects" },
    { text: "BLOG", link: "/blog" },
    { text: "CONTACT", link: "/" },
  ];
  return (
    <Box w="full" minh="8vh" bg="white">
      <HStack
        justifyContent="space-between"
        h="full"
        alignItems="center"
        px="10"
      >
        <Link href="/" passHref>
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
        <HStack>
          {menus.map((menu) => {
            return (
              <Link href={menu.link}>
                <Text
                  fontSize="xs"
                  fontWeight="medium"
                  as="button"
                  p={5}
                  _hover={{
                    bgGradient: "linear(to-r,blue.500,#1ABCD9)",
                    boxShadow: "lg",
                    color: "white",
                  }}
                >
                  {menu.text}
                </Text>
              </Link>
            );
          })}
        </HStack>
      </HStack>
    </Box>
  );
};
export default Navbar;
