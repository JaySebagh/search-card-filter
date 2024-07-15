import React, { useState } from 'react';
import DATA from './data.json';

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type='text'
        placeholder='search...'
        value={ search }
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <ul>
          {DATA.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).map((data, index) => (
            <li key={index}>{data.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
