import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import Apps from './pages/Apps/index';
import AppList from './pages/Apps/AppList';
import AppRegister from './pages/Apps/Register';
import AppEdit from './pages/Apps/Edit';
import UserProfile from './pages/User/Profile';
import UserSettings from './pages/User/Settings';
import User from './pages/User';
import { ReactElement, useContext } from 'react';
import { contextUser } from './store';

interface PropsType {
  children: ReactElement | ReactElement[];
}

const ProtectedRoute: React.FC<PropsType> = ({ children }) => {
  const { userStore } = useContext(contextUser);

  if (userStore?.unId && userStore?.manager) return <>{children}</>;

  return <Navigate to="/" />;
};

export default function Router() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE}>
      <User />
      <Routes>
        <Route
          path="/apps"
          element={
            <ProtectedRoute>
              <Apps />
            </ProtectedRoute>
          }
        >
          <Route
            path="list"
            element={
              <ProtectedRoute>
                <AppList />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute>
                <AppRegister />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:token"
            element={
              <ProtectedRoute>
                <AppEdit />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
