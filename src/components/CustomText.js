import { Text } from 'react-native';
import React from 'react';

const CustomText = ({ text, textStyle, className }) => {
  return (
    <Text
      className={`${className || ''}`}
      style={[
        {
          fontFamily: 'Nunito-Bold',
          fontSize: 30,
          color: '#4E616A',
        },
        textStyle, // ✅ allows overrides
      ]}
    >
      {text}
    </Text>
  );
};

export default CustomText;
