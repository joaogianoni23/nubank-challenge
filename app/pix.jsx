import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Pix() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  
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
        <Text style={styles.headerTitle}>Área Pix</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Feather name="help-circle" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Search Box */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Busque por nome ou CPF/CNPJ"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Pix Actions */}
        <View style={styles.actionsGrid}>
          {[
            { icon: 'qrcode-scan', title: 'Pagar com\nQR code' },
            { icon: 'cash-fast', title: 'Pagar com\nPix' },
            { icon: 'cash-register', title: 'Cobrar' },
            { icon: 'key-outline', title: 'Minhas\nchaves' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.actionItem}>
              <View style={styles.actionIcon}>
                <MaterialCommunityIcons name={item.icon} size={28} color="#8A05BE" />
              </View>
              <Text style={styles.actionText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pix Limit */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="speedometer" size={24} color="#8A05BE" />
            <Text style={styles.cardTitle}>Limite diário: <Text style={styles.limitValue}>R$ 1.000,00</Text></Text>
          </View>
          <Text style={styles.cardDescription}>
            Seu limite diário para transações é de R$ 1.000,00. Você pode ajustar este valor nas configurações.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Configurar limite</Text>
            <Feather name="chevron-right" size={18} color="#8A05BE" />
          </TouchableOpacity>
        </View>

        {/* Recent Transactions */}
        <Text style={styles.sectionTitle}>Transações recentes</Text>

        <View style={styles.transactionsContainer}>
          {[
            { name: 'João Silva', value: '- R$ 120,00', date: 'Hoje, 14:30', type: 'out' },
            { name: 'Maria Santos', value: '+ R$ 250,00', date: 'Ontem, 18:45', type: 'in' },
            { name: 'Mercado Delivery', value: '- R$ 89,90', date: '22/05, 11:20', type: 'out' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.transactionItem}>
              <View style={[styles.transactionIcon, 
                { backgroundColor: item.type === 'in' ? '#e0f7ea' : '#ffecf2' }]}
              >
                <MaterialCommunityIcons 
                  name={item.type === 'in' ? 'arrow-down-left' : 'arrow-up-right'} 
                  size={22} 
                  color={item.type === 'in' ? '#00a869' : '#e41e5a'} 
                />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={[styles.transactionValue, 
                { color: item.type === 'in' ? '#00a869' : '#e41e5a' }]}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* See All Transactions Button */}
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>Ver todas as transações</Text>
        </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  helpButton: {
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
  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginLeft: 12,
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 15,
    color: '#333',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionItem: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f2e8f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  limitValue: {
    color: '#8A05BE',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 16,
  },
  cardButtonText: {
    color: '#8A05BE',
    fontSize: 15,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  transactionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
  transactionValue: {
    fontSize: 15,
    fontWeight: '500',
  },
  seeAllButton: {
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  seeAllButtonText: {
    color: '#8A05BE',
    fontSize: 15,
    fontWeight: '500',
  },
});