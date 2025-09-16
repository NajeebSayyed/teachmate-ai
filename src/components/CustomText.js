import { Text } from 'react-native';
import React from 'react';

const CustomText = ({ text, textStyle }) => {
  return (
    <Text
      className={`px-6 text-3xl text-white font-semibold mt-5 ${textStyle}`}
    >
      {text}
    </Text>
  );
};

export default CustomText;
