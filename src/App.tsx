import React from 'react';
import Routes from './routes/index';
import { Toast } from './components';
import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
import { I18n } from './hooks/i18n';
import GlobalStyle from './styles/global';

function App() {
  return (
    <I18n>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
          <Toast />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </I18n>
  );
}

export default App;
