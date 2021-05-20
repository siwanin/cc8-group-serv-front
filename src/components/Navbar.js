import React /*, { useState }*/ from "react";

import { Box, Flex, Heading, Spacer, Button, Input } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBell,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";

import { Select } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {  useHistory } from "react-router-dom";
// import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

function Navbar() {
  let history = useHistory();
  // const [isAuth, setIsAuth] = useState(true);

  

  return (
    <>
      <Flex boxShadow="0 2px 2px 2px rgba(0,0,0,.2);">
        <Box p="1">
          <Button
            w="200px"
            h="20"
            bg="white"
            color="#F5B619"
            onClick={() => {
              history.push("/");
            }}
          >
            <Heading>Fictionlog</Heading>
          </Button>
        </Box>

        <Box p="5">
          <Select placeholder="Novel Type">
            <option value="Adventure">Adventure</option>
            <option value="Art">Art</option>
            <option value="Children’s">Humor</option>
            <option value="Contemporary">Contemporary</option>
            <option value="Cooking">Cooking</option>
            <option value="Development">Development</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Families & Relationships">
              Families & Relationships
            </option>
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
        <Box p="5">
          <Input placeholder="Search" />
        </Box>

        <Box p="5">
          <Button bg="#F6E683" mr="7">
            <h1>My novel</h1>
          </Button>
        </Box>

        <Spacer />

        <Box p="5">
          <Button bg="white" mr="4">
            <FontAwesomeIcon icon={faAlignJustify} size="2x" />
          </Button>
          <Button bg="white" mr="4">
            <FontAwesomeIcon icon={faBell} size="2x" />
          </Button>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  px={4}
                  py={1}
                  mr="4"
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="1px"
                  _hover={{ bg: "gray.400" }}
                  _expanded={{ bg: "white" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    size="2x"
                    color="#F5B619"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => {
                      history.push("/profile");
                    }}>My Profile</MenuItem>
                  <MenuItem onClick={() => {
                      history.push("/order");
                    }}>order</MenuItem>
                  <MenuItem onClick={() => {
                      history.push("/payment");
                    }}>payment</MenuItem>
                  <MenuItem onClick={() => {
                      history.push("/createnovel");
                    }}>create novel</MenuItem>
                  <MenuItem
                    onClick={() => {
                      history.push("/signin");
                    }}
                  >
                    logout
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Flex>
      {/* <Tabs size="md" variant="enclosed">
        <TabList
          mb="1em"
          color="#F5B619"
          boxShadow="0 2px 2px 2px rgba(0,0,0,.2);"
        >
          <Tab>นิยายรายตอน</Tab>
          <Tab>อีบุ๊กนิยาย</Tab>
          <Tab>อีบุ๊กทั่วไป</Tab>
        </TabList> */}

      {/* <TabPanels>
          <TabPanel>
            <p>นิยายรายตอน!</p>
          </TabPanel>
          <TabPanel>
            <p>อีบุ๊กนิยาย!</p>
          </TabPanel>
          <TabPanel>
            <p>อีบุ๊กทั่วไป!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </>
  );
}

export default Navbar;
