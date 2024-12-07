import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Box, Text, Button, Input, Textarea, Image } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from 'react-icons/io';

const PlacesAdmin = () => {
  const navigate = useNavigate();
  const [placeName, setPlaceName] = useState('');
  const [placeDescription, setPlaceDescription] = useState('');
  const [placeLocation, setPlaceLocation] = useState('');  // Menggunakan lokasi, bukan alamat
  const [placeFasilitas, setPlaceFasilitas] = useState('');
  const [placeHours, setPlaceHours] = useState('');
  const [placePhoneNumber, setPlacePhoneNumber] = useState('');
  const [placeImage, setPlaceImage] = useState(null);

  // Handle file input for place image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPlaceImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!placeName.trim() || !placeDescription.trim() || !placeLocation.trim()) {
      alert('Please fill out all fields!');
      return;
    }

    console.log('Place Added:', {
      name: placeName,
      description: placeDescription,
      location: placeLocation,  // Menggunakan lokasi
      fasilitas: placeFasilitas,
      hours: placeHours,
      phoneNumber: placePhoneNumber,
      image: placeImage
    });

    // Reset form after submission
    setPlaceName('');
    setPlaceDescription('');
    setPlaceLocation('');  // Reset lokasi
    setPlaceFasilitas('');
    setPlaceHours('');
    setPlacePhoneNumber('');
    setPlaceImage(null);
  };

  return (
    <Box bg="#E8E8E8" minHeight="100vh">
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
          h={"full"}
          borderRadius={"10px"}
          p={"16"}
          ml={"8"}
          spacing={4}
          gap={"10"}
        >
          {/* Form to Add a Place */}
          <Box
            bg={"#FFFFFF"} // Background diubah menjadi putih
            borderRadius={"10px"}
            p={6}
            boxShadow={"md"}
            w={"100%"}
          >
            {/* Add New Places Title */}
            <Text fontSize={"lg"} color={"black"} fontWeight={"bold"} textAlign="center">
              Add New Places
            </Text>

            {/* Place Name */}
            <Input
              placeholder="Place Name"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              mb={4}
            />

            {/* Place Description */}
            <Textarea
              placeholder="Place Description"
              value={placeDescription}
              onChange={(e) => setPlaceDescription(e.target.value)}
              mb={4}
            />

            {/* Place Location */}
            <Input
              placeholder="Place Location"
              value={placeLocation}
              onChange={(e) => setPlaceLocation(e.target.value)}
              mb={4}
            />

            {/* Fasilitas */}
            <Input
              placeholder="Fasilitas"
              value={placeFasilitas}
              onChange={(e) => setPlaceFasilitas(e.target.value)}
              mb={4}
            />

            {/* Hours */}
            <Input
              placeholder="Operating Hours"
              value={placeHours}
              onChange={(e) => setPlaceHours(e.target.value)}
              mb={4}
            />

            {/* Phone Number */}
            <Input
              placeholder="Phone Number"
              value={placePhoneNumber}
              onChange={(e) => setPlacePhoneNumber(e.target.value)}
              mb={4}
            />

            {/* Place Image */}
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              mb={4}
            />

            {/* Image Preview */}
            {placeImage && (
              <Image src={placeImage} alt="Place Image Preview" boxSize="100px" objectFit="cover" />
            )}

            {/* Submit Button */}
            <Button
              bg={"#C66E4E"}
              color={"white"}
              onClick={handleSubmit}
            >
              Save Places
            </Button>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PlacesAdmin;
