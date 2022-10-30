/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import issue from '../api/issue';

const issueContext = createContext({
  state: { page: 1, range: 10, issueNumber: '', issueList: [] },
  actions: {
    setPage: () => {},
    setRange: () => {},
    setIssueList: () => {},
  },
  fetch: {
    getIssues: issue.getIssues,
    getIssueDetail: issue.getDetailIssue,
  },
});

function IssueContext({ children }) {
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(10);
  const [issueList, setIssueList] = useState([]);

  const value = {
    state: { page, range, issueList },
    actions: { setPage, setRange, setIssueList },
    fetch: {
      getIssues: issue.getIssues,
      getIssueDetail: issue.getDetailIssue,
    },
  };

  return <issueContext.Provider value={value}>{children}</issueContext.Provider>;
}

export { issueContext };
export default IssueContext;
