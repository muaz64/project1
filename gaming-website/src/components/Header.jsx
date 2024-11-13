
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-deepBlue text-white sticky top-0">
      <h2 className="text-2xl font-bold">GameOn</h2>
      <nav className="flex gap-5">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#other-games" className="hover:text-gray-400">Games</a>
        <a href="#reviews" className="hover:text-gray-400">Reviews</a>
        <a href="#faq" className="hover:text-gray-400">FAQ</a>
        <a href="#chat" className="hover:text-gray-400">Chat</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Download</button>
      </nav>
    </header>
  );
};

export default Header;
