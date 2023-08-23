import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import Apps from './pages/Apps/index';
import AppList from './pages/Apps/AppList';
import AppRegister from './pages/Apps/Register';
import AppEdit from './pages/Apps/Edit';

export default function Router() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE}>
      <Routes>
        <Route path="/apps" element={<Apps />}>
          <Route path="list" element={<AppList />} />
          <Route path="register" element={<AppRegister />} />
          <Route path="edit/:token" element={<AppEdit />} />
        </Route>
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
