import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const LoadingIndicator = styled(ActivityIndicator).attrs(({ theme })=> ({
  color: theme.COLORS.GREEN_DARK
}))`
`