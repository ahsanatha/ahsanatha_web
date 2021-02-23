import { Icon, StarIcon } from "@chakra-ui/icons";
import {
  VStack,
  HStack,
  Text,
  Box,
  Image,
  Button,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import { FaDiceSix, FaExternalLinkAlt } from "react-icons/fa";
const Card = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Youtube Comment Analyzer",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan sodales turpis eleifend feugiat. Aliquam egestas aliquet magna at mollis. Sed sit amet auctor felis, rhoncus consequat mauris. Vivamus eleifend ligula ut libero volutpat, a placerat felis malesuada. Proin nec hendrerit purus. Maecenas vel lectus dolor. Aenean tristique feugiat tincidunt.",
  };

  return (
    <Box
      maxH="400px"
      maxW="90vh"
      borderWidth="1px"
      borderRadius="lg"
      d="flex"
      overflow="hidden"
    >
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        h="100%"
        maxW="30%"
        fallbackSrc="https://via.placeholder.com/300"
      />
      <VStack p="6" spacing={2} align="start">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="xl" fontWeight="bold">
            {property.title}
          </Text>
        </Box>
        <Box
          my="1"
          fontWeight="normal"
          as="h4"
          lineHeight="tight"
          noOfLines={[1, 2, 3]}
        >
          {property.desc}
        </Box>
        <HStack justifyContent="space-between">
          <Text>Techonologies: Python, Javascript, Flask</Text>
          <ButtonGroup>
            <Button rightIcon={<FaExternalLinkAlt />}>Code</Button>
            <Button rightIcon={<FaExternalLinkAlt />}>View</Button>
          </ButtonGroup>
        </HStack>
      </VStack>
    </Box>
  );
};

export default function Resume() {
  return (
    <Stack w="full" alignItems="center" bg="white" overflow='hidden'>
      <VStack spacing={5}>
        <Box d="flex" alignItems="center">
          <Icon as={FaDiceSix} mx="1" />
          <Text fontSize="xl" fontWeight="bold" color="grey.900">
            Projects
          </Text>
        </Box>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </VStack>
    </Stack>
  );
}
