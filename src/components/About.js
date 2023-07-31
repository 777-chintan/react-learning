import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent did mount");
  }

  componentDidUpdate() {
    // console.log("parent didupdate");
  }

  componentWillUnmount() {
    // console.log("parent unmount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <User name={"1 "} location={"Surat"} />
        <User name={"2 "} location={"Surat"} />
      </div>
    );
  }
}

export default About;
