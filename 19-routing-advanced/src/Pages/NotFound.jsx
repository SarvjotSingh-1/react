import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-300">Oops! Page not found.</p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
