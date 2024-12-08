import React, { useState } from "react";
import { Box, VStack, Text, Image, Button, Input, Flex, HStack } from "@chakra-ui/react";
import { FaEdit, FaHome, FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5"; // Pastikan ini diimpor dengan benar
import { MdOutlinePlace, MdLogout } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg';

const ProfilAdmin = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("********");
  const [nama, setNama] = useState("Natan");

  const [showPassword, setShowPassword] = useState(false);  // State untuk toggle password
  const togglePassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/admin");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile-admin");
  };

  return (
    <Box bg="gray.50" minHeight="100vh">
      {/* Header */}
      <Box
        bg={"#FFFFFF"}
        w={"full"}
        h={"80px"}
        px={"8"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Image src={Logo} alt="Logo" />
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
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#C66E4E"} justifyContent={"flex-start"} onClick={() => navigate('/dashboard')}>
            <FaHome /> Dashboard
          </Button>
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#FFFFFF"} justifyContent={"flex-start"} onClick={() => navigate('/user-admin')}>
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
        
        {/* Profile Content */}
        <Box w="80%" p="4">
          <VStack
            bg="white"
            mx="auto"
            w="80%"
            maxW="400px"
            p="4"
            boxShadow="lg"
            borderRadius="lg"
            spacing={5}
            align="center"
            mt={5}
          >
            <Text fontSize="3xl" fontWeight="bold" color="black.700" mb={4}>
              Profil Admin
            </Text>

            <Image
              src="https://i.pinimg.com/564x/86/b0/5b/86b05b5f1bdca7da73f0d89651ccb186.jpg"
              alt="Foto Profil Admin"
              borderRadius="full"
              boxSize="100px"
              objectFit="cover"
              mb={4}
            />

            <Box w="full">
              <Text mb={1} fontWeight="medium" color="black.700">
                Nama Admin
              </Text>
              <Input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Admin"
                type="text"
                variant="outline"
                focusBorderColor="orange.400"
                mb={3}
              />
            </Box>

            <Box w="full">
              <Text mb={1} fontWeight="medium" color="black.700">
                Email
              </Text>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                type="email"
                variant="outline"
                focusBorderColor="orange.400"
                mb={3}
              />
            </Box>

            <Box w="full">
              <Text mb={1} fontWeight="medium" color="black.700">
                Password
              </Text>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                type={showPassword ? "text" : "password"}
                variant="outline"
                focusBorderColor="orange.400"
                mb={4}
                rightElement={
                  <Button onClick={togglePassword} variant="link">
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                }
              />
            </Box>

            <Box w="full" mt={4}>
              <Flex justify="space-between" mt={3}>
                <Button
                  leftIcon={<FaEdit />}
                  bg="red.600"
                  color="white"
                  _hover={{ bg: "red.700" }}
                  size="md"
                  onClick={handleEditProfile}
                  w="48%"
                >
                  Edit Profil
                </Button>

                <Button
                  leftIcon={<IoArrowBack />}
                  bg="blue.600"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                  onClick={handleBackToDashboard}
                  w="48%"
                >
                  Kembali
                </Button>
              </Flex>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default ProfilAdmin;
