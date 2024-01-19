/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import './index.css';
// import searchImage from './api';

export default function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async term => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className='app'>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
