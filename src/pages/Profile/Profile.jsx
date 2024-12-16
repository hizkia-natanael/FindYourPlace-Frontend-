import React, { useState, useEffect } from "react";
import { 
  Box, 
  VStack, 
  HStack, 
  Flex, 
  Text,
  Button,
  Heading,
  Input,
  Spinner
} from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { getProfile, signOut } from "../../config/authStore.js"; // Pastikan path impor benar

const Profile = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil profil pengguna saat komponen dimuat
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        setProfile(userData);
        setIsLoading(false);
      } catch (error) {
        console.error("Gagal Mengambil Profil:", error);
        setIsLoading(false);
        // Arahkan ke halaman login jika gagal
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("Berhasil Keluar");
      navigate("/login");
    } catch (error) {
      console.error("Gagal Keluar:", error);
    }
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

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
              value={profile.username}
              onChange={(e) => setName(e.target.value)}
              placeholder="Sarah"
              variant="outline"
              focusBorderColor="orange.400"
              color={"black"}
            />
          </Box>

          {/* Email */}
          <Box w="full">
            <Text mb={1} fontWeight="medium" color="gray.700">
              Email
            </Text>
            <Input
              value={profile.email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sarah@gmail.com"
              type="email"
              variant="outline"
              focusBorderColor="orange.400"
              color={"black"}
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
