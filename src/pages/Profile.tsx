
import { useState } from 'react';
import { currentUser } from '../services/mockData';
import { User } from '../types';
import { Trash2, Upload } from 'lucide-react';
import { toast } from 'sonner';

const Profile = () => {
  const [user, setUser] = useState<User | undefined>(currentUser);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    surname: user?.surname || '',
    username: user?.username || '',
    email: user?.email || '',
    password: '••••••••••',
    confirmPassword: '••••••••••'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit to an API
    toast.success("Profile updated successfully!");
  };
  
  const handleDeleteAccount = () => {
    toast.error("This is just a demo. Your account would be deleted here.");
  };
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
      
      <div className="max-w-4xl mx-auto bg-primary/10 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-primary/20 rounded-full overflow-hidden mb-4">
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl text-primary/50">
                  {user?.name.charAt(0)}
                </div>
              )}
            </div>
            
            <h2 className="text-xl font-bold mb-1">{user?.name} {user?.surname}</h2>
            <p className="text-gray-600 mb-4">
              Total Score: {user?.totalScore.toLocaleString()} Points
            </p>
            
            <button className="btn-primary mb-4 flex items-center space-x-2 w-full justify-center">
              <Upload size={18} />
              <span>Upload Picture</span>
            </button>
            
            <button 
              className="text-destructive hover:text-destructive/80 transition-colors flex items-center space-x-1"
              onClick={handleDeleteAccount}
            >
              <Trash2 size={18} />
              <span>Delete Account</span>
            </button>
          </div>
          
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium mb-1">Surname</label>
                  <input 
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
                  <input 
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
                  <input 
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
