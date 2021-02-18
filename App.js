import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DrawerLayoutAndroid, FlatList, StyleSheet, Text, View, Image } from 'react-native';

import {JOBS} from './data/dummy-data';
import JobItem from './components/JobItem';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
      data = {JOBS}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => {
        return <JobItem 
        title = {item.title}
        company = {item.company}
        imageURL = {item.imageURL}
        tags = {item.tags}
        type = {item.type}
        time = {item.time}
              />
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E3E3',
    alignItems: 'center',
    marginTop: 50,
  },
});
