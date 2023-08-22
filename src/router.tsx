import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Index from './pages/Index';
import Apps from './pages/Apps/index';
import AppList from './pages/Apps/AppList';
import AppRegister from './pages/Apps/Register';

export default function Router() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE}>
      <Routes>
        <Route path="/apps" element={<Apps />}>
          <Route path="list" element={<AppList />} />
          <Route path="register" element={<AppRegister />} />
        </Route>
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
