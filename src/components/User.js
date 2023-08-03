import React from "react";
import UserContext from "../utils/context/UserContext";
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
      <UserContext.Consumer>
        {({ setUserInfo }) => {
          return (
            <div className="user-card">
              <img src={avatar_url} />
              <h2>
                Name :
                <input
                  value={name}
                  type="text"
                  onChange={(e) => {
                    this.setState({
                      userInfo: {
                        ...this.state.userInfo,
                        name: e.target.value,
                      },
                    });
                  }}
                />
              </h2>
              {location ? <h2>Location : {location}</h2> : null}
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default User;
