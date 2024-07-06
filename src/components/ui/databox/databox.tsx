import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaChurch, FaUsers, FaDollarSign, FaBell } from "react-icons/fa";

interface DataBoxProps {
  type:
    | "Total church"
    | "Total users"
    | "active users"
    | "notifications"
    | "active churches";
  data: number;
}

const icons = {
  "Total church": FaChurch,
  "Total users": FaUsers,
  "active users": FaDollarSign,
  notifications: FaBell,
  "active churches": FaBell,
};

const colors = {
  "Total church": "#00D1FF",
  "Total users": "#FF00B8",
  "active users": "#FFD700",
  notifications: "#FF6347",
  "active churches": "#FF6347",
};

const DataBox: React.FC<DataBoxProps> = ({ type, data }) => {
  const IconComponent = icons[type];
  const bgColor = colors[type];

  return (
    <Box
      justifyContent="start"
      gap="1rem"
      background={"shade.3"}
      borderRadius="10px"
      p="1.2em"
      display="flex"
    >
      <Flex
        align="center"
        justifyContent="center"
        bg={bgColor}
        borderRadius="50%"
        p="1.2rem"
        w="3.4rem"
        h="3.4rem"
        color="black.1"
      >
        <Icon as={IconComponent} fontSize="28px" />
      </Flex>
      <Flex justify="start" flexDirection="column" alignItems="start">
        <Text color="white" fontSize="2xl" fontWeight="bold">
          {data}
        </Text>
        <Text> {type.charAt(0).toUpperCase() + type.slice(1)}</Text>
      </Flex>
    </Box>
  );
};

export default DataBox;
