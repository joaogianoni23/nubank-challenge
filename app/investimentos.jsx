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
  FlatList
} from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Investimentos() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('resumo');
  
  // Dados de exemplo para investimentos
  const portfolioData = {
    total: 15750.42,
    rendimento: 253.87,
    rendimentoPct: 1.64
  };
  
  const productsData = [
    { 
      id: '1', 
      name: 'Nu Reserva Imediata', 
      value: 2500.0, 
      return: 0.82, 
      returnPeriod: 'no mês',
      type: 'renda-fixa',
      risk: 'Baixo',
      icon: 'cash'
    },
    { 
      id: '2', 
      name: 'Tesouro Selic 2026', 
      value: 5000.0, 
      return: 10.15, 
      returnPeriod: 'ao ano',
      type: 'tesouro',
      risk: 'Muito Baixo',
      icon: 'bank'
    },
    { 
      id: '3', 
      name: 'CDB Banco XYZ', 
      value: 3000.0, 
      return: 11.2, 
      returnPeriod: 'ao ano',
      type: 'renda-fixa',
      risk: 'Baixo',
      icon: 'script-text'
    },
    { 
      id: '4', 
      name: 'Fundo de Ações Brasil', 
      value: 4500.0, 
      return: 3.8, 
      returnPeriod: 'no mês',
      type: 'acoes',
      risk: 'Alto',
      icon: 'chart-line-variant'
    },
    { 
      id: '5', 
      name: 'ETF Global', 
      value: 750.42, 
      return: -0.65, 
      returnPeriod: 'na semana',
      type: 'acoes',
      risk: 'Moderado',
      icon: 'earth'
    }
  ];
  
  const suggestionsData = [
    { 
      id: '1', 
      name: 'Tesouro IPCA+ 2035', 
      return: 5.64, 
      returnPeriod: '+ IPCA',
      risk: 'Muito Baixo',
      highlight: 'Proteção contra inflação'
    },
    { 
      id: '2', 
      name: 'CDB Pós-fixado', 
      return: 105, 
      returnPeriod: '% do CDI',
      risk: 'Baixo',
      highlight: 'Resgate a qualquer momento'
    },
    { 
      id: '3', 
      name: 'Fundo Multimercado', 
      return: 11.3, 
      returnPeriod: 'ao ano',
      risk: 'Moderado',
      highlight: 'Diversificação de carteira'
    },
  ];
  
  const renderInvestmentItem = ({ item }) => (
    <TouchableOpacity style={styles.investmentCard}>
      <View style={styles.investmentIconContainer}>
        <MaterialCommunityIcons name={item.icon} size={22} color="#8A05BE" />
      </View>
      <View style={styles.investmentContent}>
        <Text style={styles.investmentName}>{item.name}</Text>
        <View style={styles.investmentTags}>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{item.risk}</Text>
          </View>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{item.type === 'renda-fixa' ? 'Renda Fixa' : 
                                         item.type === 'tesouro' ? 'Tesouro Direto' : 
                                         'Renda Variável'}</Text>
          </View>
        </View>
      </View>
      <View style={styles.investmentValues}>
        <Text style={styles.investmentValue}>R$ {item.value.toFixed(2)}</Text>
        <Text style={[
          styles.investmentReturn,
          item.return >= 0 ? styles.positiveReturn : styles.negativeReturn
        ]}>
          {item.return >= 0 ? '+' : ''}{item.return}% {item.returnPeriod}
        </Text>
      </View>
    </TouchableOpacity>
  );
  
  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity style={styles.suggestionCard}>
      <View style={styles.suggestionTop}>
        <Text style={styles.suggestionName}>{item.name}</Text>
        <View style={styles.riskIndicator}>
          <Text style={styles.riskText}>{item.risk}</Text>
        </View>
      </View>
      <Text style={styles.suggestionHighlight}>{item.highlight}</Text>
      <View style={styles.suggestionBottom}>
        <Text style={styles.suggestionReturn}>
          <Text style={styles.returnValue}>{item.return}</Text>% {item.returnPeriod}
        </Text>
        <TouchableOpacity style={styles.investButton}>
          <Text style={styles.investButtonText}>Investir</Text>
        </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Investimentos</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Feather name="help-circle" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'resumo' && styles.activeTab]}
          onPress={() => setActiveTab('resumo')}
        >
          <Text style={[styles.tabText, activeTab === 'resumo' && styles.activeTabText]}>Resumo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'ativos' && styles.activeTab]}
          onPress={() => setActiveTab('ativos')}
        >
          <Text style={[styles.tabText, activeTab === 'ativos' && styles.activeTabText]}>Meus Ativos</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'explorar' && styles.activeTab]}
          onPress={() => setActiveTab('explorar')}
        >
          <Text style={[styles.tabText, activeTab === 'explorar' && styles.activeTabText]}>Explorar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'resumo' && (
          <>
            {/* Portfolio Summary */}
            <View style={styles.portfolioCard}>
              <View style={styles.portfolioHeader}>
                <Text style={styles.portfolioLabel}>Valor investido</Text>
                <TouchableOpacity>
                  <Feather name="refresh-cw" size={18} color="#8A05BE" />
                </TouchableOpacity>
              </View>
              <Text style={styles.portfolioTotal}>R$ {portfolioData.total.toFixed(2)}</Text>
              <View style={styles.portfolioReturn}>
                <AntDesign 
                  name={portfolioData.rendimento > 0 ? "arrowup" : "arrowdown"} 
                  size={16} 
                  color={portfolioData.rendimento > 0 ? "#00A779" : "#E53A40"} 
                  style={styles.returnIcon} 
                />
                <Text style={styles.returnValue}>
                  {portfolioData.rendimento > 0 ? "+" : ""}{portfolioData.rendimento.toFixed(2)} ({portfolioData.rendimentoPct}%)
                </Text>
                <Text style={styles.returnPeriod}>no mês</Text>
              </View>
            </View>

            {/* Portfolio Distribution */}
            <View style={styles.distributionCard}>
              <Text style={styles.sectionTitle}>Distribuição da carteira</Text>
              <View style={styles.distributionGraph}>
                <View style={styles.barGraphContainer}>
                  <View style={[styles.barSection, { width: '40%', backgroundColor: '#8A05BE' }]} />
                  <View style={[styles.barSection, { width: '30%', backgroundColor: '#AC63D3' }]} />
                  <View style={[styles.barSection, { width: '20%', backgroundColor: '#D2A1E8' }]} />
                  <View style={[styles.barSection, { width: '10%', backgroundColor: '#E8DAEF' }]} />
                </View>
                <View style={styles.distributionLegend}>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#8A05BE' }]} />
                    <Text style={styles.legendText}>Renda Fixa (40%)</Text>
                  </View>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#AC63D3' }]} />
                    <Text style={styles.legendText}>Tesouro Direto (30%)</Text>
                  </View>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#D2A1E8' }]} />
                    <Text style={styles.legendText}>Ações (20%)</Text>
                  </View>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#E8DAEF' }]} />
                    <Text style={styles.legendText}>Outros (10%)</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Recent Investments */}
            <View style={styles.recentInvestments}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Meus investimentos</Text>
                <TouchableOpacity onPress={() => setActiveTab('ativos')}>
                  <Text style={styles.seeAllLink}>Ver todos</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={productsData.slice(0, 3)}
                renderItem={renderInvestmentItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            </View>

            {/* Educational Content */}
            <TouchableOpacity style={styles.educationCard}>
              <View style={styles.educationIcon}>
                <FontAwesome5 name="book-reader" size={24} color="#8A05BE" />
              </View>
              <View style={styles.educationContent}>
                <Text style={styles.educationTitle}>Aprenda a investir</Text>
                <Text style={styles.educationText}>
                  Conheça nossos conteúdos sobre investimentos e finanças
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#8A05BE" />
            </TouchableOpacity>
          </>
        )}

        {activeTab === 'ativos' && (
          <>
            <View style={styles.filtersContainer}>
              <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
                <Text style={styles.activeFilterText}>Todos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Renda Fixa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Tesouro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Ações</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={productsData}
              renderItem={renderInvestmentItem}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              style={styles.investmentList}
            />
          </>
        )}

        {activeTab === 'explorar' && (
          <>
            <View style={styles.exploreBanner}>
              <Text style={styles.exploreBannerTitle}>
                Comece a investir agora
              </Text>
              <Text style={styles.exploreBannerText}>
                A partir de R$ 1, sem taxa de manutenção e com resgate rápido.
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Recomendados para você</Text>

            {suggestionsData.map((item) => (
              <renderSuggestionItem item={item} key={item.id} />
            ))}
            
            <View style={styles.categoriesGrid}>
              <Text style={styles.sectionTitle}>Categorias de investimentos</Text>
              <View style={styles.grid}>
                {[
                  { name: 'Renda Fixa', icon: 'cash-multiple' },
                  { name: 'Tesouro Direto', icon: 'bank' },
                  { name: 'Fundos', icon: 'chart-pie' },
                  { name: 'Ações', icon: 'chart-line-variant' },
                  { name: 'Carteiras', icon: 'briefcase' },
                  { name: 'FIIs', icon: 'domain' },
                ].map((category, index) => (
                  <TouchableOpacity key={index} style={styles.categoryItem}>
                    <View style={styles.categoryIcon}>
                      <MaterialCommunityIcons name={category.icon} size={24} color="#8A05BE" />
                    </View>
                    <Text style={styles.categoryName}>{category.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        )}
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    color: '#FFF',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#8A05BE',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#F0F1F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
  },
  portfolioCard: {
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
  portfolioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  portfolioLabel: {
    fontSize: 16,
    color: '#666',
  },
  portfolioTotal: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  portfolioReturn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnIcon: {
    marginRight: 4,
  },
  returnValue: {
    fontWeight: 'bold',
    color: '#00A779',
    marginRight: 4,
  },
  returnPeriod: {
    color: '#666',
  },
  distributionCard: {
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
  distributionGraph: {
    marginTop: 10,
  },
  barGraphContainer: {
    height: 16,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 16,
  },
  barSection: {
    height: '100%',
  },
  distributionLegend: {
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
  recentInvestments: {
    marginBottom: 20,
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
  investmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  investmentIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2e8f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  investmentContent: {
    flex: 1,
    marginRight: 8,
  },
  investmentName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  investmentTags: {
    flexDirection: 'row',
  },
  tagContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  investmentValues: {
    alignItems: 'flex-end',
  },
  investmentValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  investmentReturn: {
    fontSize: 14,
  },
  positiveReturn: {
    color: '#00A779',
  },
  negativeReturn: {
    color: '#E53A40',
  },
  educationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  educationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f2e8f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  educationContent: {
    flex: 1,
  },
  educationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  educationText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  activeFilter: {
    backgroundColor: '#8A05BE',
  },
  filterText: {
    color: '#666',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  investmentList: {
    marginBottom: 20,
  },
  exploreBanner: {
    backgroundColor: '#8A05BE',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  exploreBannerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  exploreBannerText: {
    color: '#FFFFFF',
    fontSize: 16,
    opacity: 0.9,
    lineHeight: 22,
  },
  suggestionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  suggestionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  suggestionName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  riskIndicator: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  riskText: {
    fontSize: 12,
    color: '#666',
  },
  suggestionHighlight: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  suggestionBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  suggestionReturn: {
    fontSize: 14,
    color: '#666',
  },
  investButton: {
    backgroundColor: '#8A05BE',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  investButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  categoriesGrid: {
    marginTop: 16,
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '48%',
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f2e8f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
  }
});