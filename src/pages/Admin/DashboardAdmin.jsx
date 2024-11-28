import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Box, Text, Button } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import { Image } from '@chakra-ui/react';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from 'react-icons/io';

const DashboardAdmin = () => {
  const navigate = useNavigate();
  return (
    <Box bg="#E8E8E8" minHeight="100vh"> {/* White background for entire page */}
      {/* Header */}
      <Box
        bg={"#FFFFFF"}
        w={"full"}
        h={"100"}
        px={"8"}
        display={"flex"}
        alignItems={"center"}
      >
        <Image src={Logo} />
      </Box>

      {/* Main Content */}
      <HStack h={"full"} display={"flex"} alignItems={"flex-start"} w={"full"}>
        {/* Sidebar */}
        <VStack
          bg={"#FFFFFF"}
          w={"252px"}
          h={"90vh"}
          p={"10"}
          borderRadius={"0 0 10px 0"} // Membuat hanya sisi kanan melengkung
        >
          <Image 
            src="https://i.pinimg.com/564x/86/b0/5b/86b05b5f1bdca7da73f0d89651ccb186.jpg" 
            borderRadius={"full"} 
            w="120px" 
            h="120px" 
            marginY={"3"}
          />
          <Box w={"100%"} marginTop={"2"}>
            <Text color={"#000000"} fontWeight={"normal"} textAlign={"center"}>
              Welcome, <Text as="b">Natan</Text>!
            </Text>
            <Text color={"#000000"} fontWeight={"bold"} textAlign={"center"}>
              Admin
            </Text>
          </Box>
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#C66E4E"} justifyContent={"flex-start"}>
            <FaHome /> Dashboard
          </Button>
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#FFFFFF"} justifyContent={"flex-start"}>
            <FaUser /> Users
          </Button>
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#FFFFFF"} justifyContent={"flex-start"}>
            <MdOutlinePlace /> Places
          </Button>
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#FFFFFF"} justifyContent={"flex-start"}>
            <IoIosChatbubbles /> Reviews
          </Button>
          
          <Button w={"130px"} h={"40px"} backgroundColor={"#C66E4E"} onClick={() => { navigate('/') }} top={"5"}>
            <MdLogout /> Sign out
          </Button>
        </VStack>

        {/* Main Panel */}
        <VStack
          bg={"#FFFFFF"}
          flex={1}
          h={"90vh"}
          borderRadius={"10px"}
          p={"16"}
          ml={"8"}
          spacing={4}
          gap={"10"}
        >
          {/* Card 1 */}
          <Box
            bg={"#EBEBEB"}
            borderRadius={"10px"}
            p={6}
            boxShadow={"md"}
            w={"100%"}
          >
            <Text fontSize={"lg"} color={"black"} fontWeight={"bold"}>
              Total Users: 
            </Text>
            <Text fontSize={"sm"} color={"#373434"}>
              Total users yang terdaftar
            </Text>
          </Box>

          {/* Card 2 */}
          <Box
            bg={"#EBEBEB"}
            borderRadius={"10px"}
            p={6}
            boxShadow={"md"}
            w={"100%"}
          >
            <Text fontSize={"lg"} color={"black"} fontWeight={"bold"}>
              Total Places: 
            </Text>
            <Text fontSize={"sm"} color={"#373434"}>
              Total Tempat yang telah dimasukan Admin.
            </Text>
          </Box>

          {/* Card 3 */}
          <Box
            bg={"#EBEBEB"}
            borderRadius={"10px"}
            p={6}
            boxShadow={"md"}
            w={"100%"}
          >
            <Text fontSize={"lg"} color={"black"} fontWeight={"bold"}>
              Total Reviews:
            </Text>
            <Text fontSize={"sm"} color={"#373434"}>
              Total review yang telah diulas user.
            </Text>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default DashboardAdmin;
