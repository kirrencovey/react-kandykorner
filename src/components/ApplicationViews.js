import React, { Component } from "react"
import { Route } from 'react-router-dom'
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import StoreList from './store/StoreList'
import CandyManager from '../modules/CandyManager'
import CandyTypeManager from "../modules/CandyTypeManager"
import EmployeeManager from "../modules/EmployeeManager"
import StoreManager from "../modules/StoreManager"


class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    deleteCandy = (id) => {
        fetch(`http://localhost:5002/candies/${id}`, {
            "method": "DELETE"
        })
            .then(() => fetch("http://localhost:5002/candies")
            .then(r => r.json()))
            .then(candies => this.setState({ candies: candies }))
    }

    componentDidMount() {
        const newState = {}

        CandyManager.getAll()
            .then(candies => newState.candies = candies)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => StoreManager.getAll())
            .then(stores => newState.stores = stores)
            .then(() => CandyTypeManager.getAll())
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
                                candies={this.state.candies}
                                deleteCandy={this.deleteCandy} />
                }} />
            </React.Fragment>
        )
    }

}


export default ApplicationViews