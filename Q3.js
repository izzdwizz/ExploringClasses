class Movie {
  constructor(title, genre, available) {
    this.title = title;
    this.genre = genre;
    this.available = available;
  }

  rentMovie() {
    if (this.available) {
      console.log(`You have rented "${this.title}". Enjoy your movie!`);
      this.available = false;
    } else {
      console.log(`Sorry, "${this.title}" is not available for rent.`);
    }
  }

  returnMovie() {
    if (!this.available) {
      console.log(`Thank you for returning "${this.title}".`);
      this.available = true;
    } else {
      console.log(`Error: "${this.title}" is already available.`);
    }
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(title, genre) {
    const newMovie = new Movie(title, genre, true);
    this.movies.push(newMovie);
    console.log(`"${title}" has been added to the store.`);
  }

  listMovies() {
    console.log("Available Movies:");
    this.movies.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.title} - ${movie.genre} (${movie.available ? 'Available' : 'Not Available'})`);
    });
  }

  rentMovie(title) {
    const movie = this.movies.find(movie => movie.title === title);
    if (movie) {
      movie.rentMovie();
    } else {
      console.log(`Error: Movie "${title}" not found.`);
    }
  }

  returnMovie(title) {
    const movie = this.movies.find(movie => movie.title === title);
    if (movie) {
      movie.returnMovie();
    } else {
      console.log(`Error: Movie "${title}" not found.`);
    }
  }
}

const movieStore = new MovieStore();

movieStore.addMovie("The Matrix", "Sci-Fi");
movieStore.addMovie("Inception", "Thriller");
movieStore.addMovie("The Shawshank Redemption", "Drama");

movieStore.listMovies();

movieStore.rentMovie("Inception");
movieStore.listMovies();

movieStore.returnMovie("Inception");
movieStore.listMovies();
