
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { photos } from '../services/mockData';
import { Photo } from '../types';

const Gallery = () => {
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});
  
  const toggleLike = (photoId: string) => {
    setLikedPhotos(prev => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <PhotoCard 
            key={photo.id} 
            photo={photo} 
            isLiked={likedPhotos[photo.id] || false} 
            onToggleLike={toggleLike} 
          />
        ))}
      </div>
    </div>
  );
};

interface PhotoCardProps {
  photo: Photo;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
}

const PhotoCard = ({ photo, isLiked, onToggleLike }: PhotoCardProps) => {
  return (
    <div className="photo-card flex flex-col">
      <div className="h-60 overflow-hidden">
        <img 
          src={photo.imageUrl} 
          alt={photo.title || "Photo"} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              {photo.userAvatar ? (
                <img 
                  src={photo.userAvatar} 
                  alt={photo.username} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                  {photo.username.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <span className="text-sm font-medium">{photo.username}</span>
          </div>
          
          <button 
            onClick={() => onToggleLike(photo.id)}
            className="flex items-center space-x-1"
          >
            <Heart 
              size={18} 
              className={`${isLiked ? 'fill-accent text-accent' : 'text-gray-400'} transition-colors`} 
            />
            <span className="text-sm">{photo.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
