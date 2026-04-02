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
            <Text style={styles.title}>Forum Theatre</Text>
            <View style={styles.ratingRow}>
                <Text>⭐ 4.5/5</Text>
                <Text style={styles.heart}>❤️</Text>
            </View>
        </View>

        <Text style={styles.address}>College Lane Campus</Text>

        <View style={styles.detailRow}>
            <Text>Event Type</Text>
            <Text>Lecture Theatre</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Capacity</Text>
            <Text>150+</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Facilities</Text>
            <Text>Projector, Microphone, Sound System</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Location</Text>
            <Text>Forum</Text>
        </View>

        <Text>Contact 0170 751 4231</Text>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.btn}><Text>Book</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Details</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Direction</Text></TouchableOpacity>
        </View>

        <Text style={styles.footer}>Booked</Text>
       </View>

      {/* CARD 2 */}
      <View style={styles.card}>

        <View style={styles.topRow}>
            <Text style={styles.title}>Lindop Building</Text>
            <View style={styles.ratingRow}>
                <Text>⭐ 4.5/5</Text>
                <Text style={styles.heart}>🤍</Text>
            </View>
        </View>

        <Text style={styles.address}>College Lane Campus</Text>

        <View style={styles.detailRow}>
            <Text>Event Type</Text>
            <Text>Seminar Room</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Capacity</Text>
            <Text>100+</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Facilities</Text>
            <Text>White Board, Microphone, Sound System</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Location</Text>
            <Text>A154</Text>
        </View>

        <Text>Contact 0170 751 4231</Text>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.btn}><Text>Book</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Details</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Direction</Text></TouchableOpacity>
        </View>

        <Text style={styles.footer}>Available from 14:00 pm</Text>
      </View>


      {/* CARD 3 */}
      <View style={styles.card}>

        <View style={styles.topRow}>
            <Text style={styles.title}>Spectra</Text>
            <View style={styles.ratingRow}>
                <Text>⭐ 4.5/5</Text>
                <Text style={styles.heart}>❤️</Text>
            </View>
        </View>

        <Text style={styles.address}>College Lane Campus</Text>

        <View style={styles.detailRow}>
            <Text>Event Type</Text>
            <Text>Event Hall</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Capacity</Text>
            <Text>200+</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Facilities</Text>
            <Text>Stage, Microphone, Sound System</Text>
        </View>

        <View style={styles.detailRow}>
            <Text>Location</Text>
            <Text>SP0054</Text>
        </View>

        <Text>Contact 0170 751 4231</Text>

        <View style={styles.buttonRow}>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => router.push('/booking')}
>               <Text>Book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Details</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Direction</Text></TouchableOpacity>
        </View>

        <Text style={styles.footer}>Available</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
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