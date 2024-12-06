import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  MapPin,
  Building2,
  MessageCircleQuestion,
  Hand,
  Info,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TentangKami = () => {
  const navigate = useNavigate();

  const missionItems = [
    {
      Icon: MapPin,
      title: "Menjadi Panduan Utama",
      description:
        "Membantu kamu menemukan tempat nongkrong terbaik yang sesuai kebutuhanmu, dari ruang kerja nyaman hingga lokasi santai bersama teman.",
    },
    {
      Icon: Hand,
      title: "Meningkatkan Koneksi Sosial",
      description:
        "Mendukung momen kebersamaan dengan pilihan tempat yang pas untuk interaksi dan relaksasi.",
    },
    {
      Icon: Building2,
      title: "Mendukung usaha lokal",
      description:
        "Membantu usaha lokal di Yogyakarta mendapatkan visibilitas lebih besar melalui platform kami.",
    },
  ];

  const whyChooseItems = [
    {
      Icon: MessageCircleQuestion,
      title: "Memiliki beragam pilihan",
      description:
        "Temukan berbagai tempat nongkrong yang sesuai dengan kebutuhanmu, mulai dari yang tenang hingga yang seru.",
    },
    {
      Icon: Info,
      title: "Memiliki Informasi Lengkap dan Terpercaya",
      description:
        "Setiap tempat dilengkapi dengan deskripsi detail, alamat lengkap, dan tautan langsung ke Google Maps.",
    },
    {
      Icon: Star,
      title: "Ulasan Terpercaya",
      description:
        "Baca ulasan dari pengunjung sebelumnya untuk memudahkanmu memilih tempat yang tepat.",
    },
  ];

  const SectionHeader = ({ title, isButton = false, onClick }) => (
    <Flex w="full" justifyContent="center" my={8}>
      {isButton ? (
        <Button
          onClick={onClick}
          bg="#C66E4E"
          color="white"
          px={6}
          py={5}
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
        <HStack key={index} alignItems="start" spacing={4} w="full">
          <Icon size={30} color="#C66E4E" />
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
    <Box minH="100vh" bg="white" color="black" pt={20} pb={8} px={[4, 10]}>
      <Container maxW="4xl">
        <Heading
          textAlign="center"
          color="#AD5738"
          mb={6}
          fontSize={["3xl", "5xl"]}
          fontWeight="bold"
          pt={12}
        >
          TENTANG KAMI
        </Heading>
        <Text
          fontSize={["lg", "xl"]}
          fontWeight="semibold"
          textAlign="center"
          mb={8}
        >
          Nongkrong bukan hanya soal waktu luang, tapi tentang menciptakan momen
          bermakna. Bersama{" "}
          <Text as="span" color="orange.600" fontWeight="bold">
            FindYourPlace
          </Text>
          , kami membantu mewujudkan moment berhargamu.
        </Text>
        <SectionHeader title="Misi Kami" />
        <Box mt={4}>
          <ItemSection items={missionItems} />
        </Box>
        <SectionHeader title="Mengapa Memilih Kami" />
        <Box mt={4}>
          <ItemSection items={whyChooseItems} />
        </Box>
        <Text
          fontSize="md"
          fontWeight="medium"
          textAlign="center"
          mt={8}
          mb={8}
          fontStyle={"italic"}
        >
          Bersama{" "}
          <Text as="span" color="orange.600" fontWeight="bold">
            FindYourPlace
          </Text>
          , pengalaman nongkrongmu jadi lebih mudah dan menyenangkan.
        </Text>
        <SectionHeader
          title="Telusuri Sekarang"
          isButton
          onClick={() => navigate("/daftar-tempat")}
        />
      </Container>
    </Box>
  );
};

export default TentangKami;
