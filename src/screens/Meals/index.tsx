import { Text } from 'react-native';

import { Container } from './styles';
import { Header } from '@components/Header';
import { Statistics } from '@components/Statistics';

export function Meals() {
  return (
    <Container>
      <Header />
      <Statistics />
    </Container>
  );
}

