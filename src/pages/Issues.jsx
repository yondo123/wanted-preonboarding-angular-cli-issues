import { useContext, useEffect, useState } from 'react';
import { issueContext } from '../contexts/IssueContext';
import IssueItem from '../components/IssueItem';

function Issues() {
  const { fetch, actions, state } = useContext(issueContext);
  const [isLoading, setIsLoading] = useState(false);
  const [target, setTarget] = useState(null);

  const fetchIssues = async (observer) => {
    if (!isLoading && observer[0].isIntersecting) {
      setIsLoading(true);
      await fetch
        .getIssues(state.range, state.page)
        .then((res) => {
          actions.setIssueList((prev) => [...prev, ...res.data]);
        })
        .then(() => {
          setIsLoading(false);
          actions.setPage(state.page++);
        });
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(fetchIssues, { threshold: 0.5 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <div>
      <ul>
        {state.issueList.map((item) => (
          <IssueItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="loading" ref={setTarget}>
        <span>{!isLoading && 'Loading..'}</span>
      </div>
    </div>
  );
}

export default Issues;
