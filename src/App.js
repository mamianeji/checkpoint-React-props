import React from 'react'
import './App.css';
import Profilee from './Compponents/Profilee';


function App() {
  const FullName="Mamia Neji";
  const profession="Student at GoMyCode Academy";
  const bio="Hello my name is Mamia I'm 29 years old. I am from Tunisia. I have master degree in Pablic Law and I am currently a student at GoMyCode Academy.";
  const handleName=(message)=> alert(message);

  return (
    <div className="App">
   <Profilee FullName={FullName} profession={profession} bio={bio} handleName={handleName} />
          </div>
  
 );
}

export default App;