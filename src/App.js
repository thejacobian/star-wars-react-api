import React, {Component} from 'react';
import PeopleContainer from './PeopleContainer/PeopleContainer';
import PlanetsContainer from './PlanetsContainer/PlanetsContainer';
import ShipsContainer from './ShipsContainer/ShipsContainer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenPage: null
    }
  }
  changePage = (e) => {
    console.log(e.target.id);
    this.setState({
      chosenPage: e.target.id
    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.changePage} id="ships">Show me the Ships!!!</button>
        <button onClick={this.changePage} id="planets">Show me the PLANETS!!!</button>
        <button onClick={this.changePage} id="people">Show me the CHARACTERS!!!</button>
        {
          this.state.chosenPage === null ?
            null
            :
            this.state.chosenPage === "ships" ?
              <ShipsContainer></ShipsContainer>
              :
              this.state.chosenPage === "planets" ?
                <PlanetsContainer></PlanetsContainer>
                :
                <PeopleContainer></PeopleContainer>
        }
      </div>
    );
  }
}

export default App;
