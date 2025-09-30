// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Wait 2 seconds then go to Home
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 h-full w-full justify-center self-center bg-mintCream">
      <Text
        className="text-darkBlue self-center"
        style={{ fontFamily: 'Nunito-Bold', fontSize: 50 }}
      >
        TeachMate
      </Text>
      <CustomText text="Your study companion" className="self-center" />
    </View>
  );
};

export default SplashScreen;
