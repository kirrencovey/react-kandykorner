import React, { Component } from "react"
import Candy from './Candy'
import './Candy.css'


class CandyList extends Component {
    render() {
        return (
            <section className="candySection">
                <div className="candies">
                {
                    this.props.candyTypes.map(type =>
                        <div className="candy" key={`candyType-${type.id}`}>
                            <h3>{type.name} Candies</h3>
                            <Candy candies={
                                this.props.candies.filter(candy => candy.candyTypeId === type.id)
                            }
                                deleteCandy={this.props.deleteCandy} />
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}


export default CandyList