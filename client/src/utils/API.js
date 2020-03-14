import axios from "axios";

const API = {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // // Deletes the book with the given id
  // deleteUser: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users/register", userData);
  },
  userLogin: function(userInfo) {
    return axios.post("/api/users/login", userInfo)
  }

};

export default API;