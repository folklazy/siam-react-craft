
import { User, Photo, Challenge, LeaderboardEntry } from '../types';

// Mock Users
export const users: User[] = [
  {
    id: '1',
    username: 'LovélySummer',
    name: 'Emma',
    surname: 'Johnson',
    email: 'emma@example.com',
    avatar: '/lovable-uploads/fd5632a6-141a-47e8-a408-aebcb0159a15.png',
    totalScore: 10000
  },
  {
    id: '2',
    username: 'BunnyBlush',
    name: 'Oliver',
    surname: 'Smith',
    email: 'oliver@example.com',
    avatar: '/lovable-uploads/2f13c3f2-a1ee-4178-ae5d-46bc01ff95b2.png',
    totalScore: 9000
  },
  {
    id: '3',
    username: 'PeachyPaws',
    name: 'Sophia',
    surname: 'Brown',
    email: 'sophia@example.com',
    avatar: '/lovable-uploads/13a88c41-8e02-464d-8e0e-c773ba1a148c.png',
    totalScore: 8000
  },
  {
    id: '4',
    username: 'StrawberryJam',
    name: 'William',
    surname: 'Garcia',
    email: 'william@example.com',
    avatar: '/lovable-uploads/552ec731-e1d4-45bc-9e40-4fb64b4a484e.png',
    totalScore: 7000
  },
  {
    id: '5',
    username: 'SweetHoney',
    name: 'Ava',
    surname: 'Miller',
    email: 'ava@example.com',
    avatar: '/lovable-uploads/b3dd7e76-f342-4b1b-a6f5-f3a27583004e.png',
    totalScore: 6000
  },
  {
    id: '6',
    username: 'BlueberryPie',
    name: 'Amelia',
    surname: 'Bennett',
    email: 'iloveblueberries@gmail.com',
    totalScore: 1000
  }
];

// Mock Photos
export const photos: Photo[] = [
  {
    id: '1',
    userId: '1',
    username: 'LovélySummer',
    userAvatar: '/lovable-uploads/fd5632a6-141a-47e8-a408-aebcb0159a15.png',
    imageUrl: '/lovable-uploads/fd5632a6-141a-47e8-a408-aebcb0159a15.png',
    likes: 100,
    title: 'Beautiful Red Rose',
    createdAt: '2023-10-15T12:30:00.000Z'
  },
  {
    id: '2',
    userId: '2',
    username: 'BunnyBlush',
    userAvatar: '/lovable-uploads/2f13c3f2-a1ee-4178-ae5d-46bc01ff95b2.png',
    imageUrl: '/lovable-uploads/2f13c3f2-a1ee-4178-ae5d-46bc01ff95b2.png',
    likes: 100,
    title: 'My Adorable Cat',
    createdAt: '2023-10-16T14:45:00.000Z'
  },
  {
    id: '3',
    userId: '3',
    username: 'PeachyPaws',
    userAvatar: '/lovable-uploads/13a88c41-8e02-464d-8e0e-c773ba1a148c.png',
    imageUrl: '/lovable-uploads/13a88c41-8e02-464d-8e0e-c773ba1a148c.png',
    likes: 100,
    title: 'Sunset at the Beach',
    createdAt: '2023-10-17T16:20:00.000Z'
  },
  {
    id: '4',
    userId: '4',
    username: 'StrawberryJam',
    userAvatar: '/lovable-uploads/552ec731-e1d4-45bc-9e40-4fb64b4a484e.png',
    imageUrl: '/lovable-uploads/552ec731-e1d4-45bc-9e40-4fb64b4a484e.png',
    likes: 100,
    title: 'Strawberry Drink',
    createdAt: '2023-10-18T11:10:00.000Z'
  },
  {
    id: '5',
    userId: '5',
    username: 'SweetHoney',
    userAvatar: '/lovable-uploads/b3dd7e76-f342-4b1b-a6f5-f3a27583004e.png',
    imageUrl: '/lovable-uploads/b3dd7e76-f342-4b1b-a6f5-f3a27583004e.png',
    likes: 100,
    title: 'Reading Time',
    createdAt: '2023-10-19T09:30:00.000Z'
  },
  {
    id: '6',
    userId: '6',
    username: 'CocoMelon',
    imageUrl: '/lovable-uploads/fd5632a6-141a-47e8-a408-aebcb0159a15.png',
    likes: 100,
    title: 'Delicious Dinner',
    createdAt: '2023-10-20T18:15:00.000Z'
  },
];

// Mock Challenges
export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Take a photo of your favorite food',
    description: 'Share with us your most delicious meal!',
    difficulty: 'Easy',
    pointsReward: 100
  },
  {
    id: '2',
    title: 'Capture a beautiful sunset',
    description: 'Show us the most stunning sunset view you can find.',
    difficulty: 'Medium',
    pointsReward: 200
  },
  {
    id: '3',
    title: 'Identify this flower',
    description: 'What type of red flower is this?',
    difficulty: 'Hard',
    pointsReward: 300,
    options: ['Red Carnations', 'Red Roses', 'Red Tulips', 'Red Geranium'],
    correctAnswer: 'Red Roses'
  }
];

// Mock Leaderboard
export const leaderboard: LeaderboardEntry[] = users
  .map((user, index) => ({
    position: index + 1,
    userId: user.id,
    username: user.username,
    userAvatar: user.avatar,
    totalScore: user.totalScore
  }))
  .sort((a, b) => b.totalScore - a.totalScore);

// Current User - for profile page
export const currentUser = users.find(user => user.username === 'BlueberryPie');
