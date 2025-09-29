import { Text } from 'react-native';
import React from 'react';

const CustomText = ({ text, textStyle, className }) => {
  return (
    <Text
      className={`px-2 p mt-5 rounded-full text-center self-start ml-6  ${
        className || ''
      }`}
      style={[
        {
          fontFamily: 'Nunito-Bold',
          fontSize: 30,
          backgroundColor: '#B0C2C8',
          color: '#19183B',
        },
        textStyle,
      ]}
    >
      {text}
    </Text>
  );
};

export default CustomText;
