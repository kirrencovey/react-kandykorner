import React, { Component } from "react"


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h2>Employees</h2>
                {
                    this.props.employees.map(employee =>
                        <div key={`employee-${employee.id}`}>
                            {employee.name}
                        </div>
                    )
                }
            </section>
        )
    }
}


export default EmployeeList