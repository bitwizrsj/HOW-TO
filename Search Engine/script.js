const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear');
const searchResults = document.getElementById('search-results');

const songNames = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California', 'Imagine', 'Sweet Child O\' Mine', 'Smells Like Teen Spirit', 'Blackbird', 'Hey Jude', 'Another Brick in the Wall', 'Enter Sandman'];

const fuse = new Fuse(songNames, {
  keys: ['songNames'],
  includeScore: true,
  threshold: 0.5,
});

searchInput.addEventListener('input', search);
clearButton.addEventListener('click', clearResults);

function search() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const results = fuse.search(searchTerm);
  displayResults(results);
}

function displayResults(results) {
  searchResults.innerHTML = '';
  results.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.item;
    searchResults.appendChild(listItem);
  });
}

function clearResults() {
  searchInput.value = '';
  searchResults.innerHTML = '';
}