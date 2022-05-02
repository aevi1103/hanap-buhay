import Home from '../features/home/home.component';
import Posting from '../features/posting/posting.component';
import Messages from '../features/messages/messages.component';
import Profile from '../features/profile/profile.component';

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
  {
    path: '/messages',
    element: <Messages />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];

export { routes };
