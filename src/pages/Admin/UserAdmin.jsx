import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HStack,
  VStack,
  Box,
  Text,
  Button,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser, FaEye, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';

const UserAdmin = () => {
  const navigate = useNavigate();

  // Dummy data for the Users table
  const users = [
    { id: 1, name: 'Sarah Amelia', email: 'sarah@gmail.com' },
    { id: 2, name: 'Budi Nugraha', email: 'budi@gmail.com' },
    { id: 3, name: 'Dimas Pratama', email: 'dimas@gmail.com' },
    { id: 4, name: 'Laura Putri', email: 'laura@gmail.com' },
    { id: 5, name: 'Rizky Akbar', email: 'rizky@gmail.com' },
    { id: 6, name: 'Anita Kartika', email: 'anita@gmail.com' },
    { id: 7, name: 'Citra Maharani', email: 'citra@gmail.com' },
    { id: 8, name: 'Andre Bintang', email: 'andre@gmail.com' },
  ];

  return (
    <Box bg="#E8E8E8" minHeight="100vh">
      {/* Header */}
      <Box bg={"#FFFFFF"} w={"full"} h={"100"} px={"8"} display={"flex"} alignItems={"center"}>
        <Image src={Logo} />
      </Box>

      {/* Main Content */}
      <HStack h={"89vh"} display={"flex"} alignItems={"flex-start"} w={"full"} position={"relative"} top={"1vh"}>
        {/* Sidebar */}
        <VStack bg={"#FFFFFF"} w={"252px"} p={"10"} borderRadius={"0 0 10px 0"} h={"full"}>
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
          <Button
            p={"4"}
            w={"full"}
            h={"40px"}
            color={"#000000"}
            backgroundColor={"#C66E4E"}
            justifyContent={"flex-start"}
            onClick={() => navigate('/')}
          >
            <FaHome /> Dashboard
          </Button>
          <Button
            p={"4"}
            w={"full"}
            h={"40px"}
            color={"#000000"}
            backgroundColor={"#FFFFFF"}
            justifyContent={"flex-start"}
            onClick={() => navigate('/users')}
          >
            <FaUser /> Users
          </Button>
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#FFFFFF"} justifyContent={"flex-start"}>
            <MdOutlinePlace /> Places
          </Button>
          <Button p={"4"} w={"full"} h={"40px"} color={"#000000"} backgroundColor={"#FFFFFF"} justifyContent={"flex-start"}>
            <IoIosChatbubbles /> Reviews
          </Button>

          <Button w={"130px"} h={"40px"} backgroundColor={"#C66E4E"} onClick={() => navigate('/')} top={"5"}>
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
          alignItems="flex-start"
        >
          {/* Header Controls */}
          <HStack justifyContent={"space-between"} w={"full"} mb={4}>
            <Button bg={"#C66E4E"} color={"white"}>+ Tambah User</Button>
            <HStack>
              <Select placeholder="Sort By: latest" w={"150px"} />
              <Select placeholder="Show: 10" w={"100px"} />
            </HStack>
          </HStack>

          {/* Search Bar */}
          <InputGroup mb={4} w={"full"}>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input type="text" placeholder="Cari Xxxxxxx" />
          </InputGroup>

          {/* Users Table */}
          <Table variant="simple" colorScheme="gray" size="sm">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Nama</Th>
                <Th>Email</Th>
                <Th>Aksi</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user, index) => (
                <Tr key={user.id}>
                  <Td>{index + 1}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton icon={<FaEye />} aria-label="View" size="sm" />
                      <IconButton icon={<FaEdit />} aria-label="Edit" size="sm" />
                      <IconButton icon={<FaTrash />} aria-label="Delete" size="sm" />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>
      </HStack>
    </Box>
  );
};

export default UserAdmin;
