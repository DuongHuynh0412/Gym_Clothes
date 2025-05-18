import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './app/routes';
import DefaultLayout from './app/layouts/MainLayout';
import {Fragment} from 'react';
import './App.css';

function App() {

    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    const Page = route.element;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout == null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
