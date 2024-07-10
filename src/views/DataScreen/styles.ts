import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

export const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.beige};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const CharTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const ChartContainer = styled.View`
  margin-bottom: 30px;
  align-items: center;
`;

export const ChartBox = styled.View`
  background-color: ${({theme}) => theme.colors.lightBeige};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.mediumBrown};
  border-radius: 10px;
  padding: 10px;
`;

export const NoDataText = styled.Text`
  font-size: 16px;
  color: #7f7f7f;
  align-self: center;
`;

export const SummaryContainer = styled.View`
  margin-bottom: 30px;
  align-items: center;
`;

export const HistoryContainer = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

export const HistoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

export const HistoryHeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const HistoryRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5px;
`;

export const HistoryText = styled.Text`
  font-size: 16px;
`;
