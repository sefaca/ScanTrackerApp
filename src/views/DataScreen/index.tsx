/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, FlatList, Dimensions} from 'react-native';
import {PieChart, LineChart} from 'react-native-chart-kit';
import {
  CharTitle,
  ChartContainer,
  ChartBox,
  HistoryContainer,
  HistoryHeader,
  HistoryHeaderText,
  HistoryRow,
  HistoryText,
  NoDataText,
  SummaryContainer,
  Title,
  chartConfig,
  Container,
  Header,
  getThemeColors,
  HistoryCategory,
  HistoryValue,
} from './styles';
import BackButton from '../../common/ui/components/BackButton';
import {useTheme} from 'styled-components';

const screenWidth = Dimensions.get('window').width;

const DataScreen = ({route, navigation}) => {
  const {expenses1, expenses2, expenses3, otherExpenses} = route.params || {};
  const theme = useTheme();
  const themeColors = getThemeColors(theme);

  console.log('expenses1:', expenses1);
  console.log('expenses2:', expenses2);
  console.log('expenses3:', expenses3);

  // Procesar y combinar los datos de las tres categorías
  const combinedData = [
    {
      name: 'Food',
      amount: expenses1.reduce((acc, expense) => acc + expense.value, 0),
      color: themeColors.food,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Entertain',
      amount: expenses2.reduce((acc, expense) => acc + expense.value, 0),
      color: themeColors.entertainment,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Transport',
      amount: expenses3.reduce((acc, expense) => acc + expense.value, 0),
      color: themeColors.transport,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Other',
      amount: otherExpenses.reduce((acc, expense) => acc + expense.value, 0),
      color: themeColors.other,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  // Combina todas las categorías de gastos en una sola matriz
  const combinedExpenses = [
    ...expenses1,
    ...expenses2,
    ...expenses3,
    ...otherExpenses,
  ];

  // Función para preparar el historial de gastos
  const prepareExpenseHistory = () => {
    // Ordenar los gastos por fecha de forma descendente
    const sortedExpenses = combinedExpenses.sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    return sortedExpenses;
  };

  // Llamar a la función para preparar el historial de gastos
  const expenseHistory = prepareExpenseHistory();

  // Procesar datos para la evolución de los gastos en las últimas 24 horas
  const processEvolutionData = () => {
    const currentDate = new Date();
    const last24HoursExpenses = combinedExpenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return currentDate - expenseDate <= 24 * 60 * 60 * 1000;
    });

    // Agrupar los gastos por categoría
    const groupedExpenses = {
      Food: 0,
      Entertainment: 0,
      Transport: 0,
      Other: 0,
    };

    last24HoursExpenses.forEach(expense => {
      groupedExpenses[expense.category] += expense.value;
    });

    // Crear los datos para el gráfico
    const evolutionData = {
      labels: ['Food', 'Entertainment', 'Transport', 'Other'],
      datasets: [
        {
          data: [
            groupedExpenses.Food,
            groupedExpenses.Entertainment,
            groupedExpenses.Transport,
            groupedExpenses.Other,
          ],
          color: () => themeColors.line,
          strokeWidth: 2,
        },
      ],
    };

    return evolutionData;
  };

  // Llamar a la función para procesar los datos de evolución
  const evolutionData = processEvolutionData();

  // Verificar si hay datos disponibles
  const hasData = combinedExpenses.length > 0;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
          <Title>Expense Data</Title>
        </Header>
        <SummaryContainer>
          {hasData ? (
            <>
              <ChartBox>
                <CharTitle>Spending Distribution</CharTitle>
                <ChartContainer>
                  <PieChart
                    data={combinedData}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={'amount'}
                    backgroundColor={'transparent'}
                    paddingLeft={'10'}
                    center={[5, 0]}
                    absolute
                  />
                </ChartContainer>
              </ChartBox>
              <ChartBox>
                <CharTitle>Spending Evolution (Last 24 Hours)</CharTitle>
                <ChartContainer>
                  <LineChart
                    data={evolutionData}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                  />
                </ChartContainer>
              </ChartBox>
              <ChartBox>
                <CharTitle>Expense History</CharTitle>
                <ChartContainer>
                  <HistoryContainer>
                    <HistoryHeader>
                      <HistoryHeaderText>Date</HistoryHeaderText>
                      <HistoryHeaderText>Category</HistoryHeaderText>
                      <HistoryHeaderText>Amount</HistoryHeaderText>
                    </HistoryHeader>
                    <FlatList
                      data={expenseHistory}
                      width={screenWidth - 40}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => (
                        <HistoryRow>
                          <HistoryText>{new Date(item.date).toLocaleDateString()}</HistoryText>
                          <HistoryCategory>{item.category}</HistoryCategory>
                          <HistoryValue>{item.value.toFixed(2)}</HistoryValue>
                        </HistoryRow>
                      )}
                    />
                  </HistoryContainer>
                </ChartContainer>
              </ChartBox>
            </>
          ) : (
            <NoDataText>No data available</NoDataText>
          )}
        </SummaryContainer>
      </Container>
    </ScrollView>
  );
};

export default DataScreen;
