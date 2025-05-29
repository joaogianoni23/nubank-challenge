import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  StatusBar,
  Image,
  Switch,
  Alert
} from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Perfil() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  
  const handleLogout = () => {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Sair", 
          onPress: () => console.log("Usuário fez logout"), 
          style: "destructive" 
        }
      ]
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Feather name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Feather name="settings" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.profileImageContainer}>
              <Text style={styles.profileInitials}>JD</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit-2" size={16} color="#8A05BE" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>João da Silva</Text>
          <Text style={styles.userEmail}>joao.silva@exemplo.com</Text>
          
          <TouchableOpacity style={styles.idButton}>
            <MaterialCommunityIcons name="identifier" size={18} color="#8A05BE" />
            <Text style={styles.idButtonText}>Ver dados da conta</Text>
            <Feather name="chevron-right" size={18} color="#8A05BE" />
          </TouchableOpacity>
        </View>

        {/* Security Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Segurança</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <MaterialCommunityIcons name="face-recognition" size={22} color="#333" />
              <Text style={styles.settingText}>Entrar com Face ID</Text>
            </View>
            <Switch
              trackColor={{ false: "#E0E0E0", true: "#D4A7E9" }}
              thumbColor={faceIdEnabled ? "#8A05BE" : "#f4f3f4"}
              onValueChange={() => setFaceIdEnabled(prev => !prev)}
              value={faceIdEnabled}
            />
          </View>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <MaterialCommunityIcons name="lock" size={22} color="#333" />
              <Text style={styles.settingText}>Alterar senha</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <MaterialCommunityIcons name="shield-check" size={22} color="#333" />
              <Text style={styles.settingText}>Configurações de privacidade</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Preferências</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="notifications-outline" size={22} color="#333" />
              <Text style={styles.settingText}>Notificações</Text>
            </View>
            <Switch
              trackColor={{ false: "#E0E0E0", true: "#D4A7E9" }}
              thumbColor={notificationsEnabled ? "#8A05BE" : "#f4f3f4"}
              onValueChange={() => setNotificationsEnabled(prev => !prev)}
              value={notificationsEnabled}
            />
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="moon-outline" size={22} color="#333" />
              <Text style={styles.settingText}>Modo escuro</Text>
            </View>
            <Switch
              trackColor={{ false: "#E0E0E0", true: "#D4A7E9" }}
              thumbColor={darkModeEnabled ? "#8A05BE" : "#f4f3f4"}
              onValueChange={() => setDarkModeEnabled(prev => !prev)}
              value={darkModeEnabled}
            />
          </View>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <MaterialCommunityIcons name="translate" size={22} color="#333" />
              <Text style={styles.settingText}>Idioma</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>Português</Text>
              <Feather name="chevron-right" size={20} color="#999" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Account Options */}
        <View style={styles.sectionCard}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <MaterialCommunityIcons name="bank" size={22} color="#333" />
              <Text style={styles.settingText}>Dados bancários</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Feather name="help-circle" size={22} color="#333" />
              <Text style={styles.settingText}>Ajuda</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <MaterialCommunityIcons name="file-document-outline" size={22} color="#333" />
              <Text style={styles.settingText}>Termos e condições</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Feather name="log-out" size={20} color="#E53935" />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>

        {/* Version Info */}
        <Text style={styles.versionInfo}>Versão 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A05BE',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerRight: {
    padding: 8,
  },
  scrollView: {
    backgroundColor: '#F0F1F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  profileImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#f2e8f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8A05BE',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#f2e8f9',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  idButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f2e8f9',
    borderRadius: 8,
    width: '100%',
    justifyContent: 'space-between',
  },
  idButtonText: {
    flex: 1,
    color: '#8A05BE',
    fontWeight: '500',
    marginHorizontal: 10,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 14,
    color: '#999',
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoutText: {
    color: '#E53935',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  versionInfo: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginBottom: 20,
  }
});