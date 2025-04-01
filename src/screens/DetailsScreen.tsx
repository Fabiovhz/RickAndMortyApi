import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import global from '../styles/global';
import { useRoute } from '@react-navigation/native';

const DetailsScreen = ({ route }: { route: any }) => {
    const { character } = route.params;  // Recibir el personaje desde los parámetros
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.name}>{character.name}</Text>
        <Text>{character.species}</Text>
        <Text>{character.status}</Text>
        <Text>ID: {character.id}</Text>
      </View>
    );
  };

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
  });
  



export default DetailsScreen
