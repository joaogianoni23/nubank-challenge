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
  FlatList,
  TextInput
} from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Shopping() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  
  // Dados de exemplo para as lojas parceiras
  const featuredStores = [
    {
      id: '1',
      name: 'Amazon',
      logo: '🛒',
      cashback: '4%',
      tag: 'Destaque'
    },
    {
      id: '2',
      name: 'AliExpress',
      logo: '🛍️',
      cashback: '6%',
      tag: 'Oferta'
    },
    {
      id: '3',
      name: 'Magalu',
      logo: '📱',
      cashback: '5%',
      tag: 'Destaque'
    },
    {
      id: '4',
      name: 'Americanas',
      logo: '🔴',
      cashback: '3%',
      tag: 'Popular'
    }
  ];

  const allStores = [
    {
      id: '1',
      name: 'Amazon',
      logo: '🛒',
      cashback: '4%',
      category: 'E-commerce'
    },
    {
      id: '2',
      name: 'AliExpress',
      logo: '🛍️',
      cashback: '6%',
      category: 'E-commerce'
    },
    {
      id: '3',
      name: 'Magalu',
      logo: '📱',
      cashback: '5%',
      category: 'E-commerce'
    },
    {
      id: '4',
      name: 'Americanas',
      logo: '🔴',
      cashback: '3%',
      category: 'E-commerce'
    },
    {
      id: '5',
      name: 'Booking',
      logo: '✈️',
      cashback: '7%',
      category: 'Viagens'
    },
    {
      id: '6',
      name: 'iFood',
      logo: '🍔',
      cashback: '8%',
      category: 'Alimentação'
    },
    {
      id: '7',
      name: 'Uber',
      logo: '🚗',
      cashback: '3%',
      category: 'Transporte'
    },
    {
      id: '8',
      name: 'Drogasil',
      logo: '💊',
      cashback: '2%',
      category: 'Saúde'
    }
  ];

  const categories = [
    { id: '1', name: 'E-commerce', icon: 'shopping-cart' },
    { id: '2', name: 'Alimentação', icon: 'food' },
    { id: '3', name: 'Moda', icon: 'tshirt-crew' },
    { id: '4', name: 'Eletrônicos', icon: 'cellphone' },
    { id: '5', name: 'Viagens', icon: 'airplane' },
    { id: '6', name: 'Saúde', icon: 'medical-bag' }
  ];

  const offers = [
    {
      id: '1',
      title: 'Cashback Duplo',
      description: 'Em todas as compras na Amazon',
      store: 'Amazon',
      value: '8%',
      expiry: '3 dias'
    },
    {
      id: '2',
      title: 'Frete Grátis',
      description: 'Em compras acima de R$ 100 no Magalu',
      store: 'Magalu',
      value: '+ 3%',
      expiry: '7 dias'
    },
    {
      id: '3',
      title: 'Oferta Relâmpago',
      description: 'Cupom de R$ 30 para primeira compra',
      store: 'iFood',
      value: '+ R$ 30',
      expiry: 'Hoje'
    }
  ];

  const renderFeaturedStore = ({ item }) => (
    <TouchableOpacity style={styles.featuredStoreCard}>
      <View style={styles.storeLogoContainer}>
        <Text style={styles.storeLogo}>{item.logo}</Text>
      </View>
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.cashbackText}>{item.cashback} de volta</Text>
      </View>
      {item.tag && (
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>{item.tag}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderStoreItem = ({ item }) => (
    <TouchableOpacity style={styles.storeItem}>
      <View style={styles.storeItemLogo}>
        <Text style={styles.storeLogoText}>{item.logo}</Text>
      </View>
      <View style={styles.storeItemInfo}>
        <Text style={styles.storeItemName}>{item.name}</Text>
        <Text style={styles.storeItemCategory}>{item.category}</Text>
      </View>
      <View style={styles.storeItemCashback}>
        <Text style={styles.storeItemCashbackText}>{item.cashback}</Text>
        <Text style={styles.storeItemCashbackLabel}>Cashback</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name={item.icon} size={24} color="#8A05BE" />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderOfferItem = ({ item }) => (
    <TouchableOpacity style={styles.offerCard}>
      <View style={styles.offerHeader}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <View style={styles.offerValue}>
          <Text style={styles.offerValueText}>{item.value}</Text>
        </View>
      </View>
      <Text style={styles.offerDescription}>{item.description}</Text>
      <View style={styles.offerFooter}>
        <Text style={styles.offerStore}>{item.store}</Text>
        <Text style={styles.offerExpiry}>Expira em {item.expiry}</Text>
      </View>
    </TouchableOpacity>
  );

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
        <Text style={styles.headerTitle}>NuShop</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.helpButton}>
            <Feather name="help-circle" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar lojas parceiras"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Your Cashback Section */}
        <View style={styles.cashbackSummaryCard}>
          <View style={styles.cashbackHeader}>
            <MaterialCommunityIcons name="cash-multiple" size={24} color="#8A05BE" />
            <Text style={styles.cashbackTitle}>Seu Cashback</Text>
          </View>
          <Text style={styles.cashbackAmount}>R$ 127,50</Text>
          <Text style={styles.cashbackDescription}>
            Acumule cashback em compras nas lojas parceiras e resgate quando quiser.
          </Text>
          <TouchableOpacity style={styles.cashbackButton}>
            <Text style={styles.cashbackButtonText}>Ver histórico</Text>
            <Feather name="chevron-right" size={18} color="#8A05BE" />
          </TouchableOpacity>
        </View>

        {/* Featured Offers */}
        <Text style={styles.sectionTitle}>Ofertas em destaque</Text>
        
        <FlatList
          data={offers}
          renderItem={renderOfferItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.offersList}
          contentContainerStyle={styles.offersListContent}
        />

        {/* Featured Stores */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Lojas em destaque</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllLink}>Ver todas</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={featuredStores}
          renderItem={renderFeaturedStore}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuredStoresList}
          contentContainerStyle={styles.featuredStoresListContent}
        />

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categorias</Text>
        
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesList}
          contentContainerStyle={styles.categoriesListContent}
        />

        {/* All Stores */}
        <Text style={styles.sectionTitle}>Todas as lojas</Text>
        
        <FlatList
          data={allStores}
          renderItem={renderStoreItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
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
    flexDirection: 'row',
  },
  helpButton: {
    padding: 8,
  },
  scrollView: {
    backgroundColor: '#F0F1F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
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
    marginBottom: 24,
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
  cashbackSummaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cashbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cashbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  cashbackAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A05BE',
    marginBottom: 8,
  },
  cashbackDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  cashbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 16,
  },
  cashbackButtonText: {
    color: '#8A05BE',
    fontSize: 15,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllLink: {
    color: '#8A05BE',
    fontWeight: '500',
  },
  offersList: {
    marginBottom: 24,
  },
  offersListContent: {
    paddingRight: 20,
  },
  offerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 280,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  offerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  offerValue: {
    backgroundColor: '#f2e8f9',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  offerValueText: {
    color: '#8A05BE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  offerDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  offerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  offerStore: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
  offerExpiry: {
    fontSize: 13,
    color: '#999',
  },
  featuredStoresList: {
    marginBottom: 24,
  },
  featuredStoresListContent: {
    paddingRight: 20,
  },
  featuredStoreCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 150,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  storeLogoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  storeLogo: {
    fontSize: 28,
  },
  storeInfo: {
    alignItems: 'center',
  },
  storeName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  cashbackText: {
    fontSize: 14,
    color: '#8A05BE',
    fontWeight: '500',
  },
  tagContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#8A05BE',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  categoriesList: {
    marginBottom: 24,
  },
  categoriesListContent: {
    paddingRight: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 88,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f2e8f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  storeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  storeItemLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  storeLogoText: {
    fontSize: 22,
  },
  storeItemInfo: {
    flex: 1,
  },
  storeItemName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#333',
  },
  storeItemCategory: {
    fontSize: 13,
    color: '#999',
  },
  storeItemCashback: {
    alignItems: 'flex-end',
  },
  storeItemCashbackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8A05BE',
  },
  storeItemCashbackLabel: {
    fontSize: 12,
    color: '#999',
  }
});