import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';
import { StatusBar} from 'react-native';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#222",
      background: "#A95534",
      placeholder: "#fff",
      text: "#fff",
    },
  };

  return (
    <PaperProvider theme={theme}>
      {/*Modificando a cor da barra de Status do Android*/}
        <StatusBar backgroundColor="#222" />
        <Routes/>
    </PaperProvider>
  );
};

export default App;