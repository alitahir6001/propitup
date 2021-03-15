import React from 'react';
import './App.css';
import PersonCard from './components/PersoncardInversion';
// import LightSwitch from './components/lightSwitch';

function App() {
  return (
    <div className="App">

      <button onClick={ () => alert("See you in the Slob my Dudes!") }>Click Me</button>
      
      <PersonCard lastName={"Tahir"} firstName={"Ali"} age={36} hairColor={"Afro Black"}>
        {/* <p>This is a children of a name card</p> */}
      </PersonCard>
      
      <PersonCard lastName={"The Animal"} firstName={"Nearhan"} age={38} hairColor={"Baldy"}>
        {/* <p>This is another children</p> */}
      </PersonCard>
      
      <PersonCard lastName={"Bueno"} firstName={"Torie"} age={36} hairColor={"Blonde"}>
        {/* <p>This is the children of Andrew Name card</p> */}
      </PersonCard>
      
      <PersonCard lastName={"Kitten"} firstName={"Kittehhh the"} age={7} hairColor={"white with black spots"}>
        {/* <p>This is a children of Diana's name card</p> */}
      </PersonCard>


    </div>
  );
}

export default App;
