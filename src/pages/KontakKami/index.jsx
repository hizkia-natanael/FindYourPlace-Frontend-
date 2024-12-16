import React, { useState } from 'react';
import { Box, Heading, Text, Container, Grid, GridItem, Stack, Flex, Input, Textarea, Button } from '@chakra-ui/react';
import { Mail, MapPinned, Phone, PhoneCall } from 'lucide-react';
import { px } from 'framer-motion';

const KontakKami = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Untuk testing, nanti bisa dikirim ke server
  };

  return (
    <Box bg="white" color="black" pt={20} pb={8} display="flex" justifyContent="center" alignItems="center">
      <Container maxW="4xl">
        {/* Judul "KONTAK" */}
        <Heading
          textAlign="center"
          color="#AD5738"
          mb={6}
          fontSize={["3xl", "5xl"]}
          fontWeight="bold"
          pt={12}
        >
          KONTAK
        </Heading>

        {/* Penjelasan singkat */}
        <Text
          fontSize={"l"}
          fontWeight="medium"
          textAlign="center"
          mb={9}
        >
          Jika Anda memiliki pertanyaan atau ingin memberikan masukan, kami sangat menghargainya. 
          Silakan hubungi kami melalui kontak yang tertera atau formulir di bawah ini.
        </Text>

        <Box 
              bg="white" 
              h="350px" 
              border="2px" 
              borderColor="black" 
              borderRadius="md" 
              boxShadow="lg"
              p={6}
              justifyContent={"center"}
            >
              <Stack spacing={4}>
                {/* Alamat */}
                <Flex align="center">
                  <MapPinned size={24} color="#AD5738" />
                  <Text fontSize="xl" fontWeight="bold" ml={3}>Alamat</Text>
                </Flex>
                <Text fontSize="md" ml={10}>Jl. CozyFinders, No. 03, Kelurahan VocaBee, Kecamatan FS-B, Yogyakarta</Text>

                {/* Telepon */}
                <Flex align="center">
                  <Phone size={24} color="#AD5738" />
                  <Text fontSize="xl" fontWeight="bold" ml={3}>Telepon</Text>
                </Flex>
                <Text fontSize="md" ml={10}>(0283) 1188271</Text>

                {/* Email */}
                <Flex align="center">
                  <Mail size={24} color="#AD5738" />
                  <Text fontSize="xl" fontWeight="bold" ml={3}>Email</Text>
                </Flex>
                <Text fontSize="md" ml={10}>findyourplace@gmail.com</Text>

                {/* WhatsApp */}
                <Flex align="center">
                  <PhoneCall size={24} color="#AD5738" />
                  <Text fontSize="xl" fontWeight="bold" ml={3}>WhatsApp</Text>
                </Flex>
                <Text fontSize="md" ml={10}>+62 811 2345 6789</Text>
              </Stack>
            </Box>
      </Container>
    </Box>
  );
};

export default KontakKami;
