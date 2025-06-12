import './Error.css'
import {Button, Flex} from "@radix-ui/themes";
import {Link} from "react-router-dom";

export default function Error({error, resetErrorBoundary}) {
    return (
        <div className={'w-100 error-page-container'}>
            <div className="error-page">
                <div className="relative z-10 p-6 max-w-4xl mx-auto">
                    <img src="https://via.placeholder.com/200x50?text=Logo" alt="Logo" className="mx-auto mb-4"/>
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-6">
                        WE CAN'T FIND THAT PAGE. Not sure what’s happened there. Maybe go grab a new fit instead and
                        then we can go gym?
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                            <Link to="/collections/womens">SHOP WOMENS</Link>
                        </Button>
                        <Button asChild className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                            <Link to="/collections/mens">SHOP MENS</Link>
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-6">Error: {error.message || 'Page not found'}</p>
                    <button
                        className="mt-4 text-blue-600 hover:underline"
                        onClick={resetErrorBoundary}
                    >
                        Retry
                    </button>
                </div>
            </div>
        </div>
    );
}

