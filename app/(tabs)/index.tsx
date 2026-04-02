<<<<<<< HEAD
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UniGuru() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bottomHeaderRow}>
          <Image 
            source={require('../../assets/images/Logo.png')} 
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>List</Text>
          <Text style={styles.search}>🔍</Text>
        </View>

      </View>

      {/* CARD 1 */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Roe Hill</Text>
          <View style={styles.ratingRow}>
            <Text>⭐ 4.5/5</Text>
            <Text style={styles.heart}>❤️</Text>
          </View>
        </View>

        <Text style={styles.address}>10 Roe Hill, Hatfield, AL4 0RQ, United Kingdom</Text>

        <View style={styles.tagRow}>
          <Text style={styles.tag}>Z Type 2 / Tesla</Text>
          <Text style={styles.tag}>3/5</Text>
        </View>

        <Text>Z Card</Text>
        <Text>Z Public Charging Point</Text>
        <Text>Contact 0845 528 0442</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.btn}><Text>Pay</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text>Pre - Book</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text>Direction</Text></TouchableOpacity>
        </View>

        <Text style={styles.footer}>2 Charging Point Available</Text>
      </View>

      {/* CARD 2 */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Bishop Path</Text>
          <View style={styles.ratingRow}>
            <Text>⭐ 3.5/5</Text>
            <Text style={styles.heart}>🤍</Text>
          </View>
        </View>

        <Text style={styles.address}>7 Bishop Path, Hatfield, AL10 9BU, United Kingdom</Text>

        <View style={styles.tagRow}>
          <Text style={styles.tag}>Z CHAdeMO</Text>
          <Text style={styles.tag}>8/8</Text>
        </View>

        <Text>Z Card</Text>
        <Text>Z Private Charging Point</Text>
        <Text>Contact 0735 851 2431</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.btn}><Text>Pay</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text>Pre - Book</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text>Direction</Text></TouchableOpacity>
        </View>

        <Text style={styles.footer}>Fully Booked</Text>
      </View>

      {/* CARD 3 */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Roberts Way</Text>
          <View style={styles.ratingRow}>
            <Text>⭐ 4.0/5</Text>
            <Text style={styles.heart}>❤️</Text>
          </View>
        </View>

        <Text style={styles.address}>11 Avenue, Hatfield, AL10 9UA, United Kingdom</Text>

        <View style={styles.tagRow}>
          <Text style={styles.tag}>Z CCS</Text>
          <Text style={styles.tag}>1/2</Text>
        </View>

        <Text>Z Card</Text>
        <Text>Z Public Charging Point</Text>
        <Text>Contact 0808 281 3508</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.btn}><Text>Pay</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text>Pre - Book</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text>Direction</Text></TouchableOpacity>
        </View>

        <Text style={styles.footer}>1 Charging Point Available</Text>
      </View>
      
    </ScrollView> 
    
    <View style={styles.bottomNav}>

      <TouchableOpacity onPress={() => router.replace('/home')}>
        <Text style={styles.navItem}>⬅️{"\n"}Back</Text>
      </TouchableOpacity>
      
      <TouchableOpacity >
        <Text style={styles.navItem}>🗺️{"\n"}Map</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.navItem}>📋{"\n"}List</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.navItem}>❤️{"\n"}Favourite</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.navItem}>⋯{"\n"}More</Text>
      </TouchableOpacity>

    </View> 
=======
import { Text, View , StyleSheet} from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>test home screen</Text>
      <Link href="/accessibility" style={styles.button}>
        Go to Accessibility screen
      </Link>
>>>>>>> 25c435ad50d0d7259196b8ee63b89afef96cf411
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#ddd',
  },


  header: {
    backgroundColor: '#9b5de5',
    height: 100,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },

  bottomHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    width: 53,
    height: 53,
    resizeMode: 'contain',
    borderRadius: 33,
  },

  search: {
    fontSize: 22,
    color: 'white',
  },
  
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#9b5de5',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },

  ratingRow: {
    flexDirection: 'row',
    gap: 5,
  },

  heart: {
    marginLeft: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  address: {
    color: 'white',
    marginVertical: 5,
  },

  tagRow: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 5,
  },

  tag: {
    backgroundColor: '#6a0dad',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  btn: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
  },

  footer: {
    marginTop: 5,
    fontSize: 12,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#d0b1f7ff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },

  navItem: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
  },


}
);
=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

text: {
  color: '#000',
},

button: {
  fontSize: 20,
  textDecorationLine: 'underline',
  color: '#000',
},
});
>>>>>>> 25c435ad50d0d7259196b8ee63b89afef96cf411
