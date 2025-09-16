import { TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const PrimaryButton = ({ text, className, onPress }) => {
  return (
    <TouchableOpacity
      className={`className="h-20 w-[90%] bg-orange-500 rounded-2xl mt-5 self-center px-6 items-center justify-center"
 ${className}`}
      onPress={onPress}
    >
      <CustomText textStyle="mt-0 px-0" text={text} />
    </TouchableOpacity>
  );
};

export default PrimaryButton;
