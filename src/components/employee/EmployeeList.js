import React, { Component } from "react"
import './Employee.css'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employeeSection">
                <h2>Employees</h2>
                <div className="employees">
                {
                    this.props.employees.map(employee =>
                        <div className="employee" key={`employee-${employee.id}`}>
                            <h3>{employee.name}</h3>
                            <div>{employee.position}</div>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}


export default EmployeeList