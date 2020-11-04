import axios from "axios";

// const API_URL = "http://localhost:3000/user/";
 const API_URL = "https://midtermwebapi.herokuapp.com/user/";


class Auth {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data)
        }
        return response.data;
      });
  }

  logout(){
      localStorage.removeItem("user");
  }

  register(name, username, password, repeat_password) {
    return axios.post(API_URL + "register", {
      name,
      username,
      password,
      repeat_password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new Auth();

