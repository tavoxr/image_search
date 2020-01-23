import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="app container">
      <div className='jumbotron'>
        <p className='lead text-center'>Image Search</p>
        <Search/>
      </div>
    </div>
  );
}

export default App;
