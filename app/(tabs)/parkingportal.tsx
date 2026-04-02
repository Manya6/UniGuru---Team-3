import { Text, View, StyleSheet } from 'react-native';

export default function ParkingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Parking Portal screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
