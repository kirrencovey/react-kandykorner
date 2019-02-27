import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import './KandyKorner.css'
import "bootstrap/dist/css/bootstrap.min.css"


class KandyKorner extends Component {

    render() {
        return (
            <React.Fragment>
            <h1 className="title">Welcome to Kandy Korner</h1>
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
            </React.Fragment>
        )
    }

}


export default KandyKorner