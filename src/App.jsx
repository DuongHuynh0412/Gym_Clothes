import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './app/routes';
import DefaultLayout from './app/layouts/MainLayout';
import {Fragment} from 'react';
import './App.css';
import PrivateRouter from "./app/routes/PrivateRoute";

function App() {

    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    let Page = route.element;

                    if (route.layout === null || route.layout === undefined) {
                        Layout = Fragment;
                    } else if (route.layout) {
                        Layout = route.layout;
                    }

                    const element = (
                        <Layout>
                            <Page />
                        </Layout>
                    );

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                route.isPrivate ? <PrivateRouter>{element}</PrivateRouter> : element
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
