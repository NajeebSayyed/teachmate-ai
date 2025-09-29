import { View } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../components/CustomText';
import CustomInput from '../components/CustomInput';
import { TouchableOpacity, Text } from 'react-native';
import CustomSelect from '../components/CustomSelect';
import CustomButton from '../components/CustomButton';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setQuizInput } from '../redux/Slice';

const levels = [
  'Kindergarten',
  'Primary',
  'Secondary',
  'Higher Secondary',
  'Graduation',
];

const GenerateScreen = () => {
  const [topic, setTopic] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [difficulty, setDifficulty] = useState([]);
  const [questionType, setQuestionType] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGenerate = () => {
    console.log('Topic:', topic);
    console.log('Level:', selectedLevel);
    console.log('Difficulty:', difficulty);
    console.log('Question Types:', questionType);

    dispatch(
      setQuizInput({
        topic,
        level: selectedLevel,
        difficulty,
        questionType,
      }),
    );

    navigation.navigate('OutputScreen');
  };
  return (
    <View className="flex-1 bg-mintCream items-center p-4">
      <CustomInput
        text="Describe your quiz..."
        value={topic}
        onChangeText={setTopic}
      />

      {/*  Level Dropdown */}
      <CustomText text="Level" className="mt-14" />
      <TouchableOpacity
        className="w-[90%] h-16 border-2 border-darkBlue rounded-3xl justify-center px-3 mt-2.5 bg-blue-50"
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <Text className="text-2xl font-semibold text-black">
          {selectedLevel ? selectedLevel : 'Select level'}
        </Text>
      </TouchableOpacity>
      {dropdownOpen && (
        <View className="w-[90%] bg-blue-50 border-2 border-darkBlue rounded-3xl mt-1">
          {levels.map(level => (
            <TouchableOpacity
              key={level}
              className="px-3 py-3 border-t border-darkBlue"
              onPress={() => {
                setSelectedLevel(level);
                setDropdownOpen(false);
              }}
            >
              <Text className="text-xl font-semibold">{level}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/*  Difficulty Multi-Select */}
      <CustomText text="Difficulty" className="mt-14" />
      <CustomSelect
        options={['Easy', 'Medium', 'Hard']}
        multiSelect={true}
        onChange={values => setDifficulty(values)}
      />

      {/*  Question Types Multi-Select */}
      <CustomText text="Question types" className="mt-14" />
      <CustomSelect
        options={['MCQ', 'True/False', 'Short answer']}
        multiSelect={true}
        onChange={values => setQuestionType(values)}
      />

      <CustomButton
        title="Generate Quiz !"
        className="mt-20 self-center"
        textStyle={{ fontFamily: 'Nunito-Bold', fontSize: 35 }}
        onPress={handleGenerate}
      />
    </View>
  );
};

export default GenerateScreen;
