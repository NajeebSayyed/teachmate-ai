import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import SecondaryText from '../components/SecondaryText';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-mintCream items-center ">
      <CustomText
        text="Teach Mate"
        textStyle={{
          fontSize: 45,
          color: '#19183B',
        }}
      />
      <CustomText
        text="Why Use TeachMate AI?"
        textStyle={{
          marginTop: '30%',
        }}
      />

      <SecondaryText text="🎯 AI-Powered Quizzes" />
      <SecondaryText text="🎓 Grade-Based Quizzes" />
      <SecondaryText text="⚡ Difficulty Control" />
      <SecondaryText text="📑 Export Tests " />
      <CustomText
        text="Generate your first quiz!"
        textStyle={{
          marginTop: 30,
        }}
      />

      <CustomButton
        title="Lets Start !"
        className="absolute bottom-40 self-center"
        textStyle={{ fontFamily: 'Nunito-Bold', fontSize: 35 }}
        onPress={() => navigation.navigate('GenerateScreen')}
      />
    </View>
  );
};

export default HomeScreen;
