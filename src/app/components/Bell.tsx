"use client"
import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';

const fakeNotifications = [
  { id: 1, user: 'John Doe', message: 'You have a new message!' },
  { id: 2, user: 'Jane Smith', message: 'Your post was liked!' },
  { id: 3, user: 'Mike Brown', message: 'You were mentioned in a comment!' },
];

const Bell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative text-white cursor-pointer">
      <div
        onClick={toggleNotifications}
        className="hover:text-green-200 transition-colors duration-300 relative"
      >
        <BsBell size={40} />
        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1">
          {fakeNotifications.length}
        </span>
      </div>

      {/* Notifications Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-800 text-white rounded-lg shadow-lg">
          <ul className="divide-y divide-gray-700">
            {fakeNotifications.map((notification) => (
              <li
                key={notification.id}
                className="p-3 hover:bg-gray-700 transition-colors duration-300"
              >
                <p className="font-bold">{notification.user}</p>
                <p className="text-sm">{notification.message}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Bell;
