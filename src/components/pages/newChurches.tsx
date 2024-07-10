import { useRouter } from "next/router";
import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { newlyRegisteredChurches } from "@/data/churchData";
import EditableBox from "@/components/ui/Editable";
import ContentLayout from "@/components/layouts/contentLayout";
import Image from "next/image";
import { useApiStore } from "@/store/zusatndStore";

const NewlyRegisteredChurchDetail = () => {
  const { newlyRegistered, setNewlyRegistered } = useApiStore();
  const router = useRouter();
  const { name } = router.query;

  const decodedName = decodeURIComponent(name as string);

  const initialChurchIndex = newlyRegistered.findIndex(
    (ch) => ch.churchName.toLowerCase() === decodedName.toLowerCase()
  );
  const [currentChurchIndex, setCurrentChurchIndex] = useState(
    initialChurchIndex >= 0 ? initialChurchIndex : 0
  );
  const church = newlyRegistered[currentChurchIndex];

  if (!church) {
    return <Text>Church not found</Text>;
  }

  // const addressParts = church.location.split(", ");
  const address = church.address;
  const city = church.city;
  const postalCode = church.zipCode;
  const country = church.county ? church.county : "Nigeria"; // subject to change

  const navigateToNextChurch = () => {
    const nextIndex = (currentChurchIndex + 1) % newlyRegistered.length;
    setCurrentChurchIndex(nextIndex);
    router.push(
      `/superadmin/churches/newly-registered/${encodeURIComponent(
        newlyRegistered[nextIndex].churchName
      )}`
    );
  };

  const navigateToPreviousChurch = () => {
    const previousIndex =
      (currentChurchIndex - 1 + newlyRegistered.length) %
      newlyRegistered.length;
    setCurrentChurchIndex(previousIndex);
    router.push(
      `/superadmin/churches/newly-registered/${encodeURIComponent(
        newlyRegistered[previousIndex].churchName
      )}`
    );
  };

  const navigateBackToParentRoute = () => {
    router.push("/superadmin/churches");
  };

  return (
    <ContentLayout>
      <Box display="flex" flexDir="column" gap="5rem" p="3rem">
        <Box
          bg="shade.3"
          p="3rem"
          borderRadius="10px"
          display="flex"
          flexDir="column"
          gap="3rem"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Information for {church.churchName}
          </Text>
          <Box>
            <Box position="relative" w="40%" p="8rem" h="100%">
              <Image
                src="/church.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Description
            </Text>
            <EditableBox defaultValue={church.description} />
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Email
            </Text>
            <EditableBox defaultValue={church.email} />
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Website
            </Text>
            <EditableBox defaultValue={`www.${church.churchName}.com`} />
          </Box>
        </Box>
        <Box
          bg="shade.3"
          p="3rem"
          borderRadius="10px"
          display="flex"
          flexDir="column"
          gap="3rem"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Location
          </Text>
          <Box display="flex" flexDir="column" gap="3rem">
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Address
              </Text>
              <EditableBox defaultValue={address} />
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                City
              </Text>
              <EditableBox defaultValue={city} />
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Postal Code
              </Text>
              <EditableBox defaultValue={`${postalCode}`} />
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Country
              </Text>
              <EditableBox defaultValue={country} />
            </Box>
          </Box>
        </Box>
        <Box
          bg="shade.3"
          p="3rem"
          borderRadius="10px"
          display="flex"
          flexDir="column"
          gap="3rem"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Registration Document:
          </Text>
          <Box
            position="relative"
            w="10%"
            p="4rem"
            h="100%"
            className="flex justify-start"
          >
            <Image
              src="/doc.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box>
            <Button
              colorScheme="blue"
              mr={2}
              as="a"
              href={church.doc}
              target="_blank"
            >
              View
            </Button>
            <Button colorScheme="green" as="a" href={church.doc} download>
              Download
            </Button>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap="2rem">
            <Button
              bg="primary"
              onClick={navigateToPreviousChurch}
              disabled={newlyRegistered.length === 1}
            >
              Previous
            </Button>
            <Button
              bg="primary"
              onClick={navigateToNextChurch}
              disabled={newlyRegistered.length === 1}
            >
              Next
            </Button>
          </Box>
          <Button colorScheme="red" onClick={navigateBackToParentRoute}>
            Exit
          </Button>
        </Box>
      </Box>
    </ContentLayout>
  );
};

export default NewlyRegisteredChurchDetail;
