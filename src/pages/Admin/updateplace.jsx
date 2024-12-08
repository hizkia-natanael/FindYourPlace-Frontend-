import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HStack, VStack, Box, Text, Button, Input, Textarea, Image } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from 'react-icons/io';

const UpdatePlace = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Mengambil ID tempat dari parameter URL
  const [placeName, setPlaceName] = useState('');
  const [placeDescription, setPlaceDescription] = useState('');
  const [placeLocation, setPlaceLocation] = useState('');
  const [placeFasilitas, setPlaceFasilitas] = useState('');
  const [placeHours, setPlaceHours] = useState('');
  const [placePhoneNumber, setPlacePhoneNumber] = useState('');
  const [placeImage, setPlaceImage] = useState(null);

  useEffect(() => {
    // Fetch existing data for the place
    const fetchPlaceData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/places/${id}`); // Ganti dengan API endpoint
        const data = await response.json();
        setPlaceName(data.name);
        setPlaceDescription(data.description);
        setPlaceLocation(data.location);
        setPlaceFasilitas(data.fasilitas);
        setPlaceHours(data.hours);
        setPlacePhoneNumber(data.phoneNumber);
        setPlaceImage(data.image);
      } catch (error) {
        console.error('Error fetching place data:', error);
      }
    };
    fetchPlaceData();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPlaceImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!placeName.trim() || !placeDescription.trim() || !placeLocation.trim()) {
      alert('Please fill out all required fields!');
      return;
    }

    const updatedPlace = {
      name: placeName,
      description: placeDescription,
      location: placeLocation,
      fasilitas: placeFasilitas,
      hours: placeHours,
      phoneNumber: placePhoneNumber,
      image: placeImage,
    };

    try {
      await fetch(`http://localhost:3000/places/${id}`, {
        method: 'PUT', // Gunakan PUT untuk update
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPlace),
      });
      alert('Place updated successfully!');
      navigate('/places-admin'); // Redirect ke halaman admin setelah update
    } catch (error) {
      console.error('Error updating place:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const confirmation = window.confirm('Are you sure you want to delete this place?');
      if (confirmation) {
        await fetch(`http://localhost:3000/places/${id}`, {
          method: 'DELETE', // Menggunakan DELETE untuk menghapus tempat
        });
        alert('Place deleted successfully!');
        navigate('/places-admin'); // Redirect setelah berhasil menghapus
      }
    } catch (error) {
      console.error('Error deleting place:', error);
    }
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
          <Box
            bg={"#FFFFFF"}
            borderRadius={"10px"}
            p={6}
            boxShadow={"md"}
            w={"100%"}
          >
            <Text fontSize={"lg"} color={"black"} fontWeight={"bold"} textAlign="center">
              Update Place
            </Text>

            <Input
              placeholder="Place Name"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              mb={4}
            />
            <Textarea
              placeholder="Place Description"
              value={placeDescription}
              onChange={(e) => setPlaceDescription(e.target.value)}
              mb={4}
            />
            <Input
              placeholder="Place Location"
              value={placeLocation}
              onChange={(e) => setPlaceLocation(e.target.value)}
              mb={4}
            />
            <Input
              placeholder="Fasilitas"
              value={placeFasilitas}
              onChange={(e) => setPlaceFasilitas(e.target.value)}
              mb={4}
            />
            <Input
              placeholder="Operating Hours"
              value={placeHours}
              onChange={(e) => setPlaceHours(e.target.value)}
              mb={4}
            />
            <Input
              placeholder="Phone Number"
              value={placePhoneNumber}
              onChange={(e) => setPlacePhoneNumber(e.target.value)}
              mb={4}
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              mb={4}
            />
            {placeImage && (
              <Image src={placeImage} alt="Place Image Preview" boxSize="100px" objectFit="cover" />
            )}
            <Button
              bg={"#C66E4E"}
              color={"white"}
              onClick={handleSubmit}
            >
              Update Places
            </Button>
            <Button
              bg={"#FF4C4C"}
              color={"white"}
              onClick={handleDelete}
              mt={4}
              ml="auto"  // Align button to the right
            >
              Delete Place
            </Button>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default UpdatePlace;
