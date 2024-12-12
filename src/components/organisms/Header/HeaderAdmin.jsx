import React from "react";
import { 
  Box, 
  Flex, 
  Image, 
  Spacer 
} from "@chakra-ui/react";
import Logo from "../../../assets/logo.svg";

export const AdminHeader = () => {
  return (
    <Box 
      as="header" 
      bg="white" 
      py={4} 
      px={8} 
      boxShadow="sm"
    >
      <Flex align="center">
        <Image 
          src={Logo} 
          alt="Logo" 
          maxHeight="50px" 
          objectFit="contain" 
        />
        <Spacer />
        {/* You can add header actions here if needed */}
      </Flex>
    </Box>
  );
};