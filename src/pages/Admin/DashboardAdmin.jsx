import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Components
import { Sidebar } from "../../components/organisms";
import { AdminHeader } from "../../components/organisms/Header/HeaderAdmin";

// Chakra UI Components
import { 
  Box, 
  VStack, 
  Text, 
  Flex, 
  SimpleGrid,
  Button
} from "@chakra-ui/react";

// Constants
const API_BASE_URL = 'https://findyourplace-backend-production.up.railway.app/api/v1';
const API_ENDPOINTS = {
  users: `${API_BASE_URL}/auth/users`,
  places: `${API_BASE_URL}/place`,
  reviews: `${API_BASE_URL}/reviews`
};

// Dashboard Card Component
const DashboardCard = ({ title, description, count, loading, color }) => (
  <Box
    bg="white"
    borderRadius="lg"
    p={6}
    boxShadow="md"
    transition="transform 0.2s"
    _hover={{ transform: 'translateY(-2px)' }}
  >
    <Text 
      fontSize="xl" 
      fontWeight="bold" 
      mb={2}
      color="black"
    >
      {title}
    </Text>
    <Text 
      color="gray.600"
      fontSize="md"
    >
      {description}
    </Text>
    <Text 
      mt={4} 
      fontSize="2xl" 
      fontWeight="bold" 
      color={color}
    >
      {loading ? 'Loading...' : count}
    </Text>
  </Box>
);

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // success, error, info, etc.

  // State
  const [dashboardData, setDashboardData] = useState({
    users: 0,
    places: 0,
    reviews: 0
  });
  const [loading, setLoading] = useState(true);

  // Helper function to extract count from API response
  const extractCount = (data) => {
    console.log('Processing data:', data);
    
    if (Array.isArray(data)) {
      return data.length;
    }
    
    if (typeof data === 'object' && data !== null) {
      // If data is in data property and is an array
      if (data.data && Array.isArray(data.data)) {
        return data.data.length;
      }
      
      // Check for standard count properties
      if (data.count !== undefined) return data.count;
      if (data.total !== undefined) return data.total;
      if (data.data?.count !== undefined) return data.data.count;
      if (data.data?.total !== undefined) return data.data.total;
    }
    
    return 0;
  };

  // Fetch data from API
  const fetchDashboardData = async () => {
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

      // Fetch all data concurrently
      const [usersRes, placesRes, reviewsRes] = await Promise.all([
        axios.get(API_ENDPOINTS.users, config),
        axios.get(API_ENDPOINTS.places, config),
        axios.get(API_ENDPOINTS.reviews, config)
      ]);

      // Log responses for debugging
      console.log('API Responses:', {
        users: usersRes.data,
        places: placesRes.data,
        reviews: reviewsRes.data
      });

      // Update state with extracted counts
      setDashboardData({
        users: extractCount(usersRes.data),
        places: extractCount(placesRes.data),
        reviews: extractCount(reviewsRes.data)
      });

      // Show success toast
      showToastMessage("Data fetched successfully!");

    } catch (error) {
      console.error('API Error:', error);
      
      showToastMessage("Error fetching data!", "error");

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [navigate]); // Only re-run if navigate function changes

  const dashboardCards = [
    {
      title: "Total Users",
      description: "Total users yang terdaftar",
      count: dashboardData.users,
      color: "blue.500"
    },
    {
      title: "Total Places",
      description: "Total Tempat yang telah dimasukan Admin",
      count: dashboardData.places,
      color: "green.500"
    },
    {
      title: "Total Reviews",
      description: "Total review yang telah diulas user",
      count: dashboardData.reviews,
      color: "purple.500"
    }
  ];

  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide toast after 3 seconds
  };

  return (
    <Flex 
      direction="column" 
      minHeight="100vh" 
      bg="#E8E8E8"
    >
      <AdminHeader />

      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 p-4 rounded shadow-lg text-white ${toastType === "error" ? "bg-red-500" : "bg-green-500"}`}>
          {toastMessage}
        </div>
      )}

      <Flex flex={1} mt={4} mx={4}>
        <Box width="250px" mr={4}>
          <Sidebar />
        </Box>

        <VStack 
          spacing={5} 
          align="stretch"
          width="100%"
        >
          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            spacing={6}
          >
            {dashboardCards.map((card, index) => (
              <DashboardCard
                key={index}
                title={card.title}
                description={card.description}
                count={card.count}
                loading={loading}
                color={card.color}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>

      <Button onClick={fetchDashboardData}>Fetch Data</Button>
    </Flex>
  );
};

export default DashboardAdmin;