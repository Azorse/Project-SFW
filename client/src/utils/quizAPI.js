import axios from "axios";

const quizAPI = {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  // getUser: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteUser: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveQuiz: function(quizData) {
      console.log(quizData)
    return axios.post("/api/quiz", quizData);
  },

};

export default quizAPI;