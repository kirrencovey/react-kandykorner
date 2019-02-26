import React, { Component } from "react"
import Candy from './Candy'


class CandyList extends Component {
    render() {
        return (
            <section className="candies">
                <h2>Candies</h2>
                {
                    this.props.candyTypes.map(type =>
                        <div key={`candyType-${type.id}`}>
                            <h3>{type.name} Candies</h3>
                            <Candy candies={
                                this.props.candies.filter(candy => candy.candyTypeId === type.id)
                            }/>
                        </div>
                    )
                }
            </section>
        )
    }
}


export default CandyList