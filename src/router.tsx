import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import List from './pages/List';

export default function Router() {
  return (
    <Routes>
      <Route path="/list" element={<List />} />
      <Route path="*" element={<Index />} />
    </Routes>
  );
}
