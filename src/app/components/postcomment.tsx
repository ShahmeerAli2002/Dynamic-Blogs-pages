"use client";
import React, { useState } from 'react';

interface Post {
  id: number;
  text: string;
  image: string | null;
}

const CreatePost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleCreatePost = () => {
    const newPost = {
      id: Date.now(),
      text,
      image: image ? URL.createObjectURL(image) : null,
    };
    setPosts([newPost, ...posts]);
    setText('');
    setImage(null);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className='sticky top-16 md:top-24 left-0 right-0 z-50'>
      <div className="bg-[#b8b7b65e] backdrop-blur-sm shadow-lg">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 md:h-16 space-y-3 md:space-y-0">
            <h1 className='text-xl md:text-2xl text-blue-900 font-bold font-serif hover:text-stone-700 transition-colors duration-300'>Post and comment</h1>
            
            <div className="w-full md:flex-1 max-w-2xl mx-2 md:mx-4">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition duration-200 h-10 text-gray-700"
                  placeholder="What's on your mind?"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>

                <div className="flex space-x-2">
                  <label className="cursor-pointer">
                    <div className="flex items-center justify-center px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>

                  <button
                    className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:bg-sky-800 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleCreatePost}
                    disabled={!text && !image}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20 max-w-2xl mx-auto px-2 sm:px-4 py-4 md:py-8">
        <div className="space-y-4 md:space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#868db379] border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition duration-200">
              <div className="relative">
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 flex items-center justify-center shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">{post.text}</p>
                {post.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img src={post.image} alt="Post" className="w-full h-auto object-cover" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
