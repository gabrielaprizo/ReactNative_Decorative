import React from 'react';
import Login from './pages/login';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar, Text } from 'react-native';

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
        <Login />
    </PaperProvider>
  );
};

export default App;