import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      resultEvents: [{"stuff":"thing"}],
    };
  }
  updateResults(result)
  {
    // debugger
    // this.setState({resultEvents: result})
    this.setState({resultEvents: 1})
  }

  render() {

    return(
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and meow to reload.
        </p>
        <div id="tileContainer" className="container">
          <Tile diceValue='8' diceQuantity='5' updateResults = {this.updateResults} />
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
          <Tile diceValue='8' diceQuantity='5'/>
        </div>
        <Results events = {this.state.resultEvents}/>   
      </header>
    </div>
    )
  }
}

export default App;

class Results extends React.Component {
  render(){
    return(
      <div>
          HELLO FROM RESULTS COMPONENT {this.props.events[0].stuff}
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {
        diceValue: this.props.diceValue,
        diceQuantity: this.props.diceQuantity,
        lastRoll: 0
      };
  }

  roll = () => {
    let val = 0
    for (let i = 0; i < this.state.diceQuantity; i++)
    {
      val += Math.floor(Math.random() * this.state.diceValue ) + 1;
    }
    this.props.updateResults({value:val});
    this.setState({lastRoll : val})
  }

  render() {
      return(
          <div class = "tile" onClick = {this.roll}>
            <p>Sleep - roll 5d8.</p>
            {
              this.state.lastRoll > 0 && 
              <p>Sleep: rolled {this.state.lastRoll}</p>
            }
          </div>
      )
  }
}