import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenFb");
  }

  getCurrentUser() {
    if (localStorage.getItem("token")) {
      const loggedInUser = localStorage.getItem("token");
      if (localStorage.getItem("token")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.fname;
        return fname;
      }
    } else {
      const loggedInUser = localStorage.getItem("tokenFb");
      if (localStorage.getItem("tokenFb")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.first_name;
        return fname;
      }
    }
  }

  getFullname() {
    if (localStorage.getItem("token")) {
      const loggedInUser = localStorage.getItem("token");
      if (localStorage.getItem("token")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.name;
        return fname;
      }
    } else {
      const loggedInUser = localStorage.getItem("tokenFb");
      if (localStorage.getItem("tokenFb")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.name;
        return fname;
      }
    }
  }

  getId() {
    if (localStorage.getItem("token")) {
      const loggedInUser = localStorage.getItem("token");
      if (localStorage.getItem("token")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.id;
        return fname;
      }
    }else {
      const loggedInUser = localStorage.getItem("tokenFb");
      if (localStorage.getItem("tokenFb")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.id;
        return fname;
      }
    }
  }

  getToken() {
    if(localStorage.getItem("token")) {
      const loggedInUser = localStorage.getItem("token");
      if (localStorage.getItem("token")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.token;
        return fname;
      }
    }else{
      const loggedInUser = localStorage.getItem("tokenFb");
      if (localStorage.getItem("tokenFb")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.accessToken;
        return fname;
      }
    }
  }

  checkLogin() {
    const loggedInUser = localStorage.getItem("token");
    const loggedInUserFb = localStorage.getItem("tokenFb");
    if (loggedInUserFb) {
      const foundUser = JSON.parse(loggedInUser);

      $(".colMain").hide();
      $(".colLogin").hide();
      $(".colDeliver").show();
      console.log(foundUser);
    }
  }
}

export default new AuthService();
