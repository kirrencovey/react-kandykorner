import React, { Component } from "react"
import { Route } from 'react-router-dom'
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import StoreList from './store/StoreList'


class ApplicationViews extends Component {

    storeArray = [
        { id: 1, name: "Kandy Korner", address: "123 Sugar Street" },
        { id: 2, name: "Kandy Kraze", address: "808 Licorice Drive" }
    ]

    employeeArray = [
        { id: 1, name: "Mo", position: "HBIC of Sugar"},
        { id: 2, name: "Nathan", position: "Lead Candy Sampler" },
        { id: 3, name: "Warner", position: "Web Design & Marketing" },
        { id: 4, name: "Kirren", position: "Nap Coordinater" }
    ]

    candyTypeArray = [
        { id: 1, name: "Hard" },
        { id: 2, name: "Gummy" },
        { id: 3, name: "Bar" },
        { id: 4, name: "Chocolate" },
        { id: 5, name: "Other" }
    ]

    candyArray = [
        { id: 1, name: "Dove Promise", candyTypeId: 4 },
        { id: 2, name: "Jolly Rancher", candyTypeId: 1 },
        { id: 3, name: "Laffy Taffy", candyTypeId: 5 },
        { id: 4, name: "Sour Worms", candyTypeId: 2 },
        { id: 5, name: "Snickers", candyTypeId: 3 },
        { id: 6, name: "Reeses", candyTypeId: 4 },
        { id: 7, name: "Milky Way", candyTypeId: 3 },
        { id: 8, name: "Gummy Bears", candyTypeId: 2 },
        { id: 9, name: "LifeSavers", candyTypeId: 1 }
    ]

    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
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