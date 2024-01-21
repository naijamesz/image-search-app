/* eslint-disable no-undef */

import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form className='form-input' onSubmit={handleFormSubmit}>
        <label>Search any images</label>
        <input type={term} onChange={handleChange} />
      </form>
    </div>
  );
}
