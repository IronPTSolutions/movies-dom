// states
let watchList = [];
let search = "";
let filter = "Todos";

const movieTemplate = document.getElementById("movie-template");
movieTemplate.removeAttribute("id");
movieTemplate.remove();

const watchlistMovieTemplate = document.getElementById(
  "movie-watchlist-template"
);
watchlistMovieTemplate.removeAttribute("id");
watchlistMovieTemplate.remove();

render();
addEventListener();

function render() {
  renderMovies();
  renderWatchlist();
  renderFilters();
}

function renderFilters() {
  document.getElementById("search").value = search;

  document.querySelectorAll("#filters-buttons button").forEach((button) => {
    if (button.innerText === filter) {
      button.classList.add("bg-blue-600");
      button.classList.remove("bg-gray-700");
    } else {
      button.classList.remove("bg-blue-600");
      button.classList.add("bg-gray-700");
    }
  });
}

function renderMovies() {
  const list = document.getElementById("movies-list");
  list.innerHTML = "";

  movies
    .filter((movie) => movie.title.includes(search))
    .filter((movie) => filter === "Todos" || movie.genres.includes(filter))
    .forEach((movie) => {
      const movieDOM = movieTemplate.cloneNode();
      movieDOM.innerHTML = movieTemplate.innerHTML;

      movieDOM.querySelector("h3").innerText = movie.title;
      movieDOM.querySelector(".movie-categories").innerText =
        movie.genres.join(", ");

      movieDOM.querySelector(".movie-duration").innerText =
        movie.duration + " min.";

      movieDOM.querySelector(".movie-description").innerText =
        movie.description;

      movieDOM.querySelector(".movie-rating").innerText = movie.rating;

      movieDOM.querySelector("button").addEventListener("click", (e) => {
        if (!watchList.includes(movie.id)) {
          watchList.push(movie.id);
        }

        render();
      });

      list.appendChild(movieDOM);
    });
}

function renderWatchlist() {
  const list = document.getElementById("watchlist-list");
  list.innerHTML = "";

  let totalDuration = 0;

  watchList.forEach((id) => {
    const movie = movies.find((m) => m.id === id);

    const movieDOM = watchlistMovieTemplate.cloneNode();
    movieDOM.innerHTML = watchlistMovieTemplate.innerHTML;

    movieDOM.querySelector("h4").innerText = movie.title;
    movieDOM.querySelector(".categories").innerText = movie.genres.join(", ");

    movieDOM.querySelector(".duration").innerText = movie.duration + " min.";

    movieDOM.querySelector(".rating").innerText = movie.rating;

    list.appendChild(movieDOM);

    totalDuration += movie.duration;
  });

  document.getElementById("wl-total-duration").innerText =
    totalDuration + " min";

  document.getElementById("wl-total").innerText = watchList.length;
}

function addEventListener() {
  document.getElementById("search").addEventListener("input", (e) => {
    search = e.target.value;

    render();
  });

  document.querySelectorAll("#filters-buttons button").forEach((button) => {
    button.addEventListener("click", (e) => {
      filter = e.target.innerText;

      render();
    });
  });

  document.getElementById("clear").addEventListener("click", (e) => {
    watchList = [];

    render();
  });
}
