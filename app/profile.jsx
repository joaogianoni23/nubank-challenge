import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/12/Rodrigo-Garro-e1734108125460.jpg?w=1200&h=900&crop=1' }} style={styles.profileImage} />
        <Text style={styles.name}>Rodrigo Garro</Text>
        <Text style={styles.bio}>Sou um meio-campista argentino conhecido por minha criatividade, visão de jogo e habilidade em bolas paradas. Fui revelado pelo Instituto de Córdoba, me destaquei no futebol sul-americano e ganhei projeção atuando no glorioso Corinthians maior time do universo.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="pencil" size={20} color="white" />
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons name="settings" size={20} color="white" />
            <Text style={styles.buttonText}>Configurações</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
    width: '50%',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },

});

export default ProfileScreen;
