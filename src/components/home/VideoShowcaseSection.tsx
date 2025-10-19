import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoShowcaseSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "ROOH International School Campus Tour",
      thumbnail: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
      videoId: "dQw4w9WgXcQ", // Sample YouTube video ID
      duration: "3:45"
    },
    {
      id: 2,
      title: "Annual Sports Day Highlights",
      thumbnail: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "5:20"
    },
    {
      id: 3,
      title: "Science Laboratory in Action",
      thumbnail: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "2:15"
    },
    {
      id: 4,
      title: "Student Art Exhibition 2024",
      thumbnail: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "4:10"
    },
    {
      id: 5,
      title: "Morning Assembly & Activities",
      thumbnail: "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "6:30"
    },
    {
      id: 6,
      title: "Digital Learning Platform Demo",
      thumbnail: "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "3:55"
    },
    {
      id: 7,
      title: "Parent-Teacher Meeting Insights",
      thumbnail: "https://images.pexels.com/photos/8612986/pexels-photo-8612986.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "4:25"
    },
    {
      id: 8,
      title: "Community Service Project",
      thumbnail: "https://images.pexels.com/photos/8613064/pexels-photo-8613064.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "5:45"
    }
  ];

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00393C] mb-4">
            Video Showcase
          </h2>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Experience ROOH International School through our video collection showcasing 
            campus life, events, and educational excellence.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Desktop: Show all 8 videos, Mobile: Show first 4 */}
          {videos.slice(0, window.innerWidth >= 768 ? 8 : 4).map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => openVideo(video.videoId)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#F68949] hover:bg-[#946F5C] text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
                  <Play className="h-8 w-8" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                {video.duration}
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-sm leading-tight">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video Player"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#00393C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#F68949] transition-colors duration-300">
            View More Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;