import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HeaderTabs from './src/components/HeaderTabs';
import SearchBar from './src/components/SearchBar';

export default function App() {
  return (
    <SafeAreaView className="">
      <HeaderTabs />
      <SearchBar />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

