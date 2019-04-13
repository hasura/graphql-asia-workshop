import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class App extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Textbox />
        <Authors />
      </div>
    )
  }
}

const Textbox = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleOnClick = () => {
    alert('Clicked')
  }
  return (
    <div className="textboxWrapper"> 
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="textbox"
      />
      <button
        onClick={handleOnClick}
        type="submit"
        className="addButton"
      >
        Add
      </button>
    </div>
  )
}

const Authors = () => {
  const data = {
    authors: [
      {
        id: 1,
        name: 'Shahidh'
      },
      {
        id: 2,
        name: 'Rishi'
      },
      {
        id: 3,
        name: 'Suri'
      },
      {
        id: 4,
        name: 'Shark'
      },
      {
        id: 5,
        name: 'Tanmai'
      },
    ]
  };
  return (
    <div className="authorsWrapper"> 
      {
        data.authors.map(a => {
          return (
            <div className="authorElement">
              {a.name} 
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
