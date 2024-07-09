/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
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
  styles,
  chartConfig,
  Container,
} from './styles';

const screenWidth = Dimensions.get('window').width;

const DataScreen = ({route, navigation}) => {
  const {expenses1, expenses2, expenses3} = route.params || {};

  // Procesar y combinar los datos de las tres categorías
  const combinedData = [
    {
      name: 'Food',
      amount: expenses1.reduce((acc, expense) => acc + expense.value, 0),
      color: '#FF6384',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Entertainment',
      amount: expenses2.reduce((acc, expense) => acc + expense.value, 0),
      color: '#36A2EB',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Transport',
      amount: expenses3.reduce((acc, expense) => acc + expense.value, 0),
      color: '#FFCE56',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  // Combina los gastos de las tres categorías en un solo arreglo
  const combinedExpenses = [...expenses1, ...expenses2, ...expenses3];

  // Calcular el total de dinero gastado
  const totalGasto = combinedExpenses.reduce(
    (acc, expense) => acc + expense.value,
    0,
  );

  // Procesa los datos para el gráfico de evolución de gastos
  const processEvolutionData = expenses => {
    const dateMap = {};

    // Agrupa los gastos por fecha y suma los valores
    expenses.forEach(expense => {
      const date = expense.date || 'Unknown Date';
      if (!dateMap[date]) {
        dateMap[date] = 0;
      }
      dateMap[date] += expense.value;
    });

    // Ordena las fechas
    const sortedDates = Object.keys(dateMap).sort();

    // Prepara los datos para el gráfico
    const labels = sortedDates;
    const data = sortedDates.map(date => dateMap[date]);

    return {labels, data};
  };

  const evolutionData = processEvolutionData(combinedExpenses);

  // Prepara los datos para el historial de gastos
  const prepareExpenseHistory = expenses => {
    return expenses.map((expense, index) => ({
      key: `${index}`,
      date: expense.date || 'Unknown Date',
      category: expense.category || 'Unknown Category',
      value: expense.value.toFixed(2),
    }));
  };

  const expenseHistory = prepareExpenseHistory(combinedExpenses);

  return (
    <ScrollView>
    <Container>
      <Button title="Volver" onPress={() => navigation.goBack()} />
      <Title>Pantalla de Datos</Title>
      <ChartContainer>
        <ChartBox>
          {combinedData.every(data => data.amount > 0) ? (
            <PieChart
              data={combinedData}
              width={screenWidth - 40}
              height={220}
              chartConfig={chartConfig}
              accessor="amount"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          ) : (
            <NoDataText>
              No hay datos suficientes para mostrar el gráfico
            </NoDataText>
          )}
        </ChartBox>
      </ChartContainer>
      <ChartContainer>
        <ChartBox>
        <CharTitle>Evolución de Gastos</CharTitle>
        {evolutionData.labels.length > 0 ? (
          <LineChart
            data={{
              labels: evolutionData.labels,
              datasets: [
                {
                  data: evolutionData.data,
                },
              ],
            }}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chartStyle}
          />
        ) : (
          <NoDataText>
            No hay datos suficientes para mostrar el gráfico
          </NoDataText>
        )}
        </ChartBox>
      </ChartContainer>
      <SummaryContainer>
        <ChartBox>
          <CharTitle>Total Gastado: {totalGasto.toFixed(2)}</CharTitle>
        </ChartBox>
      </SummaryContainer>
      <HistoryContainer>
        <ChartBox>
        <CharTitle>Últimos Gastos</CharTitle>
        <HistoryHeader>
          <HistoryHeaderText>Fecha</HistoryHeaderText>
          <HistoryHeaderText>Categoría</HistoryHeaderText>
          <HistoryHeaderText>Gasto</HistoryHeaderText>
        </HistoryHeader>
        <FlatList
          data={expenseHistory}
          renderItem={({item}) => (
            <HistoryRow>
              <HistoryText>{item.date}</HistoryText>
              <HistoryText>{item.category}</HistoryText>
              <HistoryText>{item.value}</HistoryText>
            </HistoryRow>
          )}
        />
        </ChartBox>
      </HistoryContainer>
    </Container>
    </ScrollView>
  );
};

export default DataScreen;
