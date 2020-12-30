import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    id: 1,
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    id: 2,
    title: 'Why use React?',
    content: 'Widely used amongst many people'
  },
  {
    id: 3,
    title: 'How to use React?',
    content: 'Just try it out'
  }
]

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
