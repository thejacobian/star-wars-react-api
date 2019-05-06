import React, { Component } from 'react';
import PeopleSearchForm from './PeopleSearchForm/PeopleSearchForm'

class PeopleContainer extends Component{
    constructor(){
        super();
        this.state = {
            peoples: []
        }
    }
    componentDidMount(){
        this.searchPeoples({search: ""});
    }
    searchPeoples = async (formData) => {
        const searchURL = `https://swapi.co/api/people?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            peoples: parsedResult.results.filter(people => people.birth_year !== "n/a")
        })
    }
    render(){
        const peoplesList = this.state.peoples.map((people)=>{
            return(<div key={people.name}>
                <h5>{people.name}:</h5>
                <p>This character has {people.eye_color} eyes and {people.hair_color} hair and was born in {people.birth_year}.</p>
            </div>)
        });
        return (
            <div>
                <h2>Peoples container!!!</h2>
                <PeopleSearchForm searchPeoples={this.searchPeoples}></PeopleSearchForm>
                {peoplesList}
            </div>
        )
    }
}

export default PeopleContainer;