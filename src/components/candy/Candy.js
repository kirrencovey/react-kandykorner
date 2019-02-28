import React, { Component } from "react"


class Candy extends Component {
    render() {
        return (
            <div>
                {
                    this.props.candies.map(candy =>
                        <div key={`candy-${candy.id}`}>
                            {candy.name}
                            <button className="candyButton" onClick={() => {
                                this.props.deleteCandy(candy.id)
                            }}>Delete</button>
                        </div>
                    )
                }
            </div>
        )
    }
}


export default Candy