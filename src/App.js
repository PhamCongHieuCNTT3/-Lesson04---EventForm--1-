import React, { Component } from 'react'
import PCH_EventForm1 from './components/PCH_EventForm1';
import PCH_EventForm2 from './components/PCH_EventForm2';
import PCH_EventForm3 from './components/PCH_EventForm3';
import PCH_EventForm4 from './components/PCH_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <PCH_EventForm1/>
        <PCH_EventForm2/>
        <PCH_EventForm3/>
        <PCH_EventForm4 name="Pham Cong Hieu"/>
      </div>
    )
  }
}

export default App;
