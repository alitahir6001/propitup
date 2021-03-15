import React from 'react';
import './App.css';
import PersonCard from './components/myNewComponent';
import LightSwitch from './components/lightSwitch';

function App() {
  return (
    <div className="App">

      <button onClick={ () => alert("See you in the Slob my Dudes!") }>Click Me</button>
      
      <functionClick />
      <PersonCard fullName={<h1>Tahir, Ali</h1>} age={<h3>Age: 36</h3>} hairColor={<h4>Hair Color: Afro Black</h4>}>
        {/* <p>This is a children of a name card</p> */}
      </PersonCard>
      
      <PersonCard fullName={<h1>Nearhan, The Animal</h1>} age={<h3>Age: 34</h3>} hairColor={<h4>Hair Color: Brunette</h4>}>
        {/* <p>This is another children</p> */}
      </PersonCard>
      
      <PersonCard fullName={<h1>Torie, Es Muy Bueno</h1>} age={<h3>Age: 38</h3>} hairColor={<h4>Hair Color: Brown</h4>}>
        {/* <p>This is the children of Andrew Name card</p> */}
      </PersonCard>
      
      <PersonCard fullName={<h1>My Kitty</h1>} age={<h3>Age: 34</h3>} hairColor={<h4>Hair Color: Black</h4>}>
        {/* <p>This is a children of Diana's name card</p> */}
      </PersonCard>

      <LightSwitch />



    </div>
  );
}

export default App;
