import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-bold">
              <span className="text-gray-800">Real</span>
              <span className="text-[#3B82F6]"> Trust</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">
              HOME
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">
              SERVICES
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">
              ABOUT / PROJECTS
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">
              TESTIMONIALS
            </Link>
             <Link to="/admin" className="text-purple-600 hover:text-[#3B82F6] transition-colors border-xl font-medium ">
              Admin
            </Link>
            <button className="bg-[#FF6B35] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors font-medium">
              CONTACTS
            </button>
          </nav>

          <button className="md:hidden flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
