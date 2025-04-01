import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Character } from '../types/character';
import global from '../styles/global';
import CharacterCard from '../components/characterCard';
import api from '../api/api';

export default function HomeScreen() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data: { results } } = await api.get<{ results: Character[] }>('/character');
      setCharacters(results);
    };
    fetchCharacter();
  }, []);

  return (
    <ScrollView style={global.container}>
      <Text style={global.title}>Rick && Morty Characters</Text>
      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
