import React, { useState } from "react";
import { Box, VStack, Text, Image, Button, Input, Flex, HStack } from "@chakra-ui/react";
import { FaHome, FaUser } from "react-icons/fa";
import { MdOutlinePlace, MdLogout } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg';

const EditProfilAdmin = () => {
  // State untuk email, password, dan nama
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("********");
  const [nama, setNama] = useState("Natan");
  const [image, setImage] = useState("https://i.pinimg.com/564x/86/b0/5b/86b05b5f1bdca7da73f0d89651ccb186.jpg");

  const navigate = useNavigate();

  // Fungsi untuk kembali ke halaman Profil Admin
  const handleBackToProfile = () => {
    navigate("/profil-admin");
  };

  // Fungsi untuk menyimpan perubahan profil
  const handleSaveProfile = () => {
    alert("Profil telah disimpan!");
    handleBackToProfile();
  };

  // Fungsi untuk mengganti gambar
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box bg="#E8E8E8" minHeight="100vh">
      {/* Header */}
      <Box
        bg={"#FFFFFF"}
        w={"full"}
        h={"80px"}
        px={6}
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
            src={image}
            borderRadius={"full"}
            w="120px"
            h="120px"
            marginY={"3"}
            objectFit="cover"
          />
          <Box w={"100%"} marginTop={"2"}>
            <Text color={"#000000"} fontWeight={"normal"} textAlign={"center"}>
              Welcome, <Text as="b">{nama}</Text>!
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
          <Button w={"130px"} h={"40px"} backgroundColor={"#C66E4E"} onClick={() => navigate('/')}>
            <MdLogout /> Sign out
          </Button>
        </VStack>

        {/* Profil Admin Content */}
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
          mt={7}
        >
          <Text fontSize="3xl" fontWeight="bold" color="black.700" mb={4}>
            Edit Profil Admin
          </Text>

          {/* Foto Profil */}
          <Box mb={4}>
            <label htmlFor="profile-image">
              <Image
                src={image}
                alt="Foto Profil Admin"
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                cursor="pointer"
              />
            </label>
            <Input
              id="profile-image"
              type="file"
              display="none"
              onChange={handleImageChange}
            />
          </Box>

          {/* Nama Admin */}
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

          {/* Input Email */}
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

          {/* Tombol Simpan dan Kembali */}
          <Box w="full">
            <Flex justify="space-between" mt={3}>
              <Button
                bg="green.600"
                color="white"
                _hover={{ bg: "green.700" }}
                size="md"
                onClick={handleSaveProfile}
                w="48%"
              >
                Simpan Profil
              </Button>
              <Button
                bg="red.600"
                color="white"
                _hover={{ bg: "red.700" }}
                onClick={handleBackToProfile}
                w="48%"
              >
                Kembali
              </Button>
            </Flex>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default EditProfilAdmin;
