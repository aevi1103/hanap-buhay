import { useRoutes, NavLink } from 'react-router-dom';
import './App.css';
import { Layout } from './app.styles'; // for custom css, or we can just use chakra
import { routes } from './core/routes';

const App = () => {
  const element = useRoutes(routes);
  return (
    <Layout>
      <nav classsName="w-full flex items-center ">
        <ul className="flex justify-between w-full px-20 py-5 drop-shadow border-bottom">
          <p>Search...</p>

          <div className="flex">
            <li className="mx-2 text-slate-500 uppercase">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mx-2 text-slate-500 uppercase">
              <NavLink to="/messages">Messages</NavLink>
            </li>
            <li className="mx-2 text-slate-500 uppercase">
              <NavLink to="/profile">Profile </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <div>{element}</div>
    </Layout>
  );
};

export default App;
