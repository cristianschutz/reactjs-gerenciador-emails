import React, { createContext, useContext, useCallback, useState } from 'react';

interface AuthState {
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData extends AuthState {
  signIn(credentials: SignInCredentials): boolean;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    if (localStorage.getItem('@emailManager:user')) {
      return JSON.parse(localStorage.getItem('@emailManager:user') || '');
    } else {
      return {} as AuthContextData;
    }
  });

  const signIn = useCallback(({ email, password }) => {
    let fixedUser = {
      user: {
        name: 'Cristian Schutz',
      },
    };

    if (email === 'admin' && password === 'admin') {
      setData(fixedUser);

      localStorage.setItem('@emailManager:user', JSON.stringify(fixedUser));

      return true;
    } else {
      localStorage.removeItem('@emailManager:user');
      setData({} as AuthState);
      return false;
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@emailManager:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
