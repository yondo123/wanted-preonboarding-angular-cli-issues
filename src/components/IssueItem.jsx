import styled from 'styled-components';
import { Link } from 'react-router-dom';
import responsive from '../utils/format';
import formatTime from '../utils/format';

function IssueItem({ item }) {
  return (
    <Issue>
      <Post>
        <Link to={`/detail/${item.number}`} state={{ issueNumber: item.number }}>
          <PostTitle>
            <span className="id">#{item.id}</span>
            <span className="title">{item.title}</span>
          </PostTitle>
        </Link>
        <PostDetail>
          <span>
            <span className="writer">{item.user.login}</span>
            <span className="comments">{item.comments}</span>
            <span className="time">{formatTime(item.created_at)}</span>
          </span>
        </PostDetail>
      </Post>
    </Issue>
  );
}

const Issue = styled.li`
  color: ${({ theme }) => theme.font};
  border-bottom: solid 1px ${({ theme }) => theme.border};
  ${responsive('md')} {
    padding: 0 48px;
  }
`;

const Post = styled.div`
  padding: 12px 0;
`;

const PostTitle = styled.div`
  margin-bottom: 8px;
  & > .id {
    font-weight: 700;
    margin-right: 8px;
  }
`;

const PostDetail = styled.div`
  font-size: 12px;
`;

export default IssueItem;
