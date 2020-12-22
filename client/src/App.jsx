import React from 'react';
import 'materialize-css';
import AuthContext from './context/auth.context';
import useRoutes from './routes';
import useAuth from './hooks/auth.hook';
import Navbar from './components/Navbar';

export default function App() {
  const {
    token,
    login,
    logout,
    userId,
  } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated,
    }}
    >
      {isAuthenticated && <Navbar />}
      <div className="container">
        {routes}
      </div>
    </AuthContext.Provider>
  );
}
