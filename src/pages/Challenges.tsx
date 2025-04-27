
import { useState } from 'react';
import { challenges } from '../services/mockData';
import { ChallengeDifficulty } from '../types';
import { Camera, UploadCloud } from 'lucide-react';

const Challenges = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<ChallengeDifficulty>("Easy");
  
  const filteredChallenges = challenges.filter(
    challenge => challenge.difficulty === selectedDifficulty
  );
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Challenge</h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          className={`px-6 py-2 rounded-full ${selectedDifficulty === 'Easy' 
            ? 'bg-success text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          onClick={() => setSelectedDifficulty('Easy')}
        >
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 rounded-full bg-green-500"></div>
            Easy
          </div>
        </button>
        <button 
          className={`px-6 py-2 rounded-full ${selectedDifficulty === 'Medium' 
            ? 'bg-warning text-secondary-foreground' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          onClick={() => setSelectedDifficulty('Medium')}
        >
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 rounded-full bg-yellow-500"></div>
            Medium
          </div>
        </button>
        <button 
          className={`px-6 py-2 rounded-full ${selectedDifficulty === 'Hard' 
            ? 'bg-destructive text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          onClick={() => setSelectedDifficulty('Hard')}
        >
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 rounded-full bg-red-500"></div>
            Hard
          </div>
        </button>
      </div>
      
      <div className="max-w-lg mx-auto">
        {filteredChallenges.map(challenge => (
          <div key={challenge.id} className="bg-primary/20 p-6 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-lg font-semibold space-x-2">
                <Camera />
                <span>{selectedDifficulty} Challenge</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-lg font-medium mb-2">{challenge.description}</p>
            </div>
            
            <div className="flex justify-between mb-4">
              <button className="bg-accent text-white px-6 py-2 rounded-md">
                ← Skip
              </button>
              <button className="bg-success text-white px-6 py-2 rounded-md">
                Accept →
              </button>
            </div>
            
            <div className="border-t border-primary/30 pt-4 mt-2">
              <button className="w-full flex items-center justify-center space-x-2 py-2 bg-primary/10 hover:bg-primary/20 rounded-md transition-colors">
                <UploadCloud size={18} />
                <span>Upload Photo</span>
              </button>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-6">
          <button className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition-colors">
            🎲 Roll Challenge
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            🕒 5/10 challenges remaining today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
