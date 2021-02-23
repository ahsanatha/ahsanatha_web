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
import { FaLinkedin, FaMedium, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "../components/Link";

const Card = () => {
  const socials = [
    { icon: FaLinkedin, link: "https://linkedin.com/in/ahsanatha" },
    { icon: FaMedium, link: "https://ahsanatha.medium.com/" },
    { icon: FaGithub, link: "https://github.com/ahsanatha" },
    { icon: FaInstagram, link: "https://linkedin.com/in/ahsanatha" },
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
              src="/avatar.jpg"
              alt="Segun Adebayo"
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Box>
          <Text fontSize="" fontWeight="bold">
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
                  <Link href={social.link} mx="1" key={idx}>
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
        Hai.
      </Text>
      <Text fontSize="lg">Here's who I am & what i do</Text>
      <HStack>
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
        <Button colorScheme="blue" variant="outline" size="sm">
          PROJECTS
        </Button>
      </HStack>
      <Text fontWeight="light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        accumsan sodales turpis eleifend feugiat. Aliquam egestas aliquet magna
        at mollis. Sed sit amet auctor felis, rhoncus consequat mauris.
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
        h="100vh"
        pt="80px"
      >
        <Card />
        <Message />
      </Stack>
  );
}
