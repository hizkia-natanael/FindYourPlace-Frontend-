import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  HStack,
  VStack,
  Box,
  Text,
  Button,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import usePlaceStore from "../../config/placeStore";
import usePlaceFormStore from "../../config/placeFormStore";
import { Upload } from "../../components/atoms";
import { Sidebar } from "../../components/organisms";
const PlacesAdmin = () => {
  const { form, imgPreview, setFormData, setImgPreview, resetFormData } =
    usePlaceFormStore();
  const { getPlaceById, getPlace, addPlace, updatePlace } = usePlaceStore();
  const { name, description, googleMapsLink, address } = form;
  const { isUpdate, setIsUpdate } = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // const [placeName, setPlaceName] = useState("");
  // const [placeDescription, setPlaceDescription] = useState("");
  // const [placeLocation, setPlaceLocation] = useState("");
  // const [placeFasilitas, setPlaceFasilitas] = useState("");
  // const [placeHours, setPlaceHours] = useState("");
  // const [placePhoneNumber, setPlacePhoneNumber] = useState("");
  // const [placeImage, setPlaceImage] = useState(null);

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      const place = getPlaceById(id);
      setFormData("name", place.name);
      setFormData("description", place.description);
      setFormData("googleMapsLink", place.googleMapsLink);
      setFormData("address", place.address);
      setFormData("image", place.image);
      setImgPreview(place.image);
    } else {
      resetFormData;
    }
  }, [id, getPlaceById, setFormData, setImgPreview, resetFormData]);

  const onImgUpload = (e) => {
    const file = e.target.files[0];
    setImgPreview(URL.createObjectURL(file));
    setFormData("image", file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updatePlace(id, form);
    } else {
      addPlace(form);
    }
    navigate("/daftar-tempat");
  };

  return (
    <Box bg="#E8E8E8" minHeight="100vh" color={"black"}>
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

        {/* Main Panel */}
        <VStack
          bg={"#FFFFFF"}
          flex={1}
          h={"full"}
          borderRadius={"10px"}
          p={"16"}
          ml={"8"}
          spacing={4}
          gap={"10"}
        >
          {/* Form to Add a Place */}
          <Box
            bg={"#FFFFFF"} // Background diubah menjadi putih
            borderRadius={"10px"}
            p={6}
            boxShadow={"md"}
            w={"100%"}
          >
            {/* Add New Places Title */}
            <Text
              fontSize={"lg"}
              color={"black"}
              fontWeight={"bold"}
              textAlign="center"
            >
              Add New Places
            </Text>

            {/* Place Name */}
            <Input
              placeholder="Place Name"
              value={name}
              onChange={(e) => setFormData("name", e.target.value)}
              mb={4}
            />

            {/* Place Description */}
            <Textarea
              placeholder="Place Description"
              value={description}
              onChange={(e) => setFormData("description", e.target.value)}
              mb={4}
            />

            <Input
              placeholder="Place Addres"
              value={address}
              onChange={(e) => setFormData("address", e.target.value)}
              mb={4}
            />
            {/* Place Location */}
            <Input
              placeholder="Place Location"
              value={googleMapsLink}
              onChange={(e) => setFormData("googleMapsLink", e.target.value)}
              mb={4}
            />

            {/* Fasilitas */}
            {/* <Input
              placeholder="Fasilitas"
              value={placeFasilitas}
              onChange={(e) => setPlaceFasilitas(e.target.value)}
              mb={4}
            /> */}

            {/* Hours */}
            {/* <Input
              placeholder="Operating Hours"
              value={placeHours}
              onChange={(e) => setPlaceHours(e.target.value)}
              mb={4}
            /> */}

            {/* Phone Number */}
            {/* <Input
              placeholder="Phone Number"
              value={placePhoneNumber}
              onChange={(e) => setPlacePhoneNumber(e.target.value)}
              mb={4}
            /> */}

            {/* Place Image */}
            <Upload
              className="mb-4"
              onChange={(e) => onImgUpload(e)}
              src={imgPreview}
            />

            {/* Image Preview */}

            {/* Submit Button */}
            <Button bg={"#C66E4E"} color={"white"} onClick={handleSubmit}>
              Save Places
            </Button>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PlacesAdmin;
