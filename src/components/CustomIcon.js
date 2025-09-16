import { TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CustomIcon = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="mx-2  ">
      <Image source={icon} className="w-12 h-12  " resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default CustomIcon;
