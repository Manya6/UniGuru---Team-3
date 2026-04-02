import { Text, View, StyleSheet } from 'react-native';

export default function StudyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Study Room screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
