import { Button } from '@react-navigation/elements';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function AccessibilityScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility Hub</Text>
      <Text style={styles.text1}>Find and book resources according to your needs.</Text>
      <View style={styles.divider} />
      <Text style={styles.smallTitle}>Accessibility Mode</Text>
      <Text style={styles.text1}>Choose your accessibility preferences.</Text>


      <Pressable style = {styles.button}>
      <Text style={styles.buttonText}>Book</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text1: {
    color: '#000',
    fontSize: 20,
    textAlign: "left",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  button: {
    width: 100,
    height: 20,
    backgroundColor: "#3097E0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  title:{
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  smallTitle:{
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text2: {
    color: '#000',
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "left",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
