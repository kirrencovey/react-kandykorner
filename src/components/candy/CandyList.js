import React, { Component } from "react"
import Candy from './Candy'


class CandyList extends Component {
    render() {
        return (
            <section className="candies">
                <h2>Candies</h2>
                {
                    this.props.candies.map(candy =>
                        <div key={`candy-${candy.id}`}>
                            <Candy candy={candy.name}
                                type={
                                    this.props.candyTypes.find(ct => ct.id === candy.candyTypeId).name
                                }/>
                        </div>
                    )
                }
            </section>
        )
    }
}


export default CandyList