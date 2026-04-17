import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Balances from './pages/Balances';
import ChainExplorer from './pages/ChainExplorer';
import Dashboard from './pages/Dashboard';
import Mine from './pages/Mine';
import PendingPage from './pages/PendingPage';
import Transactions from './pages/Transactions';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/balances" element={<Balances />} />
        <Route path="/chain" element={<ChainExplorer />} />
        <Route path="/pending" element={<PendingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
