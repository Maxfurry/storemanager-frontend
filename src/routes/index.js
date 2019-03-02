import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/404';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/login'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
