import { Text } from 'react-native';

import { Container } from './styles';
import { Header } from '@components/Header';
import { Statistics } from '@components/Statistics';
import { MealsButton } from '@components/MealsButton';

export function Meals() {
  return (
    <Container>
      <Header />
      <Statistics />
      <MealsButton icon='PLUS'/>
    </Container>
  );
}

