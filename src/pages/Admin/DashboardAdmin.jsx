import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Box, Text, Button, Flex } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import { Image } from '@chakra-ui/react';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from 'react-icons/io';
import { RiAdminFill } from "react-icons/ri";

const DashboardAdmin = () => {
  const navigate = useNavigate();

  // Fungsi untuk menavigasi ke halaman Profil Admin
  const handleProfileClick = () => {
    navigate('/profil-admin');  // Mengarahkan ke halaman Profil Admin
  };

  return (
    <Box bg="#E8E8E8" minHeight="100vh">
      {/* Header */}
      <Box
        bg={"#FFFFFF"}
        w={"full"}
        h={"100px"}
        px={"8"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"} // Ensures the logo is on the left and icons are on the right
      >
        <Image src={Logo} />
        
        {/* Icon Container */}
        <Flex align="center" justify="flex-end" gap={4}>
          {/* Admin Icon with onClick to navigate to Profile */}
          <RiAdminFill size={30} onClick={handleProfileClick} cursor="pointer" />
        </Flex>
      </Box>

      {/* Main Content */}
      <HStack h={"89vh"} display={"flex"} alignItems={"flex-start"} w={"full"} position={"relative"} top={"1vh"}>
        
        {/* Sidebar */}
        <VStack
          bg={"#FFFFFF"}
          w={"252px"}
          p={"10"}
          borderRadius={"0 0 10px 0"} 
          h={"full"}
          position={"fixed"} // Ensures the sidebar is fixed
        >
          {/* Gambar Profil yang Dapat Diklik */}
          <Image 
            src="https://i.pinimg.com/564x/86/b0/5b/86b05b5f1bdca7da73f0d89651ccb186.jpg" 
            borderRadius={"full"} 
            w="120px" 
            h="120px" 
            marginY={"3"}
            cursor="pointer" // Menambahkan cursor pointer untuk menunjukkan bahwa gambar dapat diklik
            onClick={handleProfileClick} // Menambahkan handler onClick
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
          <Button
            p={"4" } w={"full"} h={"40px"} color={"#000000"}  backgroundColor={"#FFFFFF"}  justifyContent="flex-start"
            onClick={() => navigate('/places-admin')}
          >
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
          h={"full"}
          borderRadius={"10px"}
          p={"16"}
          ml={"260px"} // Adjusted to leave space for the sidebar
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
