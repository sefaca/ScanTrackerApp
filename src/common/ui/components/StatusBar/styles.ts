import {StatusBar as BaseStatusBar} from 'react-native';
import styled from 'styled-components/native';

export const StatusBar = styled(BaseStatusBar).attrs(({theme}) => ({
  backgroundColor: theme.colors.destructive,
}))``;
