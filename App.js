import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';
import { StatusBar} from 'react-native';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#D2691E",
      background: "#D2691E",
      placeholder: "#fff",
      text: "#fff",
    },
  };

  return (
    <PaperProvider theme={theme}>
      {/*Modificando a cor da barra de Status do Android*/}
        <StatusBar backgroundColor="#CD853F" />
        <Routes/>
    </PaperProvider>
  );
};

export default App;