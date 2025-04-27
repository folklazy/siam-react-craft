
import { useNavigate } from 'react-router-dom';
import { Camera, Trophy, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Photo Quest</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Complete photo challenges, earn points, and climb the leaderboard while sharing your best moments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <FeatureCard 
          icon={<Camera className="h-10 w-10" />}
          title="Photo Challenges"
          description="Complete daily photo challenges of varying difficulty to earn points."
          onClick={() => navigate('/challenges')}
        />
        
        <FeatureCard 
          icon={<Users className="h-10 w-10" />}
          title="Photo Gallery"
          description="View and like photos from other users in our community gallery."
          onClick={() => navigate('/gallery')}
        />
        
        <FeatureCard 
          icon={<Trophy className="h-10 w-10" />}
          title="Leaderboard"
          description="Climb the ranks and see how you compare to other photographers."
          onClick={() => navigate('/leaderboard')}
        />
      </div>
      
      <div className="mt-12">
        <button 
          onClick={() => navigate('/challenges')}
          className="btn-primary text-lg"
        >
          Start Your Quest
        </button>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const FeatureCard = ({ icon, title, description, onClick }: FeatureCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;
