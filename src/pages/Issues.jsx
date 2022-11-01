import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { issueContext } from '../contexts/IssueContext';
import IssueItem from '../components/IssueItem';
import useIntersect from '../hooks/useIntersect';
import Spinner from '../components/Spinner';

function Issues() {
  const { fetch, actions, state } = useContext(issueContext);
  const [isLoading, setIsLoading] = useState(false);

  const fetchIssues = async () => {
    setIsLoading(true);
    await fetch.getIssues(state.range, state.page).then((res) => {
      actions.setIssueList((prev) => [...prev, ...res.data]);
    });
    actions.setPage(state.page++);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const [, setRef] = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      await fetchIssues();
      observer.observe(entry.target);
    },
    { threshold: 0.5 }
  );

  return (
    <div>
      <IssueList>
        {state.issueList.map((item) => (
          <IssueItem key={item.id} item={item} />
        ))}
      </IssueList>
      <div className="loading" ref={setRef}>
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

const IssueList = styled.ul`
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

export default Issues;
