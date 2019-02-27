import React, { Component } from "react"
import { Route } from 'react-router-dom'
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import StoreList from './store/StoreList'


class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/candies")
            .then(r => r.json())
            .then(candies => newState.candies = candies)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/stores")
            .then(r => r.json()))
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/candyTypes")
            .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return<StoreList stores={this.state.stores} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <CandyList candyTypes={this.state.candyTypes}
                                candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }

}


export default ApplicationViews