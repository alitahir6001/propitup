import React from 'react';
import './App.css';
import PersonCard from './components/myNewComponent';

function App() {
  return (
    <div className="App">
      <PersonCard fullName={<h1>Tahir, Ali</h1>} age={<h3>Age: 36</h3>} hairColor={<h4>Hair Color: Afro Black</h4>} />
      <PersonCard fullName={<h1>Norman, Nicole</h1>} age={<h3>Age: 34</h3>} hairColor={<h4>Hair Color: Brunette</h4>} />
      <PersonCard fullName={<h1>Crittendon, Andrew</h1>} age={<h3>Age: 38</h3>} hairColor={<h4>Hair Color: Brown</h4>} />
      <PersonCard fullName={<h1>Molleda, Diana</h1>} age={<h3>Age: 34</h3>} hairColor={<h4>Hair Color: Black</h4>} />



    </div>
  );
}

export default App;
