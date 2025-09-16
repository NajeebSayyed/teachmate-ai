import { TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({ title, className, value, onChangeText }) => {
  return (
    <TextInput
      placeholder={title}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor="#32343E"
      // secureTextEntry={secureTextEntry}
      className={`h-20 w-[90%] text-lg text-black bg-blue-50 rounded-2xl mt-2 self-center px-6 ${className}`}
    />
  );
};

export default CustomInput;
