import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}