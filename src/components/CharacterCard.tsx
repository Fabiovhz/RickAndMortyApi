import React from 'react'
import { Character } from '../types/character';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';

interface Props{
    character:Character;
    onPress: () => void;
}

const CharacterCard = ({ character, navigation }: { character: Character, navigation: any }) => {
    const handlePress = () => {
      // Navegar a la pantalla de detalles pasando el personaje como parámetro
      navigation.navigate('Detalles', { character });
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.card}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <Text style={styles.name}>{character.name}</Text>
          <Text>{character.species} - {character.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
const styles = StyleSheet.create({
    card:{
        marginBottom:10,
        padding:10,
        backgroundColor:'#eee',
        borderRadius:10,
    },
    image:{
        width:'100%',
        height:200,
        borderRadius:10,
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:5,
    },
})
export default CharacterCard
