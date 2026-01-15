import { useState } from 'react';

export default function VideoPopup({ videoUrl, thumbnailUrl, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract YouTube video ID
  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  return (
    <>
      {/* Trigger */}
      <div 
        className={`relative cursor-pointer group overflow-hidden ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative">
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="player w-20 h-20 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="w-0 h-0 border-l-[20px] border-l-heading border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1.5"></span>
            </div>
          </div>
          
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black transition-opacity duration-300 opacity-0 group-hover:opacity-20"></div>
          
          {/* Thumbnail */}
          <img 
            src={thumbnailUrl} 
            alt="Video thumbnail" 
            className="w-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 text-white text-3xl hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          
          {/* Video iframe */}
          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
