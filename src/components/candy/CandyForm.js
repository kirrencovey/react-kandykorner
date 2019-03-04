import React, { Component } from "react";

export default class CandyForm extends Component {
  // Set initial state
  state = {
    candyName: "",
    candyTypeId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange)
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewCandy = evt => {
    evt.preventDefault()
    if
    (this.state.candyTypeId === "") {
      window.alert("Please select a candy type")
    }else {
      const candy = {
        name: this.state.candyName,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        candyTypeId: parseInt(this.state.candyTypeId)
      };

      // Create the animal and redirect user to animal list
      this.props
        .addCandy(candy)
        .then(() => this.props.history.push("/candies"))
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="candyForm">
          <div className="form-group">
            <label htmlFor="candyName">Candy name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="candyName"
              placeholder="Candy name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="candyTypeId">Candy Type</label>
            <select
              defaultValue=""
              name="candyType"
              id="candyTypeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a candy type</option>
              {this.props.candyTypes.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewCandy}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}