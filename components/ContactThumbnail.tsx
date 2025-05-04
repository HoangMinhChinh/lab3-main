import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  avatar: string;
  onPress: () => void;
}

export default function ContactThumbnail({ avatar, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: avatar }} style={styles.thumbnail} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
  },
});
