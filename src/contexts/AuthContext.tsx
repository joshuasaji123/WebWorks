import { createContext, useContext, useState, ReactNode } from 'react';
import { mockUsers } from '../data/mockData';

interface AuthContextType {
  currentUser: any;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string, role: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const login = (email: string, password: string) => {
    const user = mockUsers.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = (name: string, email: string, password: string, role: string) => {
    if (mockUsers.some(u => u.email === email)) {
      return false;
    }
    const newUser = {
      id: String(mockUsers.length + 1),
      name,
      email,
      role,
      courses: [],
      progress: {}
    };
    mockUsers.push(newUser);
    setCurrentUser(newUser);
    return true;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}