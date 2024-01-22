/* eslint-disable no-undef */

import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  /* handleFormSubmit (after press Enter key to start event) communicate from Child up to Parent(App.js) component with onSubmit props   */
  const handleFormSubmit = event => {
    /*event.preventDefault(); for disable reload page after user types in input  */
    event.preventDefault();
    onSubmit(term);
  };
  /* Handling text inputs */
  const handleChange = event => {
    setTerm(event.target.value);
  };

  /* User types in input > Browser updates the text in the input > Browser triggers an event to the input was updated > React detects  value from the input and update state > State update and Component rerenders > provide 'value' prop and using term to input > loop back to User types in input */

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
