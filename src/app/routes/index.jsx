import DefaultLayout from '../layouts/MainLayout';
import HomePage from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import SaleArea from "../../pages/SaleArea/SaleArea";
import Product from "../../pages/Product/Product";

const publicRoutes = [
  { path: '/', element: HomePage, layout: DefaultLayout },
  { path: '/login', element: Login },
  { path: '/register', element: Register },
  { path: '/collections/:productType/:gender', element: SaleArea, layout: DefaultLayout },
  { path: '/products/:productCode', element: Product, layout: DefaultLayout },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
