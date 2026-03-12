import { Drawer } from 'expo-router/drawer';

export default function TabLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'Home' }} />
      <Drawer.Screen name="accessibility" options={{ title: 'Accessibility' }} />
      <Drawer.Screen name="labequip" options={{ title: 'Lab Equipment' }} />
      <Drawer.Screen name="studyroom" options={{ title: 'Study Room' }} />
      <Drawer.Screen name="bikereservation" options={{ title: 'Bike Reservation' }} />
      <Drawer.Screen name="cafeview" options={{ title: 'Cafe View' }} />
      <Drawer.Screen name="map" options={{ title: 'Map' }} />
      <Drawer.Screen name="parkingportal" options={{ title: 'Parking Portal' }} />
      <Drawer.Screen name="carreservation" options={{ title: 'Car Reservation' }} />
    </Drawer>
  );
}

