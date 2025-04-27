
import { useState } from 'react';
import { ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock data - in a real app, this would come from auth context
  const user = {
    username: 'BlueberryPie',
    avatar: null
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 bg-primary-foreground/10 px-3 py-1 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-7 h-7 rounded-full bg-primary-foreground/20 flex items-center justify-center">
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt={user.username} 
              className="w-full h-full rounded-full object-cover" 
            />
          ) : (
            <User className="w-4 h-4" />
          )}
        </div>
        <span>{user.username}</span>
        <ChevronDown size={16} />
      </button>
      
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
          <Link 
            to="/profile" 
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-secondary"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <button 
            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-secondary"
            onClick={() => setIsMenuOpen(false)}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
