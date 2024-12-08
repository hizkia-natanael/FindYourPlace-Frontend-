import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HStack, VStack, Box, Text, Button, Image } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from 'react-icons/io';

const DeletePlace = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Mendapatkan ID dari URL
  const [placeName, setPlaceName] = useState('');
  const [placeImage, setPlaceImage] = useState('');

  useEffect(() => {
    // Mendapatkan data tempat berdasarkan ID
    const fetchPlaceData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/places/${id}`);
        const data = await response.json();
        setPlaceName(data.name);
        setPlaceImage(data.image);
      } catch (error) {
        console.error('Error fetching place data:', error);
      }
    };

    fetchPlaceData();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus tempat "${placeName}"?`);
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3000/places/${id}`, {
        method: 'DELETE', // Menggunakan DELETE untuk menghapus data
      });
      alert('Tempat berhasil dihapus!');
      navigate('/places-admin'); // Redirect ke halaman admin
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
              Hapus Tempat
            </Text>

            <Text fontSize={"md"} color={"black"} textAlign="center" mt={4}>
              Apakah Anda yakin ingin menghapus tempat <b>"{placeName}"</b>?
            </Text>

            {placeImage && (
              <Image
                src={placeImage}
                alt="Place Image"
                boxSize="150px"
                objectFit="cover"
                mx="auto"
                mt={4}
              />
            )}

            <Button
              bg={"#C66E4E"}
              color={"white"}
              onClick={handleDelete}
              mt={6}
              mx="4"
            >
              Hapus Tempat
            </Button>
            <Button
              bg={"gray.500"}
              color={"white"}
              onClick={() => navigate('/places-admin')}
              mt={6}
              mx="4"
            >
              Batalkan
            </Button>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default DeletePlace;
