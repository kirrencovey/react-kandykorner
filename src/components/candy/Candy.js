import React, { Component } from "react"


class Candy extends Component {
    render() {
        return (
            <section className="candy">
                <div>
                    {this.props.candy}, <i>{this.props.type}</i>
                </div>
            </section>
        )
    }
}


export default Candy