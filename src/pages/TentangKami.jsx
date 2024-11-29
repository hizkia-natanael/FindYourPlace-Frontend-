import React from 'react';
import { Box, VStack, HStack, Heading, Text, Container, Button, Flex } from '@chakra-ui/react';
import { MapPin, Building2, MessageCircleQuestion, Hand, Info, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TentangKami = () => {
  const navigate = useNavigate();

  const missionItems = [
    {
      Icon: MapPin,
      title: "Menjadi Panduan Utama",
      description: "Membantu kamu menemukan tempat nongkrong terbaik yang sesuai kebutuhanmu, dari ruang kerja nyaman hingga lokasi santai bersama teman."
    },
    {
      Icon: Hand,
      title: "Meningkatkan Koneksi Sosial",
      description: "Mendukung momen kebersamaan dengan pilihan tempat yang pas untuk interaksi dan relaksasi."
    },
    {
      Icon: Building2,
      title: "Mendukung usaha lokal",
      description: "Membantu usaha lokal di Yogyakarta mendapatkan visibilitas lebih besar melalui platform kami."
    }
  ];

  const whyChooseItems = [
    {
      Icon: MessageCircleQuestion,
      title: "Memiliki beragam pilihan",
      description: "Temukan berbagai tempat nongkrong yang sesuai dengan kebutuhanmu, mulai dari yang tenang hingga yang seru."
    },
    {
      Icon: Info,
      title: "Memiliki Informasi Lengkap dan Terpercaya",
      description: "Setiap tempat dilengkapi dengan deskripsi detail, alamat lengkap, dan tautan langsung ke Google Maps."
    },
    {
      Icon: Star,
      title: "Ulasan Terpercaya",
      description: "Baca ulasan dari pengunjung sebelumnya untuk memudahkanmu memilih tempat yang tepat."
    }
  ];

  const SectionHeader = ({ title, isButton = false, onClick }) => (
    <Flex w="full" justifyContent="center" my={4}>
      {isButton ? (
        <Button
          onClick={onClick}
          bg="#C66E4E"
          color="white"
          px={6}
          py={3}
          fontSize="xl"
          fontWeight="semibold"
          _hover={{ bg: "#a6553f" }}
          boxShadow="md"
          transition="all 0.3s"
          _active={{ boxShadow: "sm" }}
        >
          {title}
        </Button>
      ) : (
        <Heading 
          bg="#C66E4E" 
          color="white" 
          px={6} 
          py={3} 
          fontSize="xl" 
          fontWeight="semibold"
          borderRadius="lg"
          boxShadow="md"
        >
          {title}
        </Heading>
      )}
    </Flex>
  );

  const ItemSection = ({ items }) => (
    <VStack w="full" px={4} spacing={4} alignItems="flex-start">
      {items.map(({ Icon, title, description }, index) => (
        <HStack 
          key={index} 
          alignItems="start" 
          spacing={4}
          w="full"
        >
          <Icon size={30} color='#C66E4E' />
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="black">
              {title}
            </Text>
            <Text fontSize="sm" color="#373434">
              {description}
            </Text>
          </Box>
        </HStack>
      ))}
    </VStack>
  );

  return (
    <Box 
      minH="100vh" 
      bg="white" 
      color="black" 
      pt={20} 
      pb={8} 
      px={[4, 10]}
    >
      <Container maxW="4xl">
        {/* Centered "TENTANG KAMI" heading */}
        <Heading 
          textAlign="center" 
          color="#AD5738" 
          mb={6} 
          fontSize={["3xl", "5xl"]} 
          fontWeight="bold"
        >
          TENTANG KAMI
        </Heading>

        {/* Centered introductory paragraph */}
        <Text 
          fontSize={["lg", "xl"]} 
          fontWeight="semibold" 
          textAlign="center" 
          mb={8}
        >
          NONGKRONG BUKAN HANYA SOAL WAKTU LUANG, TAPI TENTANG MENCIPTAKAN MOMEN BERMAKNA. 
          BERSAMA FINDYOURPLACE, KAMI BANTU WUJUDKAN ITU.
        </Text>

        {/* "Misi Kami" section */}
        <SectionHeader title="Misi Kami" />
        <ItemSection items={missionItems} />

        {/* "Mengapa Memilih Kami" section */}
        <SectionHeader title="Mengapa Memilih Kami" />
        <ItemSection items={whyChooseItems} />

        {/* Additional paragraph */}
        <Text 
          fontSize="md" 
          fontWeight="medium" 
          textAlign="center" 
          mt={8} 
          mb={8}
        >
          Bersama FindYourPlace, pengalaman nongkrongmu jadi lebih mudah dan menyenangkan.
        </Text>

        {/* Centered button */}
        <SectionHeader
          title="Telusuri Sekarang"
          isButton
          onClick={() => navigate('/telusuri')} 
        />
      </Container>
    </Box>
  );
};

export default TentangKami;