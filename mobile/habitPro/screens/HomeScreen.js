import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHabits = async () => {
    try {
      const response = await axios.get('http://10.19.14.113/api/habits/');
      setHabits(response.data);
    } catch (error) {
      console.error('Erro ao buscar hábitos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem-vindo!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
          <FontAwesome name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meu Plano{`\n`}Para Hoje</Text>
        <Text style={styles.progressText}>
          {habits.filter(habit => habit.completed).length} de {habits.length} Completados
        </Text>
      </View>
      <View style={styles.activitySection}>
        <Text style={styles.activityTitle}>Atividades de Hoje</Text>
        {loading ? (
          <Text style={styles.loadingText}>Carregando...</Text>
        ) : (
          <FlatList
            data={habits}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text style={styles.activityItem}>
                • {item.name} {item.completed ? '(Completado)' : ''}
              </Text>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20,
    
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: '#333',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  progressText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  activitySection: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  activityItem: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
});