import React, { Component } from 'react';
import './demonymApp.css'

import Demonym from './demonym';
import CountrySelector from './countrySelector';

//Step #1 - Pass required data down to 2 child components demonym and countrySelector
/*class DemonymApp extends Component {
  render() {
    return (
      <div className="demonym_app">
        <CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]}/>
        <Demonym name="Barbadian" country="Barbados"/>
      </div>
    );
  }
}*/


//#Step 2
class DemonymApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  /*componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
              .map(key => data[key].item[0]);
        this.setState({
          countries
        });
      });
  }*/


  //fetch('https://country.register.gov.uk/recordsWRONG.json?page-size=5000')
  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(response => {
        console.log('About to check for errors');
        if(!response.ok) {
          console.log('An error did occur, let\'s throw an error.');
          throw new Error('Something went wrong'); 
        }
        return response; 
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
              .map(key => data[key].item[0]);
        this.setState({
          countries
        });
      })
      .catch(err => {
        console.log('Handling the error here.', err);
      });
  }


  render() {
    //Conditionally render the Demonym as long as a country is selected
    const demon = this.state.selected
          ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
          : <div className="demonym_app__placeholder">Select a country above</div>;

    const error = this.state.error
          ? <div className="demonym_app__error">{this.state.error}</div>
          : "";

    return (
        <div className="demonym_app">
          <CountrySelector 
                countries={this.state.countries}
                changeHandler={selected => this.setSelected(selected)}/>
          {demon}
        </div>
      );
  }
}


export default DemonymApp;