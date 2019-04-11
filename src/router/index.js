import Home from 'pages/home/Home';
import Classify from 'pages/classify/Classify';
import Cart from 'pages/cart/Cart';
import User from 'pages/user/User';
import Subcate from 'pages/subcate/Subcate';
import Details from 'pages/details/Details';

export const routes = [
  {
    id: 1,
    path: '/home',
    component: Home
  },
  {
    id: 2,
    path: '/classify',
    component: Classify
  },
  {
    id: 3,
    path: '/cart',
    component: Cart
  },
  {
    id: 4,
    path: '/user',
    component: User
  },
  {
    id: 5,
    path: '/subcate',
    component: Subcate
  },
  {
    id: 6,
    path: '/details',
    component: Details
  }
];
