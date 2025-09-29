import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomSelectRow = ({
  label,
  options = [],
  multiSelect = false,
  selectedValues = [],
  onChange,
}) => {
  const [selected, setSelected] = useState(selectedValues);

  const toggleOption = option => {
    if (multiSelect) {
      if (selected.includes(option)) {
        const newSelected = selected.filter(o => o !== option);
        setSelected(newSelected);
        onChange && onChange(newSelected);
      } else {
        const newSelected = [...selected, option];
        setSelected(newSelected);
        onChange && onChange(newSelected);
      }
    } else {
      setSelected([option]);
      onChange && onChange(option);
    }
  };

  return (
    <View className="w-full items-start mt-4 ml-8">
      {label && <Text className="text-lg font-bold mb-2">{label}</Text>}

      <View className="flex-row flex-wrap w-[90%]">
        {options.map(option => {
          const isSelected = selected.includes(option);
          return (
            <TouchableOpacity
              key={option}
              className={`px-4 py-2 m-1 rounded-full border ${
                isSelected
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-400'
              }`}
              onPress={() => toggleOption(option)}
            >
              <Text
                className={`text-base ${
                  isSelected ? 'text-white' : 'text-black'
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomSelectRow;
