import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-2rem)] gap-4 tracking-wide">
      <h1 className="text-4xl font-bold text-gray-300">404</h1>
      <p className="text-lg text-gray-200">Page Not Found</p>
      <Link to="/" className="px-4 py-2 bg-gray-700 text-gray-200 rounded hover:bg-gray-600 transition">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
