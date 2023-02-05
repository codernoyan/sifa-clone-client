/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../Components/Dashboard';
import Main from '../../Layouts/Main';
import Home from '../../Pages/Home';
import SignIn from '../../Pages/SignIn';
import SignUp from '../../Pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {

      },
    ],
  },
]);

export default router;
