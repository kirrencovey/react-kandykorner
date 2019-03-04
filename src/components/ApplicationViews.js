import React, { Component } from "react"
import { Route } from 'react-router-dom'
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import StoreList from './store/StoreList'
import CandyManager from '../modules/CandyManager'
import CandyTypeManager from "../modules/CandyTypeManager"
import EmployeeManager from "../modules/EmployeeManager"
import StoreManager from "../modules/StoreManager"
import EmployeeForm from "./employee/EmployeeForm"
import CandyForm from "./candy/CandyForm"


class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    deleteCandy = (id) => {
        CandyManager.delete(id, "candies")
            .then(candies => this.setState({ candies: candies }))
    }

    addCandy = candy =>
        CandyManager.addCandy(candy)
            .then(() => CandyManager.getAll("candies"))
            .then(candies =>
                this.setState({
                    candies: candies
                })
            )

    addEmployee = employee =>
        EmployeeManager.addEmployee(employee)
            .then(() => EmployeeManager.getAll("employees"))
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );

    componentDidMount() {
        const newState = {}

        CandyManager.getAll("candies")
            .then(candies => newState.candies = candies)
            .then(() => EmployeeManager.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() => StoreManager.getAll("stores"))
            .then(stores => newState.stores = stores)
            .then(() => CandyTypeManager.getAll("candyTypes"))
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
                    return <EmployeeList {...props}
                                employees={this.state.employees} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                    addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <CandyList {...props}
                                candyTypes={this.state.candyTypes}
                                candies={this.state.candies}
                                deleteCandy={this.deleteCandy} />
                }} />
                <Route path="/candies/new" render={(props) => {
                    return <CandyForm {...props}
                                addCandy={this.addCandy}
                                candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }

}


export default ApplicationViews