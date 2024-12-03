import React, { useState } from "react";
import { Box, Avatar, Text, Input, Button, VStack, HStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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

  return (
    <Box bg="gray.50" minH="100vh" p={5}>
      <Box
        bg="white"
        maxW="lg"
        mx="auto"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={5} textAlign="center" color="teal.600">
          Profil Pengguna
        </Heading>
        <VStack spacing={4} align="stretch">
          {/* Avatar dan Nama */}
          <VStack spacing={2} align="center">
            <Avatar
              size="xl"
              name={name}
              src="https://bit.ly/dan-abramov" // Ubah ke URL foto pengguna
            />
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              {name}
            </Text>
          </VStack>

          <Box borderBottom="1px" borderColor="gray.200" my={4} />

          {/* Form Input */}
          <VStack spacing={4}>
            <Box>
              <Text mb={1} fontWeight="medium" color="gray.600">
                Nama
              </Text>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sarah"
                variant="filled"
                bg="gray.100"
              />
            </Box>
            <Box>
              <Text mb={1} fontWeight="medium" color="gray.600">
                Email
              </Text>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="sarah@gmail.com"
                variant="filled"
                bg="gray.100"
              />
            </Box>
            <Box>
              <Text mb={1} fontWeight="medium" color="gray.600">
                Password
              </Text>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                variant="filled"
                bg="gray.100"
              />
            </Box>
          </VStack>

          <HStack spacing={4} mt={4}>
            <Button colorScheme="teal" flex="1">
              Edit Profil
            </Button>
            <Button colorScheme="red" flex="1" onClick={handleSignOut}>
              Sign Out
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Profile;
