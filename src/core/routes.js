import Home from '../features/home/home.component';
import Posting from '../features/posting/posting.component';

// RouteObject
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posting',
    element: <Posting />,
  },
];

export { routes };
