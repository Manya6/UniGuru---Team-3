import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Booking() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity 
        style={styles.backBtn}
        onPress={() => router.replace('/(tabs)/EventList')}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Booking Confirmed 🎉</Text>
      <Text style={styles.subtitle}>Booking ID - UH241664</Text>

      {/* QR CODE */}
      <Image
        source={require('../../assets/images/qrcode.png')}
        style={styles.qr}
      />

      <Text style={styles.heading}>Lindop Building</Text>
      <Text>Seminar Room A154</Text>
      <Text>College Lane Campus</Text>

      <Text style={styles.detail}>Date: 13th March 2026</Text>
      <Text style={styles.detail}>Time: 13:00 - 15:00</Text>
      <Text style={styles.detail}>Duration: 2 Hours</Text>
      <Text style={styles.detail}>Event Type: Seminar Room</Text>
      <Text style={styles.detail}>Attendees: 50</Text>

      <Text style={styles.detail}>
        Facilities: White Board, Microphone, Sound System
      </Text>

      <View style={styles.linkSection}>
        <Text style={styles.link}>Download ↓</Text>
        <Text style={styles.link}>Add to calendar 📅</Text>
        <Text style={styles.link}>Directions 📍</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b5de5',
    padding: 20,
  },

  backBtn: {
    position: 'absolute',
    top: 40,
    left: 5,
  },

  backText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 60,
  },

  subtitle: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },

  qr: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 0.5,
  },

  detail: {
    color: 'white',
    marginTop: 8,
    textAlign: 'left',
  },

  link: {
    marginTop: 10,
    textDecorationLine: 'underline',
    color: 'white',
  },

  linkSection: {
    marginTop: 20,
  },

}
);