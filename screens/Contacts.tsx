import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from 'react-native';
import ContactListItem from '../components/ContactListItem';
import { fetchContacts } from '../utils/api';
import { Contact } from '../types';

export default function Contacts({ navigation }: any) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
      setFilteredContacts(data);
      setLoading(false);
    });
  }, []);

  // Cập nhật danh sách khi gõ tìm kiếm
  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchText, contacts]);

  const toggleFavorite = (phone: string) => {
    const updated = contacts.map((contact) =>
      contact.phone === phone
        ? { ...contact, favorite: !contact.favorite }
        : contact
    );
    setContacts(updated);
  };

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 30 }} />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm liên hệ..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.phone}
        renderItem={({ item }) => (
          <ContactListItem
            name={item.name}
            phone={item.phone}
            avatar={item.avatar}
            favorite={item.favorite}
            onPress={() => navigation.navigate('Profile', { contact: item })}
            onToggleFavorite={() => toggleFavorite(item.phone)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    fontSize: 16,
    margin: 10,
    borderRadius: 8,
  },
});
