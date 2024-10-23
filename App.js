import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity
          onPress={handleSubtract}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity
          onPress={handleAdd}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  buttonWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 2,
  },
  countText: {
    fontSize: 20,
    fontWeight: 'medium',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'medium',
  },
});
