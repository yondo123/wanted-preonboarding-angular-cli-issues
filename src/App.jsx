import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import IssueDetail from './pages/IssueDetail';
import Issuses from './pages/Issues';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Issuses />} />
            <Route path="/detail" element={<IssueDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
