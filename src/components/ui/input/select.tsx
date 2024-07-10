import React from "react";
import { Select, SelectProps } from "@chakra-ui/react";

interface IStyledSelect extends SelectProps {
  set: () => void;
}

const StyledSelect = ({ placeholder, size, w, value, set }: IStyledSelect) => {
  return (
    <Select
      color="white"
      value={value}
      _placeholder={{ color: "black.4" }}
      placeholder={placeholder}
      outlineColor="transparent"
      border="0px"
      focusBorderColor="transparent"
      bg="#373535"
      size={size ? size : "lg"}
      w={w}
    >
      <option value="option1" onClick={() => set}>
        Option 1
      </option>
      <option value="option2" onClick={() => set}>
        Option 2
      </option>
      <option value="option3" onClick={() => set}>
        Option 3
      </option>
    </Select>
  );
};

export default StyledSelect;
