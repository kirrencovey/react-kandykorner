import React, { Component } from "react"
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import StoreList from './store/StoreList'


class KandyKorner extends Component {

    storeArray = [
        { id: 1, name: "Kandy Korner", address: "123 Sugar Street" },
        { id: 2, name: "Kandy Kraze", address: "808 Licorice Drive" }
    ]

    employeeArray = [
        { id: 1, name: "Willy Wonka" },
        { id: 2, name: "Henry Hershey" },
        { id: 3, name: "Mo" },
        { id: 4, name: "Nathan" },
        { id: 5, name: "Warner" },
        { id: 6, name: "Kirren" }
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
        { id: 5, name: "Snickers", candyTypeId: 3 }
    ]

    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }

    render() {
        return (
            <section className="kandyKorner">
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candyTypes={this.state.candyTypes}
                    candies={this.state.candies} />
            </section>
        )
    }

}


export default KandyKorner