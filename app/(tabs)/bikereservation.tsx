import { Text, View, StyleSheet } from 'react-native';

export default function BikeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bike Reservation screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
