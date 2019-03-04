import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import StoreList from './store/StoreList'
import CandyManager from '../modules/CandyManager'
import CandyTypeManager from "../modules/CandyTypeManager"
import EmployeeManager from "../modules/EmployeeManager"
import StoreManager from "../modules/StoreManager"
import EmployeeForm from "./employee/EmployeeForm"
import CandyForm from "./candy/CandyForm"
import Login from './authentication/Login'


class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    return<StoreList stores={this.state.stores} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                    addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/candies" render={props => {
                    if (this.isAuthenticated()) {
                        return <CandyList {...props}
                                    candyTypes={this.state.candyTypes}
                                    candies={this.state.candies}
                                    deleteCandy={this.deleteCandy} />
                    } else {
                        return <Redirect to="/login" />
                    }
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