import React, { useState } from "react";
import styled from "styled-components";

interface ButtonWithColorPickerProps {
  buttonText: string;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const ButtonWithColorPicker: React.FC<ButtonWithColorPickerProps> = ({
  buttonText,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(""); // State to store selected color

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <StyledContainer>
      <label>Select color:</label>
      <select onChange={(e) => handleColorChange(e.target.value)}>
        <option value="">-- Select Color --</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button style={{ backgroundColor: selectedColor }}>{buttonText}</button>
    </StyledContainer>
  );
};

export default ButtonWithColorPicker;
