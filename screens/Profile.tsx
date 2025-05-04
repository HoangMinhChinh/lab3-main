import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Contact } from '../types';
import ContactThumbnail from '../components/ContactThumbnail';

interface Props {
  route: RouteProp<{ params: { contact: Contact } }, 'params'>;
}

export default function Profile({ route }: Props) {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <ContactThumbnail avatar={contact.avatar} onPress={() => {}} />
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
      <Text style={styles.email}>{contact.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 16,
  },
  phone: {
    fontSize: 16,
    marginTop: 4,
  },
  email: {
    fontSize: 14,
    marginTop: 2,
  },
});
