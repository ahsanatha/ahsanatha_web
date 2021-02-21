import { HStack, VStack, Text, Box } from "@chakra-ui/react";

export default function Resume() {
  return (
    <VStack>
    <Text
      fontSize='xl'
    >
      Resume
    </Text>
    <Box>
      <HStack>
        <Text>Experience</Text>
      </HStack>
    </Box>
    </VStack>
  )
}