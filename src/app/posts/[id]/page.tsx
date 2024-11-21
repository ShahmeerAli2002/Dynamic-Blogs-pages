"use client"
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

interface Post {
  title: string;
  image: string;
  description: string;
  date: string;
  category: string;
  rating: number;
}
  const posts: { [key: string]: Post } = {
    '1': {
      title: 'Prison Shores Rio as U.S. Eyes More Migrant Family Detention Space',
      image: '/image/post1.jpeg',
      description: 'An in-depth analysis of current U.S. policies addressing migration issues and their impact on detention centers. Explore how these policies shape the lives of affected families and the broader implications for social justice.',
      date: 'Dec 01, 2023',
      category: 'Resorts',
      rating: 0,
    },
    '2': {
      title: 'Luxury Beach Resort Opens in Maldives',
      image: '/image/post2.jpg',
      description: 'Immerse yourself in the epitome of luxury at the newest beach resort in the Maldives. Featuring pristine white sand beaches, crystal-clear waters, and world-class amenities, this destination is the ultimate paradise.',
      date: 'Dec 05, 2023',
      category: 'Resorts',
      rating: 0,
    },
    '3': {
      title: 'Mountain Retreat: A Hidden Gem in the Alps',
      image: '/image/post3.jpeg',
      description: 'Discover a serene and secluded mountain retreat nestled in the heart of the Alps. Perfect for winter getaways, this resort offers breathtaking views, cozy accommodations, and thrilling outdoor activities.',
      date: 'Dec 08, 2023',
      category: 'Mountains',
      rating: 0,
    },
    '4': {
      title: 'Desert Oasis: New Resort in Dubai',
      image: '/image/post4.jpeg',
      description: 'Step into luxury like never before at the newly unveiled desert oasis in Dubai. Enjoy state-of-the-art facilities, exquisite cuisine, and an unparalleled experience in the heart of the desert....',
      date: 'Dec 12, 2023',
      category: 'Desert',
      rating: 0,
    },
    '5': {
      title: 'Tropical Paradise Resort in Bali',
      image: '/image/post5.jpeg',
      description: 'Uncover the magic of Bali with its newest tropical resort. Experience a blend of Indonesian culture and nature, complete with lush landscapes, traditional architecture, and rejuvenating spa treatments...',
      date: 'Dec 15, 2023',
      category: 'Tropical',
      rating: 0,
    },
    '6': {
      title: 'Historic Castle Hotel Opens in Scotland',
      image: '/image/post6.jpeg',
      description: 'Stay in a real castle that combines historic charm with modern amenities. Explore the fascinating history of Scotland while enjoying luxury suites, gourmet dining, and scenic surroundings...',
      date: 'Dec 18, 2023',
      category: 'Historic',
      rating: 0,
    },
    '7': {
      title: 'Eco-Resort Launch in Costa Rica',
      image: '/image/post7.jpg',
      description: 'Sustainable luxury awaits at Costa Rica\'s newest eco-resort. Surrounded by lush rainforests, this resort prioritizes environmental preservation while offering top-tier accommodations and activities...',
      date: 'Dec 21, 2023',
      category: 'Eco',
      rating: 0,
    },
    '8': {
      title: 'Island Resort Opens in Caribbean',
      image: '/image/post8.jpg',
      description: 'Plan your dream beach vacation at the Caribbean\'s latest island resort. Featuring stunning ocean views, luxurious villas, and endless opportunities for relaxation and adventure...',
      date: 'Dec 24, 2023',
      category: 'Islands',
      rating: 0,
    },
    '9': {
      title: 'Ski Resort Expansion in Swiss Alps',
      image: '/image/post9.jpeg',
      description: 'Winter sports enthusiasts rejoice! The Swiss Alps\' premier ski resort unveils new slopes and upgraded facilities, promising an unforgettable adventure for all skill levels...',
      date: 'Dec 27, 2023',
      category: 'Winter',
      rating: 0,
    }
  };

const PostDetail: React.FC = () => {
  const params = useParams();
  const postId = params.id;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [showRatingModal, setShowRatingModal] = useState(true);

  const post = posts[postId as string];

  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  const handleRating = (value: number) => {
    setRating(value);
    setShowRatingModal(false);
  };

  return (

    <div className="w-full max-w-4xl mx-auto my-2 px-2 sm:my-8 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-cover"
        />




        <div className="p-3 sm:p-6 lg:p-8">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{post.date}</p>
          <p className="text-xs sm:text-base leading-relaxed text-gray-600">{post.description}</p>
          

          <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 relative">
            {rating > 0 ? (


              <div className="flex flex-wrap items-center w-full sm:w-auto">
                <span className="text-sm sm:text-base text-gray-700">Your rating:</span>
                <div className="ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}

                      className={`text-xl sm:text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span className="ml-2 text-xs sm:text-base text-gray-600">({rating} stars)</span>
              </div>
            ) : null}
          </div>
          
          {showRatingModal && (




            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Rate this post</h3>
                <div className="flex justify-center gap-2 mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(star)}

                      className={`text-2xl sm:text-3xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <p className="text-center text-xs sm:text-base text-gray-600">Click on the stars to rate</p>
              </div>
            </div>
          )}
          




          <div className="mt-6 sm:mt-8">
            <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Comments</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}

                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write a comment..."
                />
                <button
                  onClick={handleCommentSubmit}

                  className="w-full px-4 py-2 text-sm sm:text-base bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Post Comment
                </button>
              </div>
              

              <div className="space-y-2 sm:space-y-3">
                {comments.map((comment, index) => (
                  <div 
                    key={index} 

                    className="bg-gray-50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                  >

                    <p className="text-xs sm:text-base text-gray-700 break-words flex-1">{comment}</p>
                    <button
                      onClick={() => handleDeleteComment(index)}

                      className="text-xs sm:text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;