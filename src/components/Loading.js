import React from 'react';
import '../styles/Loading.css'; // Optional, for custom styles
import loadingGif from '../assets/Loading.gif'; // Replace with your actual GIF path

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;
