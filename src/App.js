import React, { useState } from 'react';
import './styles/app.css';
import DATA from './components/data.json';
import Card from './components/Card';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className='project-container'>
      <input
        type='text'
        placeholder='search...'
        value={ search }
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='card-container'>
          {DATA.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).map((data, index) => (
            // console.log(data)
            <Card key={index} data={data}/>
          ))}
      </div>
    </div>
  );
}

export default App;
