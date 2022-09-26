import theme from './theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppRouter from './routes/AppRouter';

import { Provider } from 'react-redux';
import store from './core/redux/store';

import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
