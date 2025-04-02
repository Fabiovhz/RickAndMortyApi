
import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';

const DetailsScreen = ({ route }: { route: any }) => {
  if (!route.params) {
    return <Text>No Personaje</Text>
  }
  const { character } = route.params;  // Recibir el personaje desde los parámetros
  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.characteristics}>{character.species}</Text>
      <Text style={styles.characteristics}>{character.status}</Text>
      <Text style={styles.characteristics}>ID: {character.id}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  characteristics:{
    fontSize:20,
    fontWeight:'bold',
  },
});
