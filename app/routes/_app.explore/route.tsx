import { useState } from 'react';
import { Search, Heart, MessageCircle, Bookmark, MoreHorizontal } from 'lucide-react';

export default function ExploreGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for the explore grid
  const exploreItems = [
    { id: 1, type: 'image', overlay: false, caption: '', likes: 1243 },
    { id: 2, type: 'image', overlay: true, caption: 'Discover more surprises', likes: 4512 },
    { id: 3, type: 'image', overlay: false, caption: '', likes: 873 },
    { id: 4, type: 'video', overlay: true, caption: 'This makes everyday memories better', likes: 9821 },
    { id: 5, type: 'image', overlay: false, caption: '', likes: 2341 },
    { id: 6, type: 'image', overlay: true, caption: 'INTERESTING', likes: 3210 },
    { id: 7, type: 'image', overlay: false, caption: '', likes: 5432 },
    { id: 8, type: 'image', overlay: true, caption: 'Sometimes a delay in your plan is Kismat!', likes: 7891 },
    { id: 9, type: 'video', overlay: false, caption: '', likes: 6543 },
    { id: 10, type: 'image', overlay: false, caption: '', likes: 3214 },
    { id: 11, type: 'video', overlay: false, caption: '', likes: 9876 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },
    { id: 12, type: 'image', overlay: false, caption: '', likes: 4321 },

  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black border-b border-[#262626] px-4 py-2">
        <div className="relative max-w-screen-lg mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121212] rounded-lg pl-10 py-2 text-sm focus:outline-none"
            />
            <Search className="absolute left-3 top-2 text-gray-400" size={18} />
          </div>
        </div>
      </header>

      {/* Explore grid */}
      <main className="max-w-screen-lg mx-auto p-1 md:p-4">
        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {exploreItems.map((item) => (
            <div key={item.id} className="relative aspect-square overflow-hidden bg-gray-900 rounded-sm">
              {/* Placeholder image */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 5H19V19H5V5Z" fill="transparent" />
                      <path d="M10 15.5L16 12L10 8.5V15.5Z" fill="white" />
                    </svg>
                  </div>
                )}
                <img 
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2A9_HDDc_uwxbhbP6p6QAp8pIdk2y5JDaLQ&s`} 
                  alt="Explore content" 
                  className="w-full h-full object-cover"
                />
                {item.overlay && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-2 text-xs md:text-sm font-bold text-white">
                      {item.caption}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <Heart className="mr-1" size={18} fill="white" color="white" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="mr-1" size={18} fill="white" color="white" />
                    <span>{Math.floor(item.likes / 10)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

    
    </div>
  );
}