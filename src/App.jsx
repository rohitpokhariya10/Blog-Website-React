import React from 'react'
import AppRouter from './router/AppRouter'
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ArticleProvider } from './context/ArticleContext';

const App = () => {
  return (
    <div className='h-[100%] w-[100%] flex items-center justify-center'>
      <ArticleProvider>
      <AuthProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </AuthProvider>
    </ArticleProvider>
    </div>

  );
}

export default App
