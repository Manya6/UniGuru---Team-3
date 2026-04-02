import { Text, View, StyleSheet } from 'react-native';

export default function LabequipScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lab Equipment screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
