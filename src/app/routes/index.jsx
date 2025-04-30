import DefaultLayout from '../layouts/MainLayout';
import HomePage from "../../pages/homePage/HomePage";
import Login from "../../pages/loginPage/LoginPage";
import Register from "../../pages/register/registerPage";
import SaleProduct from "../../pages/salesPage/salepage";

const publicRoutes = [
  { path: '/', element: HomePage, layout: DefaultLayout },
  { path: '/login', element: Login },
  { path: '/register', element: Register },
  { path: '/sales-product/:type', element: SaleProduct, layout: DefaultLayout },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
