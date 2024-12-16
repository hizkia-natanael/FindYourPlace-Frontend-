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
import usePlaceStore from "../../config/placeStore";
import usePlaceFormStore from "../../config/placeFormStore";
import { Upload } from "../../components/atoms";
import { Sidebar } from "../../components/organisms";

const PlacesAdmin = () => {
  const { form, imgPreview, setFormData, setImgPreview, resetFormData } =
    usePlaceFormStore();
  const { getPlaceById, addPlace, updatePlace } = usePlaceStore();
  const { name, description, googleMapsLink, address } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        const place = await getPlaceById(id);
        setFormData("name", place.name);
        setFormData("description", place.description);
        setFormData("googleMapsLink", place.googleMapsLink);
        setFormData("address", place.address);
        setFormData("image", place.image);
        setImgPreview(place.image);
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getPlaceById, setFormData, setImgPreview, resetFormData]);

  const onImgUpload = (e) => {
    const file = e.target.files[0];
    setImgPreview(URL.createObjectURL(file));
    setFormData("image", file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updatePlace(id, form);
    } else {
      addPlace(form);
    }
    navigate("/admin/admin-place");
  };

  return (
    <Box bg="#ffffff" minHeight="100vh" color={"black"}>
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
          {/* Form to Add/Edit a Place */}
          <Box
            bg={"#FFFFFF"} // Background diubah menjadi putih
            borderRadius={"10px"}
            p={6}
            boxShadow={"md"}
            w={"100%"}
          >
            {/* Add/Edit Places Title */}
            <Text
              fontSize={"lg"}
              color={"black"}
              fontWeight={"bold"}
              textAlign="center"
            >
              {isUpdate ? "Edit Place" : "Add New Place"}
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

            {/* Place Address */}
            <Input
              placeholder="Place Address"
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

            {/* Place Image */}
            <Upload
              className="mb-4"
              onChange={(e) => onImgUpload(e)}
              src={imgPreview}
            />

            {/* Submit Button */}
            <Button bg={"#C66E4E"} color={"white"} onClick={handleSubmit}>
              Save Place
            </Button>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PlacesAdmin;
