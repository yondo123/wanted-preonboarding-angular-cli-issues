import styled from 'styled-components';
import logo from '../assets/logo-wanted.png';

function AdBanner() {
  return (
    <Banner>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="wanted" />
      </a>
    </Banner>
  );
}

const Banner = styled.li`
  list-style: none;
  margin-bottom: 12px;
  border-bottom: solid 1px ${({ theme }) => theme.border};
  padding: 12px 0;

  img {
    margin: auto;
    display: block;
    height: 100%;
    max-width: 256px;
    object-fit: cover;
  }
`;

export default AdBanner;
