import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Menu, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            ResumeCraft AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link to="/templates" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Templates</Link>
          <Link to="/editor" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
            Create Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link to="/templates" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Templates</Link>
          <Link to="/editor" className="block text-blue-600 font-bold" onClick={() => setIsMenuOpen(false)}>Create Resume</Link>
        </div>
      )}
    </header>
  );
};

export default Header;