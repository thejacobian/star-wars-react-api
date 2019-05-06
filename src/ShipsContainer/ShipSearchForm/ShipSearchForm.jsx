import React, {Component} from 'react';

class ShipSearchForm extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchShips(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        What ship do you want? <input onChange = {this.handleChange} type="text" name="search" />
        <input type="submit" />
        </form>
    }
}

export default ShipSearchForm;