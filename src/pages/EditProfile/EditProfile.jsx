import React, { useState, useEffect } from "react";
import { Box, VStack, HStack, Flex, Text, Button, Heading, Input } from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar";  // Assuming Avatar is a custom component.
import { IoCaretBack } from "react-icons/io5";  // Importing IoCaretBack icon
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

const EditProfile = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // State for profile form
  const [name, setName] = useState("Sarah");
  const [email, setEmail] = useState("sarah@gmail.com");
  const [password, setPassword] = useState("********");
  const [isEditing, setIsEditing] = useState(true); // Initially in edit mode
  const [initialData, setInitialData] = useState({ name: "Sarah", email: "sarah@gmail.com", password: "********" });

  // Adding effect to check for changes
  useEffect(() => {
    setInitialData({ name, email, password });
  }, [name, email, password]);

  // Function to save changes
  const handleSaveChanges = () => {
    console.log("Saving changes...");
    // Logic to save changes can be added here
    setIsEditing(false); // Exit edit mode after saving
  };

  // Check if there are changes in the form
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
        {/* Edit Profile Title */}
        <Flex align="center" mb={6}>
          <IoCaretBack 
            size={45} 
            cursor="pointer" 
            color="orange.500" 
            onClick={() => navigate("/profile")} // Redirect to profile page when clicked
          />
          <Heading as="h2" size="x1" textAlign="center" color="#a04925" fontWeight="extrabold" flex="1">
            EDIT PROFIL
          </Heading>
        </Flex>

        {/* Avatar and Name */}
        <VStack spacing={4} mb={6}>
          <Avatar
            size="2xl"
            name={name}
            src="https://bit.ly/dan-abramov"
            border="4px"
            cursor="pointer" // Making avatar clickable for editing
            onClick={() => console.log("Change profile picture")}
          />
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {name}
          </Text>
        </VStack>

        {/* Edit Profile Form */}
        <VStack spacing={4}>
          {/* Name Field */}
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
              isDisabled={!isEditing} // Disable input when not in edit mode
            />
          </Box>

          {/* Email Field */}
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
              isDisabled={!isEditing} // Disable input when not in edit mode
            />
          </Box>

          {/* Password Field */}
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
              isDisabled={!isEditing} // Disable input when not in edit mode
            />
          </Box>
        </VStack>

        {/* Buttons */}
        <HStack spacing={4} mt={8}>
          {/* Save Button */}
          <Button
            bg="green.600"
            color="white"
            flex="1"
            _hover={{ bg: "green.700" }}
            onClick={handleSaveChanges} // Function to save changes
            isDisabled={!isFormChanged || !isEditing} // Disable button if no changes or not in edit mode
          >
            Simpan Perubahan
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default EditProfile;
