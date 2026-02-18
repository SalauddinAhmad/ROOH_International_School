import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
      title: "Happy Students in Classroom",
      category: "Academics"
    },
    {
      src: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg", 
      title: "Science Laboratory",
      category: "Facilities"
    },
    {
      src: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
      title: "Art & Craft Activities",
      category: "Arts"
    },
    {
      src: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
      title: "Sports Day Event",
      category: "Sports"
    },
    {
      src: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
      title: "Library Reading Time",
      category: "Academics"
    },
    {
      src: "https://images.pexels.com/photos/8613064/pexels-photo-8613064.jpeg",
      title: "Cultural Programs",
      category: "Events"
    },
    {
      src: "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg",
      title: "Computer Class",
      category: "Technology"
    },
    {
      src: "https://images.pexels.com/photos/8613061/pexels-photo-8613061.jpeg",
      title: "Playground Activities",
      category: "Recreation"
    }
  ];

  const categories = ["All", "Academics", "Facilities", "Arts", "Sports", "Events", "Technology", "Recreation"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 bg-[#FFE8D2]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00393C] mb-4">
            School Gallery
          </h2>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Take a glimpse into our vibrant school life, modern facilities, and the joyful learning experiences of our students through our photo gallery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#F68949] text-white'
                  : 'bg-white text-[#303E3F] hover:bg-[#00393C] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">{filteredImages[selectedImage].title}</h3>
                <p className="opacity-90">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;