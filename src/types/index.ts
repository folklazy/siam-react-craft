
export interface User {
  id: string;
  username: string;
  name: string;
  surname: string;
  email: string;
  avatar?: string;
  totalScore: number;
}

export interface Photo {
  id: string;
  userId: string;
  username: string;
  userAvatar?: string;
  imageUrl: string;
  likes: number;
  title?: string;
  createdAt: string;
}

export type ChallengeDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: ChallengeDifficulty;
  pointsReward: number;
  options?: string[];
  correctAnswer?: string;
}

export interface LeaderboardEntry {
  position: number;
  userId: string;
  username: string;
  userAvatar?: string;
  totalScore: number;
}
