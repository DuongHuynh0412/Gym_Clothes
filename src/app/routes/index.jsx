import DefaultLayout from '../layouts/MainLayout';
import HomePage from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import SaleArea from "../../pages/SaleArea/SaleArea";

const publicRoutes = [
  { path: '/', element: HomePage, layout: DefaultLayout },
  { path: '/login', element: Login },
  { path: '/register', element: Register },
  { path: '/collections/:product-type/:gender', element: SaleArea, layout: DefaultLayout },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
