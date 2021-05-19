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
  Avatar,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function ProfilePage() {
  return (
    <div>
      <Box p={20}>
        <Center bg="tomato" w="100%" h="200" mb={5}>
          <AddIcon w={6} h={6} />
        </Center>
        <Flex>
          <VStack spacing={1} align="stretch" w="70%" mb={5}>
            <Flex mb={0}>
              <Avatar bg="teal.500" />
              <Center color="#545454">
                <Text fontSize="20px" ml={4}>
                  Username
                </Text>
              </Center>
            </Flex>
            <HStack spacing="5px" color="#545454">
              <Text fontSize="10px">0เรื่อง</Text>
              <Text fontSize="20px">|</Text>
              <Text fontSize="10px">0ติดตาม</Text>
            </HStack>
          </VStack>
          <Spacer />
          <VStack spacing={0} align="stretch" w="30%" color="#545454" mb={5}>
            "
            <Button colorScheme="gray" variant="solid" borderRadius="5px">
              กระเป๋า
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="5px">
              ผลงานของฉัน
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="5px">
              ชั้นหนังสือ
            </Button>
          </VStack>
        </Flex>

        <Box mb={4} color="#545454">
          <Text fontSize="20px">ผลงานของฉัน</Text>
          <Box w="100%" h="70" bg="#FFFAEB">
            <Text fontSize="10px" p={2}>
              รายรับคงเหลือ(บาท)
            </Text>
            <Text fontSize="15px" color="orange" p={2}>
              0
            </Text>
          </Box>
        </Box>
        <Flex color="#545454">
          <Button colorScheme="gray" variant="ghost">
            นิยายรายตอน
          </Button>
          <Button colorScheme="gray" variant="ghost">
            อีบุ๊กนิยาย
          </Button>
          <Button colorScheme="gray" variant="ghost">
            การ์ตูน
          </Button>
          <Button colorScheme="gray" variant="ghost">
            อีบุ๊กนิยายทั่วไป
          </Button>
          <Button colorScheme="gray" variant="ghost">
            เซ็ตหนังสือ
          </Button>
        </Flex>
        <hr></hr>
        <Box mt={4}>
          <HStack spacing="15px" color="#545454">
            <Button colorScheme="gray" variant="solid" borderRadius="15px">
              ทั้งหมด
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="15px">
              จบแล้ว
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="15px">
              แบบร่าง
            </Button>
          </HStack>
        </Box>
        <Box mt={4} color="#545454">
          <hr></hr>
          <Flex m={4}>
            <Box w="8%" h="70" bg="#FFFAEB"></Box>
            <Text fontSize="10px" p={5}>
              ชื่อรายการ
            </Text>
            <Spacer />
            <Box>
              <Text fontSize="10px" p={2}>
                ยอดวิว
              </Text>
              <Text fontSize="15px" color="orange" p={2}>
                0
              </Text>
            </Box>
            <Box>
              <Text fontSize="10px" p={2}>
                อยู่ในชั้นหนังสือ
              </Text>
              <Text fontSize="15px" color="orange" p={2}>
                0
              </Text>
            </Box>
          </Flex>
          <hr></hr>
        </Box>
      </Box>
    </div>
  );
}

export default ProfilePage;
