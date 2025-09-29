import { TextInput, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const CustomInput = ({ title, className, value, onChangeText, text }) => {
  return (
    <View className="w-full items-center">
      <CustomText text={text} className="self-start ml-6" />
      <TextInput
        multiline={true}
        placeholder={title}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#32343E"
        className={` border-2  border-darkBlue  h-auto w-[90%] text-2xl text-darkBlue font-semibold bg-blue-50 rounded-3xl mt-2 self-center  ${className}`}
      />
    </View>
  );
};

export default CustomInput;
