import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const Errorr = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Large Error Status */}
        <h1 className="text-9xl font-extrabold text-orange-500 animate-bounce">
          {error.status || "404"}
        </h1>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 text-lg">
            {error.data || "The page you are looking for doesn't exist or an error occurred."}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Link
            to="/home"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 active:scale-95"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Subtle detail for developers */}
        <p className="text-xs text-gray-400 mt-8 font-mono">
          Error Log: {error.statusText || "Unknown Error"}
        </p>
      </div>
    </div>
  );
};

export default Errorr;