import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const MyContext = React.createContext();

class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      user_id: "",
      isUserAuthenticated: false,
      token: "",
      isAdmin: false,
      airports: [],
      services: [],
      loading: true,
      searchKey: "",
      name: "all",
    };
  }
  componentDidMount() {
    axios
      .get("/service/airports/")
      .then((response) => {
        let featured = response.data.filter((airport) => airport.featured);
        let token = localStorage.getItem("access-token");
        let username = "";
        let auth = false;
        let user_id = "";
        let is_admin = false;
        if (token) {
          auth = true;
          username = localStorage.getItem("username");
          user_id = localStorage.getItem("user_id");
          is_admin = localStorage.getItem("is_admin");
          is_admin = is_admin === "true" ? true : false;
        }

        this.setState({
          isUserAuthenticated: auth,
          username: username,
          user_id: user_id,
          token: token,
          isAdmin: is_admin,
          loading: false,
          airports: response.data,
        });
      })
      .then((response) => {
        if (this.state.isAdmin) {
          this.setCheckedInRes();
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get("/service/services/").then((res) => {
      this.setState({
      services: res.data,
      });
      })
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
  };

  createAlert(message, type, id_of_alert_tag) {
    let alert_location = document.querySelector(`#${id_of_alert_tag}`);
    alert_location.setAttribute("class", `alert alert-${type}`);
    let link = document.createElement("a");
    let link_id = "close-alert";
    let link_text = document.createTextNode(`  X`);
    link.setAttribute("href", "#");
    link.setAttribute("id", link_id);
    link.appendChild(link_text);
    alert_location.innerHTML = message;
    alert_location.appendChild(link);
    alert_location.style.display = "block";
    let link_action = document.querySelector(`#${link_id}`);
    link_action.addEventListener(
      "click",
      () =>
        (document.querySelector("#login-error-header").style.display = "none")
    );
  }

  handleLogin = (event, data, history) => {
    event.preventDefault();
    const credentials = {
      username: data.username,
      password: data.password,
    };
    axios
      .post("/accounts/login/", credentials)
      .then((response) => {
        this.setState(
          {
            isUserAuthenticated: true,
            username: credentials.username,
            token: response.data["access"],
            user_id: response.data["user_id"],
            isAdmin: response.data["is_admin"],
          },
          this.setCheckedInRes
        );
        const token = response.data["access"];
        const user_id = response.data["user_id"];
        const username = response.data["username"];
        const is_admin = response.data["is_admin"];
        localStorage.setItem("access-token", token);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("username", username);
        localStorage.setItem("is_admin", is_admin);
      })
      .catch((e) => {
        document.getElementById("login-error-header").innerHTML =
          "Unauthorized Credentials";
        setTimeout(function () {
          document.getElementById("login-error-header").innerHTML = "";
        }, 4000);
      });
  };

  handleLogout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_admin");
    this.setState({
      isUserAuthenticated: false,
      username: "",
      token: "",
      user_id: "",
      isAdmin: false,
    });
    return <Redirect to="/" />;
  };

  handleRegister = (event, data, history) => {
    event.preventDefault();
    axios
      .post("/accounts/register/", data)
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
        let html = '';
        for(let e in error.response.data) {
          html += `<li>${error.response.data[e]}</li>`
        }
        document.getElementById("register-message").innerHTML =
          html
      });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          login: this.handleLogin,
          logout: this.handleLogout,
          register: this.handleRegister,
          handleBook: this.handleBook,
          checkout: this.handleCheckOut,
          searchBy: this.handleSearchKey,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default Context;
