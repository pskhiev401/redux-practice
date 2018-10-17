import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../ducks/peopleReducer";
import { getPeople } from "../ducks/peopleReducer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputAge: 0,
      inputCity: "",
      arr: []
    };
  }

  componentDidMount() {
    this.props.getPeople();
    this.setState({ arr: this.props.data });
  }
  nameHandler(e) {
    this.setState({ inputName: e });
  }
  ageHandler(e) {
    this.setState({ inputName: e });
  }
  cityHandler(e) {
    this.setState({ inputName: e });
  }

  submitHandler() {
    const { inputName, inputAge, inputCity } = this.state;
    this.props.addPerson({
      name: inputName,
      age: inputAge,
      city: inputCity
    });
  }

  render() {
    console.log(this.state.arr);
    let displayAllPeople = this.state.arr.map((e, i) => {
      return (
        <div key={i}>
          {e.name} {e.age} {e.city}{" "}
        </div>
      );
    });

    return (
      <div>
        <h1>Home</h1>
        <p>Send us your info, and we will match you with an Internship!</p>
        <input
          placeholder="Enter Name"
          onChange={e => this.nameHandler(e.target.value)}
        />
        <input type="number"
          placeholder="Enter Age"
          onChange={e => this.ageHandler(e.target.value)}
        />
        <input
          placeholder="Enter City"
          onChange={e => this.cityHandler(e.target.value)}
        />
        <button onClick={() => this.submitHandler()}>Submit</button>
        {displayAllPeople}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { addPerson, getPeople }
)(Home);

// mapStateToProps is called evertime store changes, based on state-state is set to.
