import { Text } from 'react-native';
import React from 'react';

const CustomText = ({ text, textStyle, className }) => {
  return (
    <Text
      className={`px-2 p mt-5 rounded-full text-center ${className || ''}`}
      style={[
        {
          fontFamily: 'Nunito-Bold',
          fontSize: 30, // 2xl equivalent
          backgroundColor: '#B0C2C8', // slate gray
          color: '#19183B', // mint cream
        },
        textStyle, // allow overrides
      ]}
    >
      {text}
    </Text>
  );
};

export default CustomText;
