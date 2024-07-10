import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create({
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

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
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.brown};
`;

export const CharTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: ${({theme}) => theme.colors.brown};
`;

export const ChartContainer = styled.View`
  align-items: center;
  margin-bottom: 5px;
`;

export const ChartBox = styled.View`
  background-color: ${({theme}) => theme.colors.lightBeige};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.mediumBrown};
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const NoDataText = styled.Text`
  font-size: 16px;
  color: #7f7f7f;
  align-self: center;
`;

export const SummaryContainer = styled.View`
  margin-bottom: 20px;
  align-items: center;
  width: 100%;
`;

export const HistoryContainer = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

export const HistoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const HistoryHeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

export const HistoryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
`;

export const HistoryText = styled.Text`
  font-size: 16px;
  padding: 5px;
  text-align: center;
  flex: 1;
`;

export const HistoryCategory = styled.Text`
  font-size: 16px;
  padding: 5px;
  text-align: center;
  flex: 1;
`;

export const HistoryValue = styled.Text`
  font-size: 16px;
  padding: 5px;
  text-align: center;
  flex: 1;
`;

export const getThemeColors = (theme: DefaultTheme) => ({
  food: theme.colors.chocolate,
  entertainment: theme.colors.sandyBrown,
  transport: theme.colors.tan,
  other: theme.colors.sienna,
});
