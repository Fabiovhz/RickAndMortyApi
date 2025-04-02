
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Character } from '../types/character';
import { useNavigation } from '@react-navigation/native';

const CharacterCard = ({ character }: { character: Character }) => {
    const navigate = useNavigation<any>();
    const handlePress = () => {
        // Navegar a la pantalla de detalles pasando el personaje como parámetro
        navigate.navigate('DetailsScreen', { character });
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

export default CharacterCard;

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f8f9f9',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
});
