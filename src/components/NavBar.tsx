
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera } from 'lucide-react';
import UserMenu from './UserMenu';

const NavBar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : '';
  };

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera className="h-6 w-6" />
          <span className="text-xl font-bold">Photo Quest</span>
        </div>
        
        <div className="flex space-x-4">
          <Link 
            to="/challenges" 
            className={`nav-link ${isActive('/challenges')}`}
          >
            Challenges
          </Link>
          <Link 
            to="/gallery" 
            className={`nav-link ${isActive('/gallery')}`}
          >
            Photo Gallery
          </Link>
          <Link 
            to="/leaderboard" 
            className={`nav-link ${isActive('/leaderboard')}`}
          >
            Leaderboard
          </Link>
        </div>
        
        <UserMenu />
      </div>
    </nav>
  );
};

export default NavBar;
