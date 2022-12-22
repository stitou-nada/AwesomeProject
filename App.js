import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Table from './component/table';

export default function App() {

  const[name, setname]= useState("nada");
  const[age, setAge]= useState("21");

  const handlePress=()=>{
        alert('hello')
  }
  return (
    <View style={styles.container}>
      <Text></Text>
      <Button onPress={handlePress} title='Click'></Button>
      <StatusBar style="auto" />
      <Table name={name} />
      <Table name={age} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
