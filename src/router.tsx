import { createBrowserRouter } from 'react-router-dom';
import Rxjs from './rx-js';
import LastRxjs from './last-rx-js';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rxjs />,
    },
    {
      path: '/last',
      element: <LastRxjs />,
    },
  ]);

  return { router };
};

export default Router;
