import { useNavigate } from "react-router-dom";
import { HStack, VStack, Box, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { removeAccessToken } from "../../../utils/tokenManager.js";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAccessToken();
    navigate("/login-admin");
  };

  return (
    <VStack
      bg={"#FFFFFF"}
      w={"252px"}
      p={"10"}
      borderRadius={"0 0 10px 0"}
      minHeight={"100vh"}
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
      <Button
        p={"4"}
        w={"full"}
        h={"40px"}
        color={"#000000"}
        justifyContent={"flex-start"}
        onClick={() => navigate("/admin")}
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
        onClick={() => navigate("/admin/user-admin")}
      >
        <FaUser /> Users
      </Button>
      <Button
        p={"4"}
        w={"full"}
        h={"40px"}
        color={"#000000"}
        backgroundColor={"#FFFFFF"}
        justifyContent={"flex-start"}
        onClick={() => navigate("/admin/admin-place")}
      >
        <MdOutlinePlace /> Places
      </Button>
      <Button
        p={"4"}
        w={"full"}
        h={"40px"}
        color={"#000000"}
        backgroundColor={"#FFFFFF"}
        justifyContent={"flex-start"}
        onClick={() => navigate("/admin/review-admin")}
      >
        <IoIosChatbubbles /> Reviews
      </Button>
      <Button
        w={"130px"}
        h={"40px"}
        backgroundColor={"#C66E4E"}
        onClick={handleLogout}
        top={"5"}
      >
        <MdLogout /> Sign out
      </Button>
    </VStack>
  );
};

export default Sidebar;
