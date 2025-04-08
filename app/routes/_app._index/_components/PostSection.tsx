import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

export default function PostSection() {
    const posts = [
        {
            id: 1,
            username: 'digitalhunters.in',
            timeAgo: '1 d',
            imageUrl: 'https://i.pinimg.com/236x/47/bb/90/47bb908395e8ff7121dbb68bd534581f.jpg',
            likes: 1,
            caption: "Design isn't just art — it's strategy..."
        },
        {
            id: 2,
            username: 'uiuxtrends',
            timeAgo: '3 h',
            imageUrl: 'https://i.pinimg.com/736x/10/22/20/102220a72b4abd829ef0a882fa6c154a.jpg',
            likes: 42,
            caption: "Mobile-first design approach for better user experience"
        },
        {
            id: 3,
            username: 'webdesignlab',
            timeAgo: '2 d',
            imageUrl: 'https://fancyano.com/wp-content/uploads/2022/08/IMG-20220818-WA0025.jpg',
            likes: 138,
            caption: "Purple interfaces are trending in 2025! What do you think?"
        }
    ];

    return (
        <div className="max-w-2xl mx-auto space-y-6 -mt-5 md:mt-0">
            {posts.map(post => {
                const [liked, setLiked] = useState(false);
                const [saved, setSaved] = useState(false);
                const [likeCount, setLikeCount] = useState(post.likes);
                const [showFullCaption, setShowFullCaption] = useState(false);

                const handleLike = () => {
                    if (liked) {
                        setLikeCount(likeCount - 1);
                    } else {
                        setLikeCount(likeCount + 1);
                    }
                    setLiked(!liked);
                };

                const toggleCaption = () => {
                    setShowFullCaption(!showFullCaption);
                };

                return (
                    <div key={post.id} className="bg-black text-white w-full flex justify-center">
                        <div className="w-full max-w-[500px]">
                            {/* Post Header */}
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-600 rounded-full overflow-hidden">
                                        <img
                                            src="/api/placeholder/32/32"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium text-sm">{post.username}</span>
                                        <span className="text-gray-400 text-xs mx-1">•</span>
                                        <span className="text-gray-400 text-xs">{post.timeAgo}</span>
                                    </div>
                                </div>
                                <button className="text-gray-200">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            {/* Post Image */}
                            <div className="w-full aspect-square bg-black border border-[#262626] flex items-center justify-center overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    alt={`Post by ${post.username}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Post Actions */}
                            <div className="flex justify-between py-3">
                                <div className="flex space-x-4">
                                    <button onClick={handleLike} className="focus:outline-none">
                                        <Heart size={24} fill={liked ? "#ff3040" : "none"} color={liked ? "#ff3040" : "white"} />
                                    </button>
                                    <button className="focus:outline-none">
                                        <MessageCircle size={24} />
                                    </button>
                                    <button className="focus:outline-none">
                                        <Send size={24} />
                                    </button>
                                </div>
                                <button onClick={() => setSaved(!saved)} className="focus:outline-none">
                                    <Bookmark size={24} fill={saved ? "white" : "none"} />
                                </button>
                            </div>

                            {/* Likes */}
                            <div className="pb-1">
                                <p className="font-medium text-sm">{likeCount} {likeCount === 1 ? 'like' : 'likes'}</p>
                            </div>

                            {/* Caption */}
                            <div className="pb-2">
                                <div className="flex flex-wrap">
                                    <span className="font-medium text-sm mr-1">{post.username}</span>
                                    <span className="text-sm">
                                        {showFullCaption ? post.caption : `${post.caption.substring(0, 30)}${post.caption.length > 30 ? '...' : ''}`}
                                    </span>
                                    {post.caption.length > 30 && (
                                        <button
                                            onClick={toggleCaption}
                                            className="text-gray-400 text-sm ml-1"
                                        >
                                            {showFullCaption ? 'less' : 'more'}
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Comment Input */}
                            <div className="border-b border-[#262626] py-4 flex items-center">
                                <span className="text-gray-400 text-sm">Add a comment...</span>
                                <div className="ml-auto text-gray-500">
                                    <span>○</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
