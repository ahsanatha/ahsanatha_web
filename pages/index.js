import {
  Stack,
  HStack,
  VStack,
  Box,
  Center,
  Image,
  Text,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaLinkedin, FaMedium, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "../components/Link";

const Card = () => {
  const socials = [
    { icon: FaLinkedin, link: "https://linkedin.com/in/ahsanatha" },
    { icon: FaGithub, link: "https://github.com/ahsanatha" },
    { icon: FaMedium, link: "https://ahsanatha.medium.com/" },
  ];
  const bgSocialColor = useColorModeValue("white", "#1A202C");
  const bgMainCardColor = useColorModeValue("blue.100", "blue.600");
  return (
    <Box boxShadow="lg">
      <VStack w="250px" bg={bgMainCardColor}>
        <VStack h="90%" px={10} py={5} spacing={5}>
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="/avatar-face.jpg"
              alt="Muhammad Ahsan Athallah"
              fallbackSrc="https://via.placeholder.com/150"
              _hover={{
                src: "/avatar.jpg",
              }}
            />
          </Box>
          <Text fontSize="lg" fontWeight="medium" letterSpacing="wide">
            Ahsan Athallah
          </Text>
        </VStack>
        <Stack
          w="100%"
          h="10%"
          bg={bgSocialColor}
          align="center"
          justify="center"
          py={2}
        >
          <Center>
            <HStack flex={1} spacing={3} align="center" justify="center">
              {socials.map((social, idx) => {
                return (
                  <Link href={social.link} mx="1" key={idx} isExternal={1}>
                    <Icon as={social.icon} w="6" h="6" />
                  </Link>
                );
              })}
            </HStack>
          </Center>
        </Stack>
      </VStack>
    </Box>
  );
};

const Message = () => {
  const sapaTranslate = ["Hai", "Hi", "Hola", "Bonjour", "Nǐn hǎo", "안녕"];
  const [idxSapa, setSapa] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSapa((idxSapa + 1) % sapaTranslate.length);
    }, 2000);
  }, [idxSapa]);
  return (
    <VStack
      spacing={3}
      w={{ base: "90vw", md: "400px" }}
      align="left"
      py={2}
      px={3}
    >
      <Text
        fontSize="5xl"
        fontWeight="extrabold"
        bgGradient="linear(to-l,blue.800,#1ABCD9)"
        bgClip="text"
      >
        {sapaTranslate[idxSapa]}.
      </Text>
      <HStack>
        <Link href='/'>
        <Box
          as="button"
          px={4}
          py={1.5}
          color="white"
          fontWeight="semibold"
          fontSize="sm"
          borderRadius="md"
          bgGradient="linear(to-l,blue.500,#1ABCD9)"
          _hover={{
            bgGradient: "linear(to-r,blue.500,#1ABCD9)",
          }}
        >
          RESUME
        </Box>
        </Link>
        <Link href='/projects'>
        <Button colorScheme="blue" variant="outline" size="sm">
          PROJECTS
        </Button>
        </Link>
      </HStack>
      <Text fontWeight="light">
        A computer science fresh graduate who loves analyzing, tinkering, and
        solving problems. Machine Learning and Software Engineering Enthusiast.
      </Text>
    </VStack>
  );
};

export default function Home() {
  return (
    <Stack
      spacing={0}
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="center"
      h={{ base: "100vh", md: "75vh" }}
    >
      <Card />
      <Message />
    </Stack>
  );
}
