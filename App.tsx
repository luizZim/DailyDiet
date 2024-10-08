import { ThemeProvider } from 'styled-components/native'; 
import theme from './src/theme';


import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { Meals } from '@screens/Meals'
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
 const [fontsLoaded] = useFonts({Nunito_400Regular, Nunito_700Bold});

  return (
    <ThemeProvider theme={theme}>
      
      <StatusBar
       barStyle={'dark-content'}
       backgroundColor={"transparent"}
       translucent
      />

      { fontsLoaded ? <Meals /> : <Loading />}
    </ThemeProvider>
      
  );
}


