<<<<<<< HEAD
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
=======
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

>>>>>>> 25c435ad50d0d7259196b8ee63b89afef96cf411
