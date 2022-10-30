import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Angular / Angular-cli</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;
