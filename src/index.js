import axios from 'axios';




const paginationContainer = document.querySelector('.js-pagination');

let currentPage = 1;
const totalPages = 498;
let movieData = [];

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const apiKey = 'a2883c737e33341efae828fe3a93a67d';

async function fetchMovies(page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: apiKey,
        page: page,
      },
    });
    movieData = response.data.results;
    renderMovies();
    updatePagination();
  } catch (error) {
    console.error(error);
  }
}






function renderMovies() {
  const movieListContainer = document.querySelector('.js-movie-list');
  movieListContainer.innerHTML = '';
   return arr
     .map(({ poster_path, release_date, original_title, vote_average }) => {
       return `<li class="movie-card">
        <img class= "img-movie" src="${
          poster_path
            ? 'https://image.tmdb.org/t/p/w300' + poster_path
            : 'https://example.com/default-poster.jpg'
        }" alt="${original_title || 'Unknown Title'}">
        <div class="movie-info">
            <h2 >${original_title || 'Unknown Title'}</h2>
            <p>Release Date: ${release_date || 'Unknown Date'}</p>
            <p>Vote Average: ${vote_average || 'Unknown Vote'}</p>
        </div>
    </li>`;
     })
     .join('');
}



function updatePagination() {
  paginationContainer.innerHTML = '';

  const pagesToShow = 3;

  let startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  if (currentPage > 1) {
    paginationContainer.innerHTML += `<button class="js-first-page"><<</button>`;
    paginationContainer.innerHTML += `<button class="js-previous-page"><</button>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i === currentPage) {
      paginationContainer.innerHTML += `<button class="js-page active" data-page="${i}">${i}</button>`;
    } else {
      paginationContainer.innerHTML += `<button class="js-page" data-page="${i}">${i}</button>`;
    }
  }
  if (currentPage <= totalPages - 3) {
    paginationContainer.innerHTML += `<p class="js-three-dots">...</button>`;
  }
  if (currentPage < totalPages) {
    paginationContainer.innerHTML += `<button class="js-next-page">></button>`;
    paginationContainer.innerHTML += `<button class="js-last-page">>></button>`;
  }
}

paginationContainer.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('js-first-page')) {
    currentPage = 1;
  } else if (target.classList.contains('js-previous-page')) {
    currentPage = Math.max(currentPage - 1, 1);
  } else if (target.classList.contains('js-next-page')) {
    currentPage = Math.min(currentPage + 1, totalPages);
  } else if (target.classList.contains('js-last-page')) {
    currentPage = totalPages;
  } else if (target.classList.contains('js-page')) {
    currentPage = parseInt(target.getAttribute('data-page'));
  }

  fetchMovies(currentPage);
});


fetchMovies(currentPage);




// dark mode in process


const body = document.querySelector('body');
const buttonSwitch = document.querySelector('.toggle-switch');
 


function changeColor() {
  buttonSwitch.addEventListener('click', event => {
    let isDarkMode = true;

    if (isDarkMode) {
      console.log(isDarkMode);
      body.style.backgroundColor = '#2f2f37';
    } else {
      console.log(!isDarkMode);
      isDarkMode = false;
      body.style.backgroundColor = '#ffffff';
      isDarkMode = !isDarkMode;
    }
  });
}
changeColor();
 
















