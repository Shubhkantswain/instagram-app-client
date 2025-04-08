import { useState } from 'react';
import { X, Search } from 'lucide-react';

export default function RecentSearches() {
  const [recentItems, setRecentItems] = useState([
    { 
      id: 1, 
      name: 'wwe', 
      verified: true, 
      description: 'WWE • 34.3M followers',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 2, 
      name: 'lourranekathelen', 
      description: 'Lou',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 3, 
      name: 'saman_teri_kasam__', 
      description: 'Kasam_sajan_ki',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 4, 
      name: 'ps.edithub', 
      description: 'Status Video',
      avatar: '/api/placeholder/40/40'
    }
  ]);

  const removeItem = (id) => {
    setRecentItems(recentItems.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setRecentItems([]);
  };

  return (
    <div className="bg-black text-white h-full min-h-screen font-sans flex flex-col">
      {/* Search bar section */}
      <header className="sticky top-0 z-10 bg-black border-b border-[#262626] px-4 py-2">
        <div className="relative max-w-screen-lg mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
            //   value={searchTerm}
            //   onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121212] border border-white rounded-lg pl-10 py-2 text-sm focus:outline-none"
            />
            <Search className="absolute left-3 top-2 text-gray-400" size={18} />
          </div>
        </div>
      </header>

      {/* Recent header and content - centered horizontally */}
      <div className="flex-1 p-4 max-w-md mx-auto w-full">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Recent</h2>
          <button 
            onClick={clearAll}
            className="text-blue-500 text-base font-medium hover:text-blue-400 focus:outline-none"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-4">
          {recentItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative rounded-full overflow-hidden">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-10 h-10 rounded-full bg-gray-700" 
                  />
                  {item.verified && (
                    <span className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-3 h-3 border border-black"></span>
                  )}
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{item.name}</span>
                    {item.verified && <span className="text-blue-500 ml-1">•</span>}
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Clear All button at bottom - removed from here */}
    </div>
  );
}