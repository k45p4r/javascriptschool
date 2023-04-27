const form = document.querySelector('#meow');
const input = document.querySelector('#query');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = input.value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    resultsContainer.innerHTML = '';

    for (const tvShow of data) {
      const name = tvShow.show.name;
      const url = tvShow.show.url;
      const image = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
      const summary = tvShow.show.summary;

      const article = document.createElement('article');
      article.innerHTML = `
        <h2>${name}</h2>
        <a href="${url}" target="_blank">${name}</a>
        <img src="${image}" alt="${name}">
        <div>${summary}</div>
      `;

      resultsContainer.appendChild(article);
    }
  } catch (error) {
    console.error(error);
  }
});
