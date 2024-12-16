import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  VStack, 
  Text, 
  Flex, 
  SimpleGrid
} from "@chakra-ui/react";
import { Sidebar } from "../../components/organisms";
import { AdminHeader } from "../../components/organisms/Header/HeaderAdmin";
import axios from 'axios';

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(0);
  const [placeCount, setPlaceCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate('/login');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Log full response untuk debugging
        const usersResponse = await axios.get('http://localhost:3000/api/v1/auth/users', config);
        const placesResponse = await axios.get('http://localhost:3000/api/v1/place', config);
        const reviewsResponse = await axios.get('http://localhost:3000/api/v1/reviews', config);

        console.log('Users Response:', usersResponse.data);
        console.log('Places Response:', placesResponse.data);
        console.log('Reviews Response:', reviewsResponse.data);

        // Fungsi pembantu untuk mengekstrak count
        const extractCount = (data) => {
          if (typeof data === 'object') {
            // Coba berbagai kemungkinan path untuk count
            return data.count || 
                   data.total || 
                   data.length || 
                   (data.data && (data.data.count || data.data.total || data.data.length)) || 
                   0;
          }
          return 0;
        };

        setUserCount(extractCount(usersResponse.data));
        setPlaceCount(extractCount(placesResponse.data));
        setReviewCount(extractCount(reviewsResponse.data));
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error details:", error.response?.data);
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

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
          width="100%"
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
                {loading ? 'Loading...' : userCount}
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
                {loading ? 'Loading...' : placeCount}
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
                {loading ? 'Loading...' : reviewCount}
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default DashboardAdmin;