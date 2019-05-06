import React, { Component } from 'react';
import ShipSearchForm from './ShipSearchForm/ShipSearchForm';

class ShipsContainer extends Component{
    constructor(){
        super();
        this.state = {
            ships: []
        }
    }
    componentDidMount(){
        this.searchShips({search: ""});
    }
    searchShips = async (formData) => {
        const searchURL = `https://swapi.co/api/starships?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            ships: parsedResult.results.filter(ship => ship.cost_in_credits !== "unknown")
        })
    }
    render(){
        const shipsList = this.state.ships.map((ship)=>{
            return(<div key={ship.name}>
                <h5>{ship.name}</h5>
                <p>It is a {ship.starship_class} worth {ship.cost_in_credits} credits</p>
            </div>)
        })
        return <div>
            <h2>Ships container!!!</h2>
            <ShipSearchForm searchShips={this.searchShips}></ShipSearchForm>
            {shipsList}
        </div>
    }
}

export default ShipsContainer;