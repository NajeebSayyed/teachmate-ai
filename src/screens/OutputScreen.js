import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { GEMINI_API_KEY } from '@env';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Markdown from 'react-native-markdown-display';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const OutputScreen = () => {
  const { topic, level, difficulty, questionType } = useSelector(
    state => state.quiz,
  );

  const [quiz, setQuiz] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const model = genAI.getGenerativeModel({
          model: 'gemini-2.5-flash',
        });
        const prompt = `Generate a 20 questions test paper on ${topic} for ${level} level students with ${difficulty}, containing ${questionType} Question Types also provide answer key after test. (remember: dont give instructions above the paper, only give topic name)`;
        const result = await model.generateContent(prompt);
        setQuiz(result.response.text());
      } catch (error) {
        console.log('Error generating quiz:', error);
        setQuiz('❌ Failed to generate quiz. Please try again later.');
      } finally {
        setLoading(false);
      }
    })();
  }, [topic, level, difficulty, questionType]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Generated Quiz ⚡️</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Generating your quiz...</Text>
        </View>
      ) : (
        <ScrollView style={styles.quizContainer}>
          <Markdown>{quiz}</Markdown>
          {/* <Text style={styles.quizText}>{quiz}</Text> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintCream',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  quizContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  quizText: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default OutputScreen;
