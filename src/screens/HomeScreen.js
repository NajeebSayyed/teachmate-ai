import { View } from 'react-native';
import React from 'react';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-mintCream items-center ">
      <CustomText
        text="🎯 AI-Powered Quizzes"
        textStyle={{
          marginTop: '45%',
        }}
      />
      <CustomText text="⚡ Difficulty Control" />
      <CustomText text="📑 Export Tests " />
      <CustomText
        text="Generate your quiz!"
        textStyle={{
          marginTop: 30,
          backgroundColor: '#E7F2EF',
          color: '#4E616A',
        }}
      />
      <CustomButton
        title="Lets Start !"
        className="absolute bottom-60 self-center"
        textStyle={{ fontFamily: 'Nunito-Bold', fontSize: 35 }}
        onPress={() => navigation.navigate('GenerateScreen')}
      />
    </View>
  );
};

export default HomeScreen;
