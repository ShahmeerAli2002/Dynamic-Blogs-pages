"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  category: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Prison Shores Rio as U.S. Eyes More Migrant Family Detention Space',
    image: '/image/post1.jpeg',
    description: 'An overview of current policies affecting migration...',
    date: 'Dec 01, 2023',
    category: 'Resorts',
  },
  {
    id: '2',
    title: 'Luxury Beach Resort Opens in Maldives',
    image: '/image/post2.jpg',
    description: 'Experience ultimate luxury in the heart of paradise...',
    date: 'Dec 05, 2023',
    category: 'Resorts',
  },
  {
    id: '3',
    title: 'Mountain Retreat: A Hidden Gem in the Alps',
    image: '/image/post3.jpeg',
    description: 'Discover this stunning mountain resort perfect for winter getaways...',
    date: 'Dec 08, 2023',
    category: 'Mountains',
  },
  {
    id: '4',
    title: 'Desert Oasis: New Resort in Dubai',
    image: '/image/post4.jpeg',
    description: 'Experience luxury in the middle of the desert...',
    date: 'Dec 12, 2023',
    category: 'Desert',
  },
  {
    id: '5',
    title: 'Tropical Paradise Resort in Bali',
    image: '/image/post5.jpeg',
    description: 'Explore the beauty of Indonesian culture and nature...',
    date: 'Dec 15, 2023',
    category: 'Tropical',
  },
  {
    id: '6',
    title: 'Historic Castle Hotel Opens in Scotland',
    image: '/image/post6.jpeg',
    description: 'Stay in a real castle with modern amenities...',
    date: 'Dec 18, 2023',
    category: 'Historic',
  },
  {
    id: '7',
    title: 'Eco-Resort Launch in Costa Rica',
    image: '/image/post7.jpg',
    description: 'Sustainable luxury in the heart of the rainforest...',
    date: 'Dec 21, 2023',
    category: 'Eco',
  },
  {
    id: '8',
    title: 'Island Resort Opens in Caribbean',
    image: '/image/post8.jpg',
    description: 'Perfect destination for your next beach vacation...',
    date: 'Dec 24, 2023',
    category: 'Islands',
  },
  {
    id: '9',
    title: 'Ski Resort Expansion in Swiss Alps',
    image: '/image/post9.jpeg',
    description: 'New facilities and slopes for winter sports enthusiasts...',
    date: 'Dec 27, 2023',
    category: 'Winter',
  }
];
  const Posts: React.FC = () => {
    const postRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-raindrop');
            }
          });
        },
        { threshold: 0.1 }
      );

      postRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        postRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, []);

    const categories = ['all', ...new Set(posts.map(post => post.category))];
    const filteredPosts = selectedCategory === 'all' 
      ? posts 
      : posts.filter(post => post.category === selectedCategory);

    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap justify-center overflow-x-auto py-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-800 text-white'
                  : 'bg-white text-blue-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="space-y-4 sm:space-y-8">
          {filteredPosts.map((post, index) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <div
                ref={(el) => {
                  postRefs.current[index] = el;
                }}
                className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-out cursor-pointer hover:shadow-xl"
                style={{
                  animationDelay: `${index * 1.0}s`,
                  animationDuration: '20s',
                  animationIterationCount: 'infinite',
                }}
              >
                <div className="relative w-full md:w-1/3 h-48 sm:h-56 md:h-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 md:w-2/3">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                    <p className="text-gray-500 text-xs sm:text-sm">{post.date}</p>
                    <span className="px-2 sm:px-3 py-1 bg-stone-100 text-blue-800 rounded-full text-xs sm:text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-3">{post.description}</p>
                  <div className="flex items-center mt-3 sm:mt-4">
                    <span className="text-blue-600 hover:text-blue-500 font-semibold text-sm sm:text-base">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Posts;
