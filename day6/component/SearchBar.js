
'use client'
import { useState } from 'react';

const suggestions = [
  'Chicken Biriyani',
  'Chicken',
  'Chicken Shop Near Me',
  'Chocolate Cake',
  'Chili Chicken',
  'Chicken Soup'
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setFilteredSuggestions([]);
  };

  return (
    <div className="relative w-[900px] bg-slate-900  ">
        <div className='flex flex-row bg-slate-900 w-[700px] h-[70px]'>
      <input 
        type="text" 
        value={query} 
        onChange={handleChange} 
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded  "
      />
      {query && <button onClick={clearSearch} className="m-5 bg-transparent border-none cursor-pointer"> x </button>}
      </div>
      <div>
      <ul className="absolute w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-y-auto">
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} className="p-2 border-b border-gray-200">{suggestion}</li>
        ))}
      </ul>
      </div>
     
    </div>
  );
};

export default SearchBar;
