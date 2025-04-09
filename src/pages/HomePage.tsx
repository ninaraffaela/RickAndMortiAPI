import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1 className="mb-6">Welcome to my AMAAAZIIING Rick & Morty Page</h1>
      <Link
        to="/characters"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        All Characters
      </Link>
    </>
  );
}

export default HomePage;
