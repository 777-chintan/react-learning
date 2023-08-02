import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "Dummy", location: null, avatar_url: null },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/777-chintan");
    const json = await res.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        {location ? <h2>Location : {location}</h2> : null}
      </div>
    );
  }
}

export default User;
