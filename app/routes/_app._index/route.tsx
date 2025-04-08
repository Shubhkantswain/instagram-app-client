import React, { useState, useRef, useEffect } from 'react';
import StorieSection from './_components/StorieSection';
import PostSection from './_components/PostSection';

function Route() {
  const storiesRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right' | null>(null);

  const scrollLeft = () => {
    if (storiesRef.current) {
      setScrollDirection('left');
      storiesRef.current.scrollBy({ left: -250, behavior: 'smooth' });
      setTimeout(() => setScrollDirection(null), 300); // remove animation class after animation duration
    }
  };
  
  const scrollRight = () => {
    if (storiesRef.current) {
      setScrollDirection('right');
      storiesRef.current.scrollBy({ left: 250, behavior: 'smooth' });
      setTimeout(() => setScrollDirection(null), 300);
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
      <StorieSection canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} scrollLeft={scrollLeft} scrollRight={scrollRight} storiesRef={storiesRef}/>

        {/* Main content area */}
        <PostSection/>
    </div>
  );
}

export default Route;