import React, { Component } from "react"
import './Employee.css'


class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Add Employee
                    </button>
                </div>
                <section className="employeeSection">
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
            </React.Fragment>
        )
    }
}


export default EmployeeList