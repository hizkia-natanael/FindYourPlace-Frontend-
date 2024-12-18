import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { Box, HStack, VStack, Image, Text, Button } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";

const UserTambah = () => {
  const navigate = useNavigate();

  // State untuk input form
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/100"
  );
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi Simpan Data
  const handleSave = () => {
    const newUser = {
      profilePic,
      number,
      username,
      email,
      password,
    };
    console.log("Data pengguna yang ditambahkan:", newUser);
    navigate("/users"); // Navigasi ke halaman Users setelah simpan
  };

  return (
    <Box bg="#E8E8E8" minHeight="100vh">
      {" "}
      {/* White background for entire page */}
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
      <HStack
        h={"89vh"}
        display={"flex"}
        alignItems={"flex-start"}
        w={"full"}
        position={"relative"}
        top={"1vh"}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Form */}
        <Box flex="1" p="1">
          <Box bg="white" rounded="lg" shadow="lg" p="6" maxW="600px" mx="auto">
            <Text
              as="h2"
              fontSize="2xl"
              fontWeight="bold"
              mb="6"
              textAlign="center"
            >
              Tambah User
            </Text>

            {/* Form */}
            <form className="space-y-4">
              {/* Profil */}
              <Box textAlign="center" mb="6">
                <Image
                  src={profilePic}
                  alt="Profile Preview"
                  w="100px"
                  h="100px"
                  mx="auto"
                  borderRadius="full"
                  border="1px solid #ddd"
                />
              </Box>

              {/* Input Nomor */}
              <Box>
                <label className="block font-semibold mb-2">Nomor:</label>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Masukkan nomor"
                />
              </Box>

              {/* Input Nama User */}
              <Box>
                <label className="block font-semibold mb-2">Nama User:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Masukkan nama user"
                />
              </Box>

              {/* Input Email */}
              <Box>
                <label className="block font-semibold mb-2">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Masukkan email user"
                />
              </Box>

              {/* Input Kata Sandi */}
              <Box>
                <label className="block font-semibold mb-2">Kata Sandi:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Masukkan kata sandi"
                />
              </Box>

              {/* Tombol Aksi */}
              <Box display="flex" justifyContent="space-between" mt="6">
                <button
                  onClick={() => navigate("/user-admin")}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  ← Kembali
                </button>
                <Button
                  onClick={() => navigate("/user-admin")}
                  bg="#4CAF50"
                  color="white"
                  w={"20"}
                >
                  Simpan
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default UserTambah;
