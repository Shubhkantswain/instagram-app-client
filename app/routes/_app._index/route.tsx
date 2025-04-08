import React, { useState, useRef, useEffect } from 'react';

interface Story {
  id: number;
  username: string;
  avatar: string;
  viewed: boolean;
}

function Route() {
  const storiesRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const stories: Story[] = [
    { id: 1, username: 'user1', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpO1NAGAXV3yTOQz34cndUl0lg_ZnNTcM9w&s', viewed: false },
    { id: 2, username: 'user2', avatar: 'https://photosnow.org/wp-content/uploads/2023/12/instagram-dp-girls-boys27.jpg', viewed: false },
    { id: 3, username: 'user3', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: true },
    { id: 4, username: 'user4', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: false },
    { id: 5, username: 'user5', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: true },
    { id: 6, username: 'user6', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: false },
    { id: 7, username: 'user7', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: false },
    { id: 8, username: 'user8', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: true },
    { id: 9, username: 'user9', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: false },
    { id: 10, username: 'user10', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: true },
    { id: 11, username: 'user11', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: false },
    { id: 12, username: 'user12', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: true },
    { id: 13, username: 'user13', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: false },
    { id: 14, username: 'user14', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: true },
    { id: 15, username: 'user15', avatar: 'https://instaprofilebio.com/wp-content/uploads/2024/08/instagram-dp-for-boys-aesthetic_91.webp', viewed: false },
  ];

  const scrollLeft = () => {
    if (storiesRef.current) {
      storiesRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (storiesRef.current) {
      storiesRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (storiesRef.current) {
      setCanScrollLeft(storiesRef.current.scrollLeft > 0);
      const isAtEnd =
        storiesRef.current.scrollLeft + storiesRef.current.clientWidth >=
        storiesRef.current.scrollWidth - 1;
      setCanScrollRight(!isAtEnd);
    }
  };

  useEffect(() => {
    const storiesContainer = storiesRef.current;
    if (storiesContainer) {
      storiesContainer.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => {
        storiesContainer.removeEventListener('scroll', checkScroll);
      };
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto pt-4 px-4">
      <div className="mb-6 relative">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        <div
          ref={storiesRef}
          className="flex space-x-4 pb-2 pt-2 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className={`${story.viewed ? 'border-2 border-gray-300' : 'border-2 border-pink-500'} p-0.5 rounded-full`}>
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={story.avatar} 
                    alt={`${story.username}'s story`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs mt-1 text-center">{story.username}</span>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      <div className="py-4">
        {/* Main content area */}
      </div>
    </div>
  );
}

export default Route;