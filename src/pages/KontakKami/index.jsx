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
    <Box bg="white" color="black" pt={20} pb={8}>
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

        {/* Dua kotak kosong di bawah */}
        <Grid templateColumns="1fr 1fr" gap={6}>
          {/* Kotak Kiri untuk Informasi Kontak */}
          <GridItem>
            <Box 
              bg="white" 
              h="350px" 
              border="2px" 
              borderColor="black" 
              borderRadius="md" 
              boxShadow="lg"
              p={6}
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
          </GridItem>

          {/* Kotak Kanan untuk Formulir Kontak */}
          <GridItem>
            <Box 
              bg="white" 
              h="350px" 
              border="2px" 
              borderColor="black" 
              borderRadius="md" 
              boxShadow="lg"
              p={6}
            >
              <Heading fontSize="xl" fontWeight="bold" mb={4} textAlign={"center"}>Kirim Pesan</Heading>
              
              {/* Formulir */}
              <form onSubmit={handleSubmit}>
                {/* Nama */}
                <Stack spacing={4}>
                  <Input 
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Nama Lengkap"
                    variant="unstyled" // Menggunakan garis bawah
                    borderBottom="2px solid #AD5738"
                    _focus={{ borderBottom: "2px solid #AD5738" }} // Fokus dengan warna garis bawah
                    _placeholder={{
                      lineHeight: "48px", // Placeholder di tengah vertikal
                    }}
                  />

                  {/* Email */}
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    variant="unstyled"
                    borderBottom="2px solid #AD5738"
                    _focus={{ borderBottom: "2px solid #AD5738" }} 
                    _placeholder={{
                      lineHeight: "48px", // Placeholder di tengah vertikal
                    }}
                  />
                  

                  {/* Pesan */}
                  <Textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    placeholder="Isi Pesan"
                    variant="unstyled"
                    borderBottom="2px solid #AD5738"
                    _focus={{ borderBottom: "2px solid #AD5738" }}
                    resize="h" // Agar textarea bisa di-resize secara vertikal
                    _placeholder={{
                      lineHeight: "48px", // Placeholder di tengah vertikal
                    }}
                  />

                  {/* Tombol Kirim */}
                  <Button
                    type="submit"
                    bg="#AD5738"
                    color="white"
                    _hover={{ bg: "#D87B50" }}
                    mt={4}
                    w="full"
                  >
                    Kirim Pesan
                  </Button>
                </Stack>
              </form>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default KontakKami;
