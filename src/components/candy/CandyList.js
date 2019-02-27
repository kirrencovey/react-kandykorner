import React, { Component } from "react"
import Candy from './Candy'
import './Candy.css'


class CandyList extends Component {
    render() {
        return (
            <section className="candySection">
                <h2>Candies</h2>
                <div class="candies">
                {
                    this.props.candyTypes.map(type =>
                        <div className="candy" key={`candyType-${type.id}`}>
                            <h3>{type.name} Candies</h3>
                            <Candy candies={
                                this.props.candies.filter(candy => candy.candyTypeId === type.id)
                            }/>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}


export default CandyList