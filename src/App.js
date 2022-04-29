import { useRoutes, NavLink } from 'react-router-dom';
import './App.css';
import { Layout } from './app.styles'; // for custom css, or we can just use chakra
import { routes } from './core/routes';

const App = () => {
  const element = useRoutes(routes);
  return (
    <Layout>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posting">Posting</NavLink>
          </li>
        </ul>
      </nav>
      <div>{element}</div>
    </Layout>
  );
};

export default App;
