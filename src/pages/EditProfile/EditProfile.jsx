import React, { useState, useEffect } from "react";
import { 
  Box, 
  VStack, 
  HStack, 
  Flex, 
  Text, 
  Button, 
  Heading, 
  Input
} from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar";
import { IoCaretBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../../config/authStore.js";

const EditProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [initialData, setInitialData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        setName(userData.username);
        setEmail(userData.email);
        setInitialData({
          username: userData.username,
          email: userData.email
        });
      } catch (error) {
        console.error("Gagal mengambil profil:", error);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSaveChanges = async () => {
    try {
      const updatedProfile = {
        username: name,
        email: email,
        ...(password && { password }),
      };

      const result = await updateProfile(updatedProfile);

      console.log("Profil berhasil diperbarui:", result);

      setInitialData({
        username: result.username,
        email: result.email
      });
      
      setIsEditing(false);
      setPassword("");

    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
    }
  };

  const isFormChanged = 
    name !== initialData.username || 
    email !== initialData.email || 
    !!password;

  return (
    <Box bg="gray.100" minH="100vh" p={1}>
      {/* Header dan Navigator */}
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
          <Text color="black">Home</Text>
          <Text color="black">Daftar Tempat</Text>
          <Text color="black">Tentang Kami</Text>
          <Text color="black">Kontak</Text>
        </HStack>
        <Avatar size="lg" src="https://bit.ly/dan-abramov" />
      </Flex>

      {/* Konten Edit Profil */}
      <Box
        bg="white"
        maxW="md"
        mx="auto"
        mt={8}
        p={6}
        borderRadius="lg"
        shadow="lg"
      >
        {/* Judul dan Tombol Kembali */}
        <Flex align="center" mb={6}>
          <IoCaretBack 
            size={45} 
            cursor="pointer" 
            color="orange" 
            onClick={() => navigate("/profile")}
          />
          <Heading 
            as="h2" 
            size="xl" 
            textAlign="center" 
            color="#a04925" 
            fontWeight="extrabold" 
            flex="1"
          >
            EDIT PROFIL
          </Heading>
        </Flex>

        {/* Avatar dan Nama */}
        <VStack spacing={4} mb={6}>
          <Avatar
            size="2xl"
            name={name}
            src="https://bit.ly/dan-abramov"
            border="4px"
            cursor="pointer"
            onClick={() => console.log("Ubah foto profil")}
          />
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {name}
          </Text>
        </VStack>

        {/* Form Edit */}
        <VStack spacing={4}>
          {/* Field Nama */}
          <Box w="full">
            <Text mb={1} fontWeight="medium" color="black">
              Nama
            </Text>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              variant="outline"
              focusBorderColor="orange.400"
              isDisabled={!isEditing}
              color="black"
            />
          </Box>

          {/* Field Email */}
          <Box w="full">
            <Text mb={1} fontWeight="medium" color="black">
              Email
            </Text>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              type="email"
              variant="outline"
              focusBorderColor="orange.400"
              isDisabled={!isEditing}
              color="black"
            />
          </Box>

          {/* Field Password */}
          <Box w="full">
            <Text mb={1} fontWeight="medium" color="black">
              Password Baru (Opsional)
            </Text>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password baru"
              type="password"
              variant="outline"
              focusBorderColor="orange.400"
              isDisabled={!isEditing}
              color="black"
            />
          </Box>
        </VStack>

        {/* Tombol Simpan */}
        <HStack spacing={4} mt={8}>
          <Button
            bg="green.600"
            color="white"
            flex="1"
            _hover={{ bg: "green.700" }}
            onClick={() => {
              handleSaveChanges();
              navigate("/login");
            }}
            isDisabled={!isFormChanged || !isEditing}
          >
            Simpan Perubahan
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default EditProfile;