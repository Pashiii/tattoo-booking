import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6 bg-black text-white font-roboto">
      <h1 className="text-6xl font-bold font-righteous">Oops!</h1>
      <p className="mt-4 text-lg">Something went wrong.</p>

      {error?.status && (
        <p className="mt-2 text-gray-500">
          {error.status} – {error.statusText || "Unexpected Error"}
        </p>
      )}

      <Link
        to="/"
        className="mt-6 px-6 py-2 rounded-lg bg-secondary-bg text-secondary hover:bg-amber-950 hover:text-white"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
