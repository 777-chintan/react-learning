import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <User name={"1 "} location={"Surat"} />
      </div>
    );
  }
}

export default About;
