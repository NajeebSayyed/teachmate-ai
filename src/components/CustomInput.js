import { TextInput, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  className,
  ...props
}) => {
  return (
    <View>
      {label && (
        <CustomText className="text-base text-black mb-2">{label}</CustomText>
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#32343E"
        value={value}
        onChangeText={onChangeText}
        className={`h-20 w-[90%] text-lg text-black bg-blue-50 rounded-2xl mt-2 self-center px-6 ${className}`}
        {...props}
      />
    </View>
  );
};

export default CustomInput;
