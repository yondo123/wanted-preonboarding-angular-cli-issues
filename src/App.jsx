import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import responsive from './styles/mixin/responsive';
import colors from './styles/theme';
import IssueContext from './contexts/IssueContext';
import Layout from './components/Layout';
import IssueDetail from './pages/IssueDetail';
import Issues from './pages/Issues';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <IssueContext>
          <BrowserRouter>
            <Content>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Issues />} />
                  <Route path="/detail/:number" element={<IssueDetail />} />
                </Route>
              </Routes>
            </Content>
          </BrowserRouter>
        </IssueContext>
      </ThemeProvider>
    </>
  );
}

const Content = styled.div`
  padding: 0 24px;
  width: 100vw;
  ${responsive('md')} {
    padding: 0 48px;
  }
`;

export default App;
