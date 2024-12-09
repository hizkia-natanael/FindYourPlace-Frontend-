import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  VStack, 
  HStack, 
  Image, 
  Text, 
  Flex, 
  Spacer, 
  Container,
  SimpleGrid
} from "@chakra-ui/react";
import { Sidebar } from "../../components/organisms";
import { AdminHeader } from "../../components/organisms/Header/HeaderAdmin";

const DashboardAdmin = () => {
  const navigate = useNavigate();

  return (
    <Flex 
      direction="column" 
      minHeight="100vh" 
      bg="#E8E8E8"
    >
      {/* Header */}
      <AdminHeader />

      {/* Main Content Area */}
      <Flex 
        flex={1} 
        mt={4} 
        mx={4}
      >
        {/* Sidebar */}
        <Box 
          width="250px" 
          mr={4}
        >
          <Sidebar />
        </Box>

        {/* Main Dashboard Content */}
        <VStack 
          spacing={5} 
          align="stretch"
        >
          {/* Dashboard Cards */}
          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            spacing={4}
            gap={6}
          >
            {/* Total Users Card */}
            <Box
              bg="white"
              borderRadius="lg"
              p={4}
              boxShadow="md"
            >
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                mb={2}
                color={"black"}
              >
                Total Users
              </Text>
              <Text 
                color="gray.600"
                fontSize="md"
              >
                Total users yang terdaftar
              </Text>
              <Text 
                mt={4} 
                fontSize="2xl" 
                fontWeight="bold" 
                color="blue.500"
              >
                0
              </Text>
            </Box>

            {/* Total Places Card */}
            <Box
              bg="white"
              borderRadius="lg"
              p={4}
              boxShadow="md"
            >
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                mb={2}
                color={"black"}
              >
                Total Places
              </Text>
              <Text 
                color="gray.600"
                fontSize="md"
              >
                Total Tempat yang telah dimasukan Admin
              </Text>
              <Text 
                mt={4} 
                fontSize="2xl" 
                fontWeight="bold" 
                color="green.500"
              >
                0
              </Text>
            </Box>

            {/* Total Reviews Card */}
            <Box
              bg="white"
              borderRadius="lg"
              p={4}
              boxShadow="md"
            >
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                mb={2}
                color={"black"}
              >
                Total Reviews
              </Text>
              <Text 
                color="gray.600"
                fontSize="md"
              >
                Total review yang telah diulas user
              </Text>
              <Text 
                mt={4} 
                fontSize="2xl" 
                fontWeight="bold" 
                color="purple.500"
              >
                0
              </Text>
            </Box>
          </SimpleGrid>

          {/* Additional Dashboard Sections can be added here */}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default DashboardAdmin;