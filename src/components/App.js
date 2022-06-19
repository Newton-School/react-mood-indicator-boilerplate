import React from 'react'
import '../styles/App.css';
const App = () => {
  return (
    <div id="main">
      <select onChange={handleChange}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" style={{backgroundColor:'rgb(238, 241, 0)'}}></div>
    </div>
  )
}


export default App;
