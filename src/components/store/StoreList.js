import React, { Component } from "react"


class StoreList extends Component {
    render() {
        return (
            <section className="stores">
                <h2>Stores</h2>
                {
                    this.props.stores.map(store =>
                        <div key={`store-${store.id}`}>
                            <strong>{store.name}</strong><br />
                            {store.address}
                        </div>
                    )
                }
            </section>
        )
    }
}


export default StoreList