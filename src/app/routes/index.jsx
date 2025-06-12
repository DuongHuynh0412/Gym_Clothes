import DefaultLayout from '../layouts/MainLayout';
import HomePage from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import SaleArea from "../../pages/SaleArea/SaleArea";
import Product from "../../pages/Product/Product";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import PaymentPage from "../../pages/Payment/Payment";

const publicRoutes = [
  { path: '/', element: HomePage, layout: DefaultLayout },
  { path: '/login', element: Login },
  { path: '/reset-password', element: ResetPassword },
  { path: '/signup', element: Register },
  { path: '/collections/:collection/:gender', element: SaleArea, layout: DefaultLayout },
  { path: '/collections/:productCollection', element: SaleArea, layout: DefaultLayout },
  { path: '/products/:productColorCode', element: Product, layout: DefaultLayout },
  { path: '/checkouts', element: PaymentPage, layout: DefaultLayout, isPrivate: true },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };