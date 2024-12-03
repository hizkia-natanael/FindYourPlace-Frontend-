import React, { useState, useEffect } from "react";
import { Box, VStack, HStack, Flex, Text, Button, Heading, Input } from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar";  // Mengasumsikan Avatar adalah komponen kustom.

const EditProfile = () => {
  // State untuk formulir profil
  const [name, setName] = useState("Sarah");
  const [email, setEmail] = useState("sarah@gmail.com");
  const [password, setPassword] = useState("********");
  const [isEditing, setIsEditing] = useState(true); // Awalnya dalam mode edit
  const [initialData, setInitialData] = useState({ name: "Sarah", email: "sarah@gmail.com", password: "********" });

  // Menambahkan efek untuk memeriksa perubahan
  useEffect(() => {
    setInitialData({ name, email, password });
  }, [name, email, password]);

  // Fungsi untuk menyimpan perubahan
  const handleSaveChanges = () => {
    console.log("Menyimpan perubahan...");
    // Logika untuk menyimpan perubahan dapat ditambahkan di sini
    setIsEditing(false); // Setelah menyimpan perubahan, keluar dari mode edit
  };

  // Memeriksa apakah ada perubahan pada form
  const isFormChanged = name !== initialData.name || email !== initialData.email || password !== initialData.password;

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

      {/* Bagian Profil */}
      <Box
        bg="white"
        maxW="md"
        mx="auto"
        mt={8}
        p={6}
        borderRadius="lg"
        shadow="lg"
      >
        {/* Judul Profil */}
        <Heading as="h2" size="xl" textAlign="center" color="#a04925" fontWeight="extrabold" mb={6}>
          EDIT PROFIL
        </Heading>

        {/* Avatar dan Nama */}
        <VStack spacing={4} mb={6}>
          <Avatar
            size="2xl"
            name={name}
            src="https://bit.ly/dan-abramov"
            border="4px"
            cursor="pointer" // Membuat avatar dapat diklik untuk mengedit
            onClick={() => console.log("Ganti foto profil")}
          />
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {name}
          </Text>
        </VStack>

        {/* Formulir Edit Profil */}
        <VStack spacing={4}>
          {/* Kolom Nama */}
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
              isDisabled={!isEditing} // Disable input jika tidak dalam mode edit
            />
          </Box>

          {/* Kolom Email */}
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
              isDisabled={!isEditing} // Disable input jika tidak dalam mode edit
            />
          </Box>

          {/* Kolom Password */}
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
              isDisabled={!isEditing} // Disable input jika tidak dalam mode edit
            />
          </Box>
        </VStack>

        {/* Bagian Tombol */}
        <HStack spacing={4} mt={8}>
          {/* Tombol Simpan */}
          <Button
            bg="green.600"
            color="white"
            flex="1"
            _hover={{ bg: "green.700" }}
            onClick={handleSaveChanges} // Fungsi untuk menyimpan perubahan
            isDisabled={!isFormChanged || !isEditing} // Disable tombol jika tidak ada perubahan atau dalam mode non-edit
          >
            Simpan Perubahan
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default EditProfile;
