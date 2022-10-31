import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssueContext from './contexts/IssueContext';
import Layout from './components/Layout';
import IssueDetail from './pages/IssueDetail';
import Issues from './pages/Issues';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <IssueContext>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Issues />} />
              <Route path="/detail/:number" element={<IssueDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </IssueContext>
    </>
  );
}

export default App;
