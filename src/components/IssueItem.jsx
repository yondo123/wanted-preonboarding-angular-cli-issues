import { Link } from 'react-router-dom';

function IssueItem({ item }) {
  return (
    <li>
      <div className="post">
        <Link to={`/detail/${item.number}`} state={{ issueNumber: item.number }}>
          <div>
            <span className="id">#{item.id}</span>
            <span className="title">{item.title}</span>
          </div>
        </Link>
        <div>
          <span>
            <span className="writer">{item.user.login}</span>
            <span className="comments">{item.comments}</span>
          </span>
        </div>
      </div>
    </li>
  );
}

export default IssueItem;
