import styled from 'styled-components';
import { useContext, useState } from 'react';
import { issueContext } from '../contexts/IssueContext';
import IssueItem from '../components/IssueItem';
import useIntersect from '../hooks/useIntersect';
import Spinner from '../components/Spinner';
import AdBanner from '../components/AdBanner';
import constants from '../utils/constants';

function Issues() {
  const { fetch, actions, state } = useContext(issueContext);
  const [isLoading, setIsLoading] = useState(false);
  let isLimit = false;

  const fetchIssues = async () => {
    if (isLimit) {
      setIsLoading(false);
      return;
    }
    await fetch.getIssues(state.range, state.page).then((res) => {
      if (res.data.length) {
        actions.setIssueList((prev) => [...prev, ...res.data]);
        actions.setPage(state.page++);
        setIsLoading(true);
        return;
      }
      isLimit = true;
    });
  };

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
        {state.issueList.map((item, index) =>
          index === constants.AD_SEQUENCE ? <AdBanner /> : <IssueItem key={item.id} item={item} />
        )}
      </IssueList>
      <div className="loading" ref={setRef}>
        {isLoading && !isLimit && <Spinner />}
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
