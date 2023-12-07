import SearchBar from "./SearchBar";
import {Link, useNavigate} from 'react-router-dom';


import {Box, Flex,Button,useColorModeValue,Stack,useColorMode,Show,HStack,Text,useDisclosure,IconButton,Hide,} from "@chakra-ui/react";
import {MoonIcon, SunIcon, HamburgerIcon, CloseIcon, AddIcon,} from "@chakra-ui/icons";
import "./Navbar.css";
  

const Navigate = ({onSearch ,setAccess })=> {

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleLogOut = () =>{
        setAccess(false);
    }

    return(
        // <nav>
        //     <button >
        //         <Link to='/about'> ABOUT </Link>
        //     </button>
        //     <button >
        //         <Link to='/home'> HOME </Link>
        //     </button>
        //     <button >
        //         <Link to='/favorites'> FAVORITES </Link>
        //     </button>
        //     <button onClick={handleLogOut}>LOG OUT</button>
        //     <SearchBar onSearch={onSearch}/>
        // </nav>

    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>


          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                    <Link to='/home'> HOME </Link>
                </Button>

                <Button className="btnRes">
                    <Link to='/about'> ABOUT </Link>
                </Button>

                <Button className="btnRes">
                    <Link to='/favorites'> FAVORITES </Link>
                </Button>

                <Button className="btnRes">
                    <Link to='#Contact'> CONTACT </Link>
                </Button>
              </HStack>
            </HStack>
          </Flex>

          <HStack w="42%">
            <Show breakpoint="(min-width: 1000px)">
              <SearchBar onSearch={onSearch}/>
            </Show>
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button
                backgroundColor="#048ABF"
                _hover={{ bg: "#0468BF", color: "black" }}
                color="white"
                variant="solid"
                size={["sm", "md"]}
                id="resumeBtn"
                onClick={handleLogOut}>
                    LOG OUT
                
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>

    )
}
export default Navigate;

