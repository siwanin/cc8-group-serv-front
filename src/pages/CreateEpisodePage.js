import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Input,
  VStack,
  Select,
  Button,
  Stack,
  HStack,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
function createEpisodePage() {
  return (
    <div>
      <Box p={20} color="#545454">
        <Text fontSize="40px" p={4}>
          Create Episode
        </Text>
        <Flex>
          <Box p={4}>
            <Center bg="tomato" w="200px" h="300px">
              <AddIcon w={6} h={6} />
            </Center>
          </Box>
          <Box p={4} w="100%">
            <VStack spacing={30} align="stretch">
              <Box w="100%">
                <Text fontSize="20px">Episode Title</Text>
                <Input placeholder="ใส่ชื่อตอน" fontSize="20px" w="100%" h="50px" />
              </Box>

              <HStack spacing="24px">
                <Box>
                  <Text fontSize="20px">Novel Type</Text>
                  <Select placeholder="Novel Type" size="lg">
                    <option value="Adventure">Adventure</option>
                    <option value="Art">Art</option>
                    <option value="Children’s">Humor</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Development">Development</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Families & Relationships">Families & Relationships</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Guide / How-to">Guide / How-to</option>
                    <option value="Health">Health</option>
                    <option value="History">History</option>
                    <option value="Historical fiction">Historical fiction</option>
                    <option value="Horror">Horror</option>
                    <option value="Humor">Humor</option>
                    <option value="Memoir">Memoir</option>
                    <option value="Motivational">Motivational</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Paranormal">Paranormal</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Self-help / Personal">Self-help / Personal</option>
                    <option value="Travel">Travel</option>
                  </Select>
                </Box>
              </HStack>

              <Box w="100%">
                <Text fontSize="20px">Description</Text>
                <Input fontSize="20px" w="100%" h="50px" />
              </Box>
            </VStack>
          </Box>
        </Flex>
        <VStack spacing={1} align="stretch">
          <Box p={4} w="100%">
            <Text fontSize="20px">Story</Text>
            <Textarea placeholder="เรื่องย่อไม่ต้องน้อยกว่า 1 ตัวอักษร" />
          </Box>
          {/* <Box p={4} w="100%">
            <Text fontSize="20px">แท็ก</Text>
            <Input fontSize="20px" w="100%" h="50px" />
          </Box> */}
        </VStack>
        <Flex p={4}>
          <Button leftIcon={<DeleteIcon />} bg="#ff7366" color="white" variant="solid">
            Delete Episode
          </Button>
          <Spacer />
          <HStack spacing={5}>
            <Button colorScheme="#adadad" color="#adadad" variant="outline">
              Cancel
            </Button>
            <Button colorScheme=" teal" bg="#FFB900" variant="solid">
              Save
            </Button>
          </HStack>
        </Flex>
      </Box>
    </div>
  );
}

export default createEpisodePage;
