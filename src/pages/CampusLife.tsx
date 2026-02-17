import React from 'react';
import { Music, Palette, Trophy, Globe, Heart, Camera, X } from 'lucide-react';
import { useState } from 'react';

const CampusLife = () => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const activities = [
    {
      id: 'music',
      icon: <Music className="h-8 w-8" />,
      title: "Music & Performing Arts",
      description: "Choir, band, dance, and drama programs to nurture artistic talents and build confidence.",
      image: "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg",
      gallery: [
        "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg",
        "https://images.pexels.com/photos/8613064/pexels-photo-8613064.jpeg",
        "https://images.pexels.com/photos/8613061/pexels-photo-8613061.jpeg",
        "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg"
      ]
    },
    {
      id: 'arts',
      icon: <Palette className="h-8 w-8" />,
      title: "Arts & Crafts",
      description: "Creative workshops including painting, sculpture, and traditional crafts to develop artistic skills.",
      image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
      gallery: [
        "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
        "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg",
        "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
        "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg"
      ]
    },
    {
      id: 'sports',
      icon: <Trophy className="h-8 w-8" />,
      title: "Sports & Athletics",
      description: "Football, cricket, basketball, swimming, and athletics programs for physical development.",
      image: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
      gallery: [
        "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
        "https://images.pexels.com/photos/8613061/pexels-photo-8613061.jpeg",
        "https://images.pexels.com/photos/8613064/pexels-photo-8613064.jpeg",
        "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg"
      ]
    },
    {
      id: 'science',
      icon: <Globe className="h-8 w-8" />,
      title: "Science & Technology",
      description: "Science fairs, robotics clubs, and computer programming to inspire future innovators.",
      image: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg",
      gallery: [
        "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg",
        "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
        "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg",
        "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg"
      ]
    },
    {
      id: 'community',
      icon: <Heart className="h-8 w-8" />,
      title: "Community Service",
      description: "Volunteer programs and social initiatives to develop empathy and social responsibility.",
      image: "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
      gallery: [
        "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
        "https://images.pexels.com/photos/8613064/pexels-photo-8613064.jpeg",
        "https://images.pexels.com/photos/8613061/pexels-photo-8613061.jpeg",
        "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg"
      ]
    },
    {
      id: 'media',
      icon: <Camera className="h-8 w-8" />,
      title: "Photography & Media",
      description: "School magazine, photography club, and media production to enhance communication skills.",
      image: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
      gallery: [
        "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
        "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg",
        "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
        "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg"
      ]
    }
  ];

  const events = [
    {
      title: "Annual Science Fair",
      date: "March 2024",
      description: "Students showcase innovative science projects and experiments",
      image: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg"
    },
    {
      title: "Cultural Festival",
      date: "April 2024", 
      description: "Celebrating diversity through music, dance, and traditional performances",
      image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg"
    },
    {
      title: "Sports Day Championship",
      date: "May 2024",
      description: "Annual athletic competition showcasing student fitness and teamwork",
      image: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg"
    },
    {
      title: "Art Exhibition",
      date: "June 2024",
      description: "Student artwork display featuring paintings, crafts, and sculptures", 
      image: "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
    "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg",
    "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
    "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
    "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
    "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg"
  ];

  const openActivityGallery = (activityId: string) => {
    setSelectedActivity(activityId);
  };

  const closeActivityGallery = () => {
    setSelectedActivity(null);
  };

  const selectedActivityData = activities.find(activity => activity.id === selectedActivity);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFE8D2] to-[#F68949] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00393C] mb-6">
            Vibrant Campus Life
          </h1>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Beyond academics, we provide a rich environment of extracurricular activities, 
            events, and opportunities for holistic development and lifelong friendships.
          </p>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00393C] mb-4">
              Extracurricular Activities
            </h2>
            <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
              Discover talents, build confidence, and develop new skills through 
              our comprehensive range of after-school programs and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="group bg-[#FFE8D2] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img
                className="group bg-[#FFE8D2] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openActivityGallery(activity.id)}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-[#F68949]">{activity.icon}</div>
                    <h3 className="text-xl font-bold text-[#00393C]">{activity.title}</h3>
                  </div>
                  <p className="text-[#303E3F] leading-relaxed">{activity.description}</p>
                  <div className="text-[#F68949] font-medium text-sm">
                    Click to view gallery →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Gallery Modal */}
      {selectedActivity && selectedActivityData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full overflow-auto bg-white rounded-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#00393C]">
                  {selectedActivityData.title} Gallery
                </h3>
                <button
                  onClick={closeActivityGallery}
                  className="bg-[#F68949] hover:bg-[#946F5C] text-white p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedActivityData.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedActivityData.title} ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events and Celebrations */}
      <section className="py-20 bg-[#00393C] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Events & Celebrations</h2>
            <p className="text-xl text-[#FFE8D2] max-w-3xl mx-auto">
              Throughout the year, we host exciting events that bring our school 
              community together and create lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-colors duration-300">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className="bg-[#F68949] px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-[#FFE8D2]">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Extension */}
      <section className="py-20 bg-[#FFE8D2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00393C] mb-4">
              Campus Life Gallery
            </h2>
            <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
              Capturing moments of joy, learning, and growth in our vibrant school community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image}
                  alt={`Campus Life ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00393C] mb-4">
              A Day in Campus Life
            </h2>
            <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
              From morning assembly to afternoon activities, every day is filled 
              with learning, fun, and meaningful experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-[#FFE8D2] rounded-2xl">
                <div className="bg-[#F68949] text-white p-2 rounded-full font-bold min-w-[60px] text-center">
                  8:00 AM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Morning Assembly</h3>
                  <p className="text-[#303E3F]">Daily gathering with prayers, announcements, and motivational talks</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white border-2 border-[#FFE8D2] rounded-2xl">
                <div className="bg-[#00393C] text-white p-2 rounded-full font-bold min-w-[60px] text-center text-sm">
                  8:30 AM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Core Classes</h3>
                  <p className="text-[#303E3F]">English, Mathematics, Science, and other subject lessons</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[#FFE8D2] rounded-2xl">
                <div className="bg-[#946F5C] text-white p-2 rounded-full font-bold min-w-[60px] text-center text-sm">
                  10:30 AM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Break Time</h3>
                  <p className="text-[#303E3F]">Healthy snacks and playground activities with friends</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white border-2 border-[#FFE8D2] rounded-2xl">
                <div className="bg-[#F68949] text-white p-2 rounded-full font-bold min-w-[60px] text-center text-sm">
                  12:00 PM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Lunch Break</h3>
                  <p className="text-[#303E3F]">Nutritious meals and social interaction time</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white border-2 border-[#FFE8D2] rounded-2xl">
                <div className="bg-[#00393C] text-white p-2 rounded-full font-bold min-w-[60px] text-center text-sm">
                  1:00 PM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Specialist Classes</h3>
                  <p className="text-[#303E3F]">Art, Music, Physical Education, and Computer classes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[#FFE8D2] rounded-2xl">
                <div className="bg-[#946F5C] text-white p-2 rounded-full font-bold min-w-[60px] text-center text-sm">
                  2:30 PM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Study Time</h3>
                  <p className="text-[#303E3F]">Homework assistance and independent reading</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white border-2 border-[#FFE8D2] rounded-2xl">
                <div className="bg-[#F68949] text-white p-2 rounded-full font-bold min-w-[60px] text-center text-sm">
                  3:30 PM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Extracurricular</h3>
                  <p className="text-[#303E3F]">Clubs, sports, arts, and special interest activities</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[#FFE8D2] rounded-2xl">
                <div className="bg-[#00393C] text-white p-2 rounded-full font-bold min-w-[60px] text-center text-sm">
                  5:00 PM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#00393C] mb-2">Dismissal</h3>
                  <p className="text-[#303E3F]">Safe departure with parents or school transport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;