/* eslint-disable no-undef */

import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  /* handleFormSubmit (after press Enter key to start event) communicate from Child up to Parent(App.js) component and user submit to call onSubmit with the current 'term'   */
  const handleFormSubmit = event => {
    /*event.preventDefault(); for disable reload page after user types in input  */
    event.preventDefault();
    onSubmit(term);
  };
  /* Handling text inputs */
  const handleChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form className='form-input' onSubmit={handleFormSubmit}>
        <label>Search any images</label>
        {/* <input value={term} onChange={handleChange} /> */}
        <input type={term} value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
