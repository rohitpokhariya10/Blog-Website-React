import React from 'react'
import AppRouter from './router/AppRouter'
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ArticleProvider } from './context/ArticleContext';

const App = () => {
  return (
    <ArticleProvider>
      <AuthProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </AuthProvider>
    </ArticleProvider>

  );
}

export default App
