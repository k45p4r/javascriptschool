
const form = document.querySelector('#meow');
const input = document.querySelector('#query');

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const query = input.value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});
