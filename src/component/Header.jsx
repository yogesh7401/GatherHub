import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="">
          <div className="flex justify-between h-16 px-10 shadow items-center">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-xl lg:text-2xl font-bold cursor-pointer"
              >
                GatherHub
              </Link>
              {/* <div className="hidden md:flex justify-around space-x-4">
                    <a href="#" className="hover:text-indigo-600 text-gray-700">Home</a>
                    <a href="#" className="hover:text-indigo-600 text-gray-700">About</a>
                    <a href="#" className="hover:text-indigo-600 text-gray-700">Service</a>
                    <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
                </div> */}
            </div>
            <div className="flex space-x-4 items-center">
              {/* <Link to="/login" className="text-gray-800 text-sm">LOGIN</Link>
                <Link to="/register" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
