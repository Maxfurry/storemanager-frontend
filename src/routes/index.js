import Home from '../pages/Home';
import Login from '../pages/Login';
import CartPage from '../pages/CartPage';
import NotFound from '../pages/404';
import Admin from '../pages/Admin';

export default [
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/'
  },
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/home'
  },
  {
    name: 'admin',
    component: Admin,
    exact: true,
    path: '/admin'
  },
  {
    name: 'cart-overview',
    component: CartPage,
    exact: true,
    path: '/cart'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
