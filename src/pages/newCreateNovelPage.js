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

function newCreateNovel() {
  return (
    <div>
      <Box p={20} color="#545454">
        <Text fontSize="40px" p={4}>
          Create Book
        </Text>
        <Flex>
          <Box p={4}>
            <Center bg="tomato" w="200px" h="300px">
              <AddIcon w={6} h={6} />
            </Center>
          </Box>
          <Box p={4} w="70%">
            <VStack spacing={30} align="stretch">
              <Box w="100%">
                <Text fontSize="20px">ชื่อเรื่อง</Text>
                <Input placeholder="ใส่ชื่อเรื่อง" fontSize="20px" w="100%" h="50px" />
              </Box>

              <HStack spacing="24px">
                <Box>
                  <Text fontSize="20px">หมวดหลัก</Text>
                  <Select placeholder="เลือกหมวดหลัก" size="lg">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
                <Box>
                  <Text fontSize="20px">เซ็ตหนังสือ</Text>
                  <Select placeholder="เซ็ตหนังสือ" size="lg">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </HStack>

              <Box w="100%">
                <Text fontSize="20px">คำโปรย</Text>
                <Input fontSize="20px" w="100%" h="50px" />
              </Box>
            </VStack>
          </Box>
        </Flex>
        <VStack spacing={1} align="stretch">
          <Box p={4} w="100%">
            <Text fontSize="20px">เรื่องย่อ</Text>
            <Textarea placeholder="เรื่องย่อไม่ต้องน้อยกว่า 1 ตัวอักษร" />
          </Box>
          <Box p={4} w="100%">
            <Text fontSize="20px">แท็ก</Text>
            <Input fontSize="20px" w="100%" h="50px" />
          </Box>
        </VStack>
        <Flex p={4}>
          <Button leftIcon={<DeleteIcon />} bg="#ff7366" color="white" variant="solid">
            Delete Book
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

export default newCreateNovel;
