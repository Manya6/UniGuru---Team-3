import { Text, View, StyleSheet } from 'react-native';

export default function CarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Car Reservation screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
