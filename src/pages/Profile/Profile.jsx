import React, { useState } from "react";
import { Box, VStack, HStack, Flex} from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; 

const Profile = () => {
  const [name, setName] = useState("Sarah");
  const [email, setEmail] = useState("sarah@gmail.com");
  const [password, setPassword] = useState("********");

  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSignOut = () => {
    console.log("User has signed out!");
    // Tambahkan logika untuk mengarahkan pengguna ke halaman login setelah sign out
    navigate("/login"); // Ganti dengan path yang sesuai untuk halaman login
  };

  const handleEditProfile = () => {
    navigate("/edit-profile"); // Arahkan ke halaman EditProfile.jsx
  };

  return (
    <Box bg="gray.100" minH="100vh" p={1}>
      {/* Header */}
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        bg="white"
        p={4}
        shadow="sm"
        borderRadius="md"
      >
        <Heading as="h1" size="md" color="orange.500">
          FindYourPlace
        </Heading>
        <HStack spacing={8}>
          <Text>Home</Text>
          <Text>Daftar Tempat</Text>
          <Text>Tentang Kami</Text>
          <Text>Kontak</Text>
        </HStack>
        <Avatar size="lg" src="https://bit.ly/dan-abramov" />
      </Flex>

      {/* Profile Section */}
      <Box
        bg="white"
        maxW="md"
        mx="auto"
        mt={8}
        p={6}
        borderRadius="lg"
        shadow="lg"
      >
        {/* Heading */}
        <Heading as="h2" size="xl" textAlign="center" color="#a04925" fontWeight={"extrabold"} mb={6}>
          PROFIL PENGGUNA
        </Heading>

        {/* Avatar and Name */}
        <VStack spacing={4}>
          <Avatar
            size="2xl"
            name={name}
            src="https://bit.ly/dan-abramov"
            border="4px"
          />
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {name}
          </Text>
        </VStack>

        {/* Form */}
        <VStack spacing={4} mt={6}>
          {/* Nama */}
          <Box w="full">
            <Text mb={1} fontWeight="medium" color="gray.700">
              Nama
            </Text>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Sarah"
              variant="outline"
              focusBorderColor="orange.400"
            />
          </Box>

          {/* Email */}
          <Box w="full">
            <Text mb={1} fontWeight="medium" color="gray.700">
              Email
            </Text>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sarah@gmail.com"
              type="email"
              variant="outline"
              focusBorderColor="orange.400"
            />
          </Box>

          {/* Password */}
          <Box w="full">
            <Text mb={1} fontWeight="medium" color="gray.700">
              Password
            </Text>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              type="password"
              variant="outline"
              focusBorderColor="orange.400"
            />
          </Box>
        </VStack>

        {/* Buttons */}
        <HStack spacing={4} mt={8}>
          <Button
            bg="#a04925"
            color="white"
            flex="1"
            _hover={{ bg: "orange.600" }}
            onClick={handleEditProfile} // Fungsi untuk mengarahkan ke EditProfile
          >
            Edit Profil
          </Button>
          <Button
            bg="red.600"
            color="white"
            flex="1"
            _hover={{ bg: "red." }}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Profile;
