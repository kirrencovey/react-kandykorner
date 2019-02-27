import React, { Component } from "react"
import './Store.css'


class StoreList extends Component {
    render() {
        return (
            <section className="storeSection">
                <h2>Stores</h2>
                <div className="stores">
                {
                    this.props.stores.map(store =>
                        <div className="store" key={`store-${store.id}`}>
                            <h3>{store.name}</h3>
                            <div>{store.address}</div>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}


export default StoreList