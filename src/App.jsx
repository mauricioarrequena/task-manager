import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Inbox from './pages/Inbox/Inbox.jsx';
import Today from './pages/Today/Today.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inbox" />} />

      <Route path="/" element={<Layout />}>
        <Route path="inbox" element={<Inbox />}/>
        <Route path="today" element={<Today />}/>
      </Route>
    </Routes>
  );
}
