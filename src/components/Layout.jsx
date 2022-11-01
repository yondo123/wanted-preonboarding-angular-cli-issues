import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Title>
        <h2>Angular / Angular-cli</h2>
      </Title>
      <main>
        <Outlet />
      </main>
    </>
  );
}

const Title = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.font};
  background-color: ${({ theme }) => theme.white};
  text-align: center;
  position: relative;
  height: 64px;

  & > h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
  }
`;

export default Header;
