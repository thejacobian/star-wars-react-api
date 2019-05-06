import React, { Component } from 'react';
import PlanetSearchForm from './PlanetSearchForm/PlanetSearchForm'

class PlanetsContainer extends Component{
    constructor(){
        super();
        this.state = {
            planets: []
        }
    }
    componentDidMount(){
        this.searchPlanets({search: ""});
    }
    searchPlanets = async (formData) => {
        const searchURL = `https://swapi.co/api/planets?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            planets: parsedResult.results.filter(planet => planet.population !== "unknown")
        })
    }
    render(){
        const planetsList = this.state.planets.map((planet)=>{
            return(<div key={planet.name}>
                <h5>{planet.name}:</h5>
                <p>This planet has {planet.climate} climate and {planet.diameter} diameter with {planet.population} inhabitants.</p>
            </div>)
        });
        return (
            <div>
                <h2>Planets container!!!</h2>
                <PlanetSearchForm searchPlanets={this.searchPlanets}></PlanetSearchForm>
                {planetsList}
            </div>
        )
    }
}

export default PlanetsContainer;