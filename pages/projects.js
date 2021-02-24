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
import Link from "../components/Link";
import { FaDiceSix, FaExternalLinkAlt, FaPython } from "react-icons/fa";
import proj from "../data/project";

const Card = (props) => {
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
          src={props.imageUrl}
          alt={props.imageAlt}
          height={200}
          width={300}
          layout="intrinsic"
        />
        <VStack p={5} maxW={{ base: "90vw", md: "30vw" }} alignItems="start">
          <Text fontSize="lg" fontWeight="bold">
            {props.title}
          </Text>
          <Text noOfLines={{ base: "3", md: "4" }}>{props.desc}</Text>
          <HStack w="full" justifyContent="space-between">
            <HStack alignItems="center" spacing={2}>
              <HStack>
                {props.tech.map((item, idx) => {
                  return <Icon as={item.icon} w={6} h={6} key={idx} />;
                })}
              </HStack>
            </HStack>
            <Link href={props.link}>
              <Button size="sm" colorScheme="telegram">
                Details
              </Button>
            </Link>
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
        {proj.map((item, idx) => {
          return <Card {...item} key={idx}/>;
        })}
      </VStack>
    </Stack>
  );
}
