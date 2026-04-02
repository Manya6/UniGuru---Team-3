import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* LOGO */}
      <Image 
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />

      {/* TITLE */}
      <Text style={styles.title}>Uni Guru</Text>

      {/* BUTTONS */}
      <View style={styles.buttonRow}>

        {/* EV CHARGING */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>EV{"\n"}CHARGING</Text>
        </TouchableOpacity>

        {/* EVENT SPACES */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/EventList')}>
          <Text style={styles.buttonText}>EVENT{"\n"}SPACES</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b5de5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 20,
  },

  button: {
    backgroundColor: '#7b2cbf',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});