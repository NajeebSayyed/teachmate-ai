// CustomButton.js
import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  onPress,
  className,
  textClassName,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      className={`bg-darkBlue rounded-2xl  h-20 w-80 items-center justify-center active:opacity-80 ${className}`}
      onPress={onPress}
    >
      <Text
        className={`text-white  text-3xl ${textClassName || ''}`}
        style={textStyle}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
