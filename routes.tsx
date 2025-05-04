import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

// Screens
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options'; // ✅ Thêm màn hình tùy chọn

// Colors
import colors from './utils/colors';

// Stack navigator
const Stack = createNativeStackNavigator();

// 👉 Contacts Stack
const ContactsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Contacts" component={Contacts} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

// 👉 Favorites Stack
const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

// 👉 User Stack với icon ⚙ để mở Options
const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        title: 'User',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Options')}>
            <MaterialIcons name="settings" size={24} color="black" style={{ marginRight: 15 }} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Options"
      component={Options}
      options={{ presentation: 'modal', title: 'Tùy chọn' }}
    />
  </Stack.Navigator>
);

// Tab navigator
const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ContactsTab"
        barStyle={{ backgroundColor: colors.blue }}
        activeColor="white"
        inactiveColor={colors.greyLight}
        labeled={false}
      >
        <Tab.Screen
          name="ContactsTab"
          component={ContactsStack}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <MaterialIcons name="list" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesTab"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <MaterialIcons name="star" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="UserTab"
          component={UserStack}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <MaterialIcons name="person" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
