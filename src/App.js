/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import './index.css';

export default function App() {
  // Creating a state variable 'images' with an initial value of an empty array
  const [images, setImages] = useState([]);

  // Creating a function 'handleSubmit' that takes 'term' as a parameter
  const handleSubmit = async term => {
    // Calling the 'searchImages' function with 'term' and storing the result in 'result'
    const result = await searchImages(term);
    // Updating the 'images' state with the result
    setImages(result);
  };

  return (
    // Passing props to the child components
    <div className='app'>
      <SearchBar onSubmit={handleSubmit} />
      {/* // Passing the 'handleSubmit' function to the SearchBar component via the 'onSubmit' prop */}
      <ImageList images={images} />
      {/* Passing the 'images' state to the ImageList component via the 'images' prop */}
    </div>
  );
}
