/* eslint-disable no-undef */

import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  // Initialize state 'term' with an empty string
  const [term, setTerm] = useState('');

  // This function is triggered when the form is submitted (Enter key is pressed)
  // It prevents the default form submission behavior (page reload) and calls the 'onSubmit' function passed as a prop from the parent component (App.js) with the current state 'term'
  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(term);
  };

  // This function is triggered when the input field value changes
  // It updates the state 'term' with the new input field value
  const handleChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form className='form-input' onSubmit={handleFormSubmit}>
        <label>Search any images</label>
        {/* The input field value is bound to the state 'term' and it's updated every time the input field value changes */}
        <input type='text' value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
