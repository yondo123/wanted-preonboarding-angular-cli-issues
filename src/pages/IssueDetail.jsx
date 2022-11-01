import Markdown from 'react-markdown';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { issueContext } from '../contexts/IssueContext';

function IssueDetail() {
  const { issueNumber } = useLocation().state;
  const { fetch } = useContext(issueContext);
  const [issue, setIssue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIssueDetail = async () => {
    await fetch
      .getIssueDetail(issueNumber)
      .then((res) => {
        setIssue(res.data);
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchIssueDetail();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <span>loading..</span>
      </div>
    );
  }

  return (
    <IssueItem>
      <header className="title">
        <div className="image">
          <img src={issue.user.avatar_url || ''} alt="" />
        </div>
        <div className="post">
          <p className="post-header">
            #{issue.number} <span className="title">{issue.title}</span>
            <span className="comments">{issue.comments}</span>
          </p>
          <p className="post-detail">
            <span>
              작성자: {issue.user.login}, 작성일: {issue.created_at}
            </span>
          </p>
        </div>
      </header>
      <main>
        <Markdown>{issue.body}</Markdown>
      </main>
    </IssueItem>
  );
}

const IssueItem = styled.li`
  background-color: #402e5d;
  color: #402e5d;
`;

export default IssueDetail;
