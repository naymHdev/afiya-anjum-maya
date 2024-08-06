import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-xl mt-2">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="mt-4">It might have been moved or deleted.</p>
        <Link href="/">
          <a className="mt-6 inline-block bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition">
            Go to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
