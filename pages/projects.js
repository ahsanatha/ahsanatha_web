import { Icon, StarIcon } from "@chakra-ui/icons";
import { VStack, Text, Box, Badge, Image } from "@chakra-ui/react";
import { FaDiceSix } from "react-icons/fa";
const Card = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Youtube Comment Analyzer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan sodales turpis eleifend feugiat. Aliquam egestas aliquet magna at mollis. Sed sit amet auctor felis, rhoncus consequat mauris. Vivamus eleifend ligula ut libero volutpat, a placerat felis malesuada. Proin nec hendrerit purus. Maecenas vel lectus dolor. Aenean tristique feugiat tincidunt.",
  };

  return (
    <Box maxH='300px' maxW='900px' borderWidth="1px" borderRadius="lg" d='flex'>
      <Image src={property.imageUrl} alt={property.imageAlt} h='100%' maxW='30%'/>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text 
            fontSize='xl'
            fontWeight="bold"
          >
            {property.title}
          </Text>
        </Box>

        <Box
          my="1"
          fontWeight="normal"
          as="h4"
          lineHeight="tight"
          noOfLines={[1,2,3]}
        >
          {property.desc}
        </Box>
      </Box>

      <Box d='flex' >
          {
            
          }
      </Box>
    </Box>
  );
};

export default function Resume() {
  return (
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
    </VStack>
  );
}
