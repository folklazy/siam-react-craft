
import { leaderboard } from '../services/mockData';

const Leaderboard = () => {
  const currentUser = leaderboard.find(entry => entry.username === 'BlueberryPie');
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Leaderboard</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-3 mb-6">
          {leaderboard.slice(0, 5).map((entry) => (
            <LeaderboardRow key={entry.userId} entry={entry} />
          ))}
        </div>
        
        {currentUser && currentUser.position > 5 && (
          <>
            <div className="text-center text-gray-500 py-2">•••</div>
            <div className="space-y-3">
              <LeaderboardRow entry={currentUser} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface LeaderboardRowProps {
  entry: {
    position: number;
    username: string;
    userAvatar?: string;
    totalScore: number;
  };
}

const LeaderboardRow = ({ entry }: LeaderboardRowProps) => {
  const isCurrentUser = entry.username === 'BlueberryPie';
  
  return (
    <div className={`bg-primary/20 rounded-xl p-4 flex items-center justify-between 
      ${isCurrentUser ? 'border-2 border-primary' : ''}`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 flex items-center justify-center font-bold">
          {entry.position}
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            {entry.userAvatar ? (
              <img 
                src={entry.userAvatar} 
                alt={entry.username} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                {entry.username.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <span className="font-medium">{entry.username}</span>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="text-right">
          <div className="font-medium">Total Score: </div>
        </div>
        <div className="w-20 text-right font-semibold">
          {entry.totalScore.toLocaleString()}
        </div>
        <div className="w-16 text-right text-gray-600">
          Points
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
