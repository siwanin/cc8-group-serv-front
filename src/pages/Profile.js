import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  VStack,
  Button,
  HStack,
  Center,
  Avatar,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Redirect } from "react-router-dom";



function Profile({ authorized }) {

  if(!authorized){
    return(
     <Redirect to="/signin"/>
    )
  }

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
              <Text fontSize="10px">0 Story</Text>
              <Text fontSize="20px">|</Text>
              <Text fontSize="10px">0 Follower</Text>
            </HStack>
          </VStack>
          <Spacer />
          <VStack spacing={0} align="stretch" w="30%" color="#545454" mb={5}>
            "
            <Button colorScheme="gray" variant="solid" borderRadius="5px">
              wallet
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="5px">
              My Novel
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="5px">
              bookshelf
            </Button>
          </VStack>
        </Flex>

        <Box mb={4} color="#545454">
          <Text fontSize="20px">My Novel</Text>
          <Box w="100%" h="70" bg="#FFFAEB">
            <Text fontSize="10px" p={2}>
              income (ฺBaht)
            </Text>
            <Text fontSize="15px" color="orange" p={2}>
              0
            </Text>
          </Box>
        </Box>
        <Box mt={4}>
          <HStack spacing="15px" color="#545454">
            <Button colorScheme="gray" variant="solid" borderRadius="15px">
              All
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="15px">
              Finish
            </Button>
            <Button colorScheme="gray" variant="solid" borderRadius="15px">
              Draft
            </Button>
          </HStack>
        </Box>
        <Box mt={4} color="#545454">
          <hr></hr>
          <Flex m={4}>
            <Box w="5%" h="70" bg="#FFFAEB"></Box>
            <Text fontSize="10px" p={5}>
              Title
            </Text>
            <Spacer />
            <Box>
              <Text fontSize="10px" p={2}>
                Views
              </Text>
              <Text fontSize="15px" color="orange" p={2}>
                0
              </Text>
            </Box>
            <Box>
              <Text fontSize="10px" p={2}>
                In Shelf
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

export default Profile;
