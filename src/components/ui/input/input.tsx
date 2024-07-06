import { Input, InputProps } from "@chakra-ui/react";
import React from "react";

interface IstyledInput extends InputProps {
  value: string;
  set: (e: any) => void;
}

const StyledInput = ({ placeholder, type, value, set }: IstyledInput) => {
  return (
    <Input
      value={value}
      onChange={set}
      color="white"
      _placeholder={{ color: "black.4" }}
      placeholder={placeholder}
      outlineColor="transparent"
      border="0px"
      type={type}
      focusBorderColor="transparent"
      bg="#373535"
      p="2rem 1rem"
    />
  );
};

export default StyledInput;
