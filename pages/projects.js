import { Icon, StarIcon } from "@chakra-ui/icons";
import {
  VStack,
  HStack,
  Text,
  Box,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaDiceSix, FaExternalLinkAlt,FaPython } from "react-icons/fa";
const Card = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Youtube Comment Analyzer",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan sodales turpis eleifend feugiat. Aliquam egestas aliquet magna at mollis. Sed sit amet auctor felis, rhoncus consequat mauris. Vivamus eleifend ligula ut libero volutpat, a placerat felis malesuada. Proin nec hendrerit purus. Maecenas vel lectus dolor. Aenean tristique feugiat tincidunt.",
  };

  const color = useColorModeValue("gray.200", "gray.700");
  return (
    <Box
      boxShadow="lg"
      overflow="hidden"
      borderRadius="lg"
      borderColor={color}
      borderWidth="1px"
    >
      <Stack spacing={0} direction={{ base: "column", md: "row" }}>
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          height={200}
          width={250}
          layout="intrinsic"
        />
        <VStack p={3} maxW={{ base: "90vw", md: "30vw" }} alignItems="start">
          <Text fontSize="lg" fontWeight="bold">
            Judul Project
          </Text>
          <Text noOfLines={{ base: "3", md: "4" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan sodales turpis eleifend feugiat. Aliquam egestas aliquet
            magna at mollis. Sed sit amet auctor felis, rhoncus consequat
            mauris.
          </Text>
          <HStack w="full" justifyContent="space-between">
            <HStack alignItems="center" spacing={2}>
              <HStack>
                <Icon as={FaPython} w={6} h={6} alt="Python"></Icon>
                <Icon as={FaPython} w={6} h={6} alt="Python"></Icon>
                <Icon as={FaPython} w={6} h={6} alt="Python"></Icon>
              </HStack>
            </HStack>
            <Button size="md">Details</Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default function Resume() {
  return (
    <Stack w="full" alignItems="center" overflow="hidden">
      <VStack spacing={5}>
        <HStack alignItems="center">
          <Icon as={FaDiceSix} mx="1" />
          <Text fontSize="xl" fontWeight="bold" color="grey.900">
            Projects
          </Text>
        </HStack>
        <Card />
        <Card />
        <Card />
      </VStack>
    </Stack>
  );
}
