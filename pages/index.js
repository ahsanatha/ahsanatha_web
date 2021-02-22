import {
  Stack,
  HStack,
  VStack,
  Box,
  Center,
  Image,
  Divider,
  Text,
  Icon,
  Link,
  Button,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { FaLinkedin, FaMedium, FaGithub, FaInstagram } from "react-icons/fa";

const Card = () => {
  const socials = [
    { icon: FaLinkedin, link: "https://linkedin.com/in/ahsanatha" },
    { icon: FaMedium, link: "https://ahsanatha.medium.com/" },
    { icon: FaGithub, link: "https://github.com/ahsanatha" },
    // { icon: FaInstagram, link: "https://linkedin.com/in/ahsanatha" },
  ];
  return (
    <Box boxShadow="xl">
      <VStack w="250px" bg="blue.100">
        <VStack h="90%" p={10} spacing={5}>
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="/avatar.jpg"
              alt="Segun Adebayo"
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Box>
          <Text fontSize="" fontWeight="bold" >
            Ahsan Athallah
          </Text>
        </VStack>
        <Stack
          w="100%"
          h="10%"
          bg="white"
          align="center"
          justify="center"
          py={2}
        >
          <Center>
            <HStack flex={1} spacing={3} align="center" justify="center">
              {socials.map((social,idx) => {
                return (
                  <Link href={social.link} mx='1' key={idx}>
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
    <VStack spacing={3} w="400px" align="left" p={5}>
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
        at mollis. Sed sit amet auctor felis, rhoncus consequat mauris. Vivamus
        eleifend ligula ut libero volutpat, a placerat felis malesuada. 
      </Text>
    </VStack>
  );
};

export default function Home() {
  return (
    <VStack spacing={0} w="full" h='100vh' justify="center" align='center'>
      <Wrap>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Message />
        </WrapItem>
      </Wrap>
    </VStack>
    
  );
}
