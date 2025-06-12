import Header from './Header';
import Footer from "./Footer";
import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import Error from "../../pages/Error/Error";
import {Theme} from "@radix-ui/themes";

function MainLayout({children}) {
    return (
        <ErrorBoundary
            FallbackComponent={Error}
        >
            <Header/>
            <main>
                <Theme>
                    {children}
                </Theme>
            </main>
            <Footer/>
        </ErrorBoundary>
    );
}

export default MainLayout;