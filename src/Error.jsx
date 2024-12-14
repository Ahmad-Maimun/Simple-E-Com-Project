/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This goes back to the previous page
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-pink-500 text-white">
      <div className="text-center p-8 bg-white bg-opacity-30 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4">Oops!</h1>
        <p className="text-2xl mb-4">Something went wrong...</p>
        <p className="text-lg mb-6">
          We couldn't find the page you're looking for.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-white text-pink-600 py-2 px-6 rounded-full font-medium shadow-lg hover:bg-pink-100 hover:scale-105 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Error;
