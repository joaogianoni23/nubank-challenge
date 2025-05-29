import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  StatusBar,
  Image,
  Animated,
  Dimensions
} from 'react-native';
import { Feather, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export default function Home() {
  const [showBalance, setShowBalance] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;
  
  // Animação do cabeçalho
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [200, 80],
    extrapolate: 'clamp'
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });
  
  const shortsOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0.6],
    extrapolate: 'clamp'
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      
      {/* Header Animado */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.userButton}>
            <Feather name="user" size={28} color="#FFF" />
          </TouchableOpacity>

          <Animated.View style={[styles.headerActions, { opacity: headerOpacity }]}>
            <TouchableOpacity style={styles.actionButton} onPress={() => setShowBalance(!showBalance)}>
              <Feather name={showBalance ? "eye" : "eye-off"} size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="help-circle" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialIcons name="email" size={24} color="#FFF" />
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Animated.Text style={[styles.headerName, { opacity: headerOpacity }]}>
          Olá, Usuário
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Account Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="cash" size={28} color="#8A05BE" />
            <Text style={styles.cardTitle}>Conta</Text>
            <View style={styles.cardHeaderRight}>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={24} color="#8A05BE" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.balanceLabel}>Saldo disponível</Text>
            <Text style={styles.balanceValue}>
              {showBalance ? 'R$ 2.567,89' : '••••••••'}
            </Text>
          </View>
        </View>

        {/* Credit Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="credit-card" size={28} color="#8A05BE" />
            <Text style={styles.cardTitle}>Cartão de crédito</Text>
            <View style={styles.cardHeaderRight}>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={24} color="#8A05BE" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.balanceLabel}>Fatura atual</Text>
            <Text style={styles.balanceValue}>
              {showBalance ? 'R$ 452,78' : '••••••••'}
            </Text>
            <View style={styles.limitContainer}>
              <View style={styles.limitBar}>
                <View style={styles.limitUsed} />
              </View>
              <Text style={styles.balanceInfo}>Limite disponível {showBalance ? 'R$ 3.500,00' : '••••••••'}</Text>
            </View>
          </View>
        </View>

        {/* Shortcuts - com efeito de blur */}
        <Animated.View style={[styles.shortcutsContainer, { opacity: shortsOpacity }]}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.shortcuts}
            decelerationRate="fast"
            snapToInterval={80}
          >
            {[
              { icon: 'pix', title: 'Pix' },
              { icon: 'barcode', title: 'Pagar' },
              { icon: 'cash-plus', title: 'Depositar' },
              { icon: 'bank-transfer', title: 'Transferir' },
              { icon: 'cellphone', title: 'Recarga' },
              { icon: 'heart', title: 'Doação' },
              { icon: 'chart-box-outline', title: 'Investir' },
              { icon: 'shopping-outline', title: 'Shopping' },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.shortcutItem}>
                <View style={styles.shortcutIcon}>
                  <MaterialCommunityIcons name={item.icon} size={22} color="#8A05BE" />
                </View>
                <Text style={styles.shortcutTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        <Text style={styles.sectionTitle}>Seus produtos</Text>

        {/* My Credit Card */}
        <TouchableOpacity style={styles.actionCard}>
          <MaterialCommunityIcons name="credit-card-outline" size={24} color="#8A05BE" />
          <View style={styles.actionCardContent}>
            <Text style={styles.actionCardTitle}>Meus cartões</Text>
            <Text style={styles.actionCardSubtitle}>Gerencie seus cartões físico e virtual</Text>
          </View>
          <View style={styles.cardIndicator} />
          <Feather name="chevron-right" size={20} color="#8A05BE" />
        </TouchableOpacity>

        {/* Loan */}
        <TouchableOpacity style={styles.actionCard}>
          <MaterialCommunityIcons name="cash" size={24} color="#8A05BE" />
          <View style={styles.actionCardContent}>
            <Text style={styles.actionCardTitle}>Empréstimos</Text>
            <Text style={styles.actionCardSubtitle}>Valor disponível de até R$ 25.000,00</Text>
          </View>
          <View style={styles.cardIndicator} />
          <Feather name="chevron-right" size={20} color="#8A05BE" />
        </TouchableOpacity>

        {/* Investments */}
        <TouchableOpacity style={styles.actionCard}>
          <MaterialCommunityIcons name="chart-line" size={24} color="#8A05BE" />
          <View style={styles.actionCardContent}>
            <Text style={styles.actionCardTitle}>Investimentos</Text>
            <Text style={styles.actionCardSubtitle}>O jeito Nu de investir</Text>
          </View>
          <View style={styles.cardIndicator} />
          <Feather name="chevron-right" size={20} color="#8A05BE" />
        </TouchableOpacity>

        {/* NuShop */}
        <TouchableOpacity style={styles.actionCard}>
          <MaterialCommunityIcons name="shopping" size={24} color="#8A05BE" />
          <View style={styles.actionCardContent}>
            <Text style={styles.actionCardTitle}>Shopping</Text>
            <Text style={styles.actionCardSubtitle}>Cashback em lojas parceiras</Text>
          </View>
          <View style={[styles.cardIndicator, styles.newFeature]} />
          <Feather name="chevron-right" size={20} color="#8A05BE" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Descubra mais</Text>

        {/* Discover Cards - Horizontal Scroll */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.discoverScroll}
          decelerationRate="fast"
          snapToInterval={width - 60}
        >
          <View style={styles.discoverCard}>
            <MaterialCommunityIcons name="gift" size={32} color="#8A05BE" />
            <Text style={styles.discoverTitle}>Indique seus amigos</Text>
            <Text style={styles.discoverSubtitle}>Indique amigos para o Nubank e ganhe prêmios exclusivos</Text>
          </View>
          
          <View style={styles.discoverCard}>
            <MaterialCommunityIcons name="tag-multiple" size={32} color="#8A05BE" />
            <Text style={styles.discoverTitle}>Ofertas para você</Text>
            <Text style={styles.discoverSubtitle}>Descontos e benefícios exclusivos das nossas parcerias</Text>
          </View>

          <View style={styles.discoverCard}>
            <MaterialCommunityIcons name="shield-check" size={32} color="#8A05BE" />
            <Text style={styles.discoverTitle}>Seguro de vida</Text>
            <Text style={styles.discoverSubtitle}>Proteção para você e sua família com preço justo</Text>
          </View>
        </ScrollView>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A05BE',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    zIndex: 10,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 20,
  },
  headerName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 0,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginBottom: 20,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  cardHeaderRight: {
    marginLeft: 'auto',
  },
  cardBody: {
    paddingTop: 5,
  },
  balanceLabel: {
    color: '#666',
    fontSize: 14,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color: '#333',
  },
  balanceInfo: {
    color: '#666',
    fontSize: 14,
  },
  shortcutsContainer: {
    marginBottom: 30,
  },
  shortcuts: {
    marginTop: 10,
    marginBottom: 10,
  },
  shortcutItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 80,
  },
  shortcutIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  shortcutTitle: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '500',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
  actionCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  actionCardContent: {
    flex: 1,
    marginLeft: 15,
  },
  actionCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  actionCardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 3,
  },
  cardIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'transparent',
    marginHorizontal: 10,
  },
  newFeature: {
    backgroundColor: '#8A05BE',
  },
  limitContainer: {
    marginTop: 10,
  },
  limitBar: {
    height: 4,
    backgroundColor: '#EEE',
    borderRadius: 2,
    marginBottom: 6,
  },
  limitUsed: {
    width: '35%',
    height: '100%',
    backgroundColor: '#8A05BE',
    borderRadius: 2,
  },
  discoverScroll: {
    marginBottom: 20,
  },
  discoverCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    marginRight: 15,
    width: width - 60,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  discoverTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  discoverSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  }
});