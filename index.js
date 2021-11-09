function addMovie(event) {

    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', deleteMovie);
    movie.appendChild(deleteButton);

    document.querySelector('ul').appendChild(movie);
    
    inputField.value = '';

}

function deleteMovie(event) {
    let movieName = event.target.parentNode.firstChild.textContent;
    event.target.parentNode.remove();
    revealMessage(`${movieName} deleted!`);
}

function crossOffMovie(event) {
    const movie = event.target
    movie.classList.toggle('checked');
    if (movie.classList.contains('checked')){
        revealMessage(`${movie.textContent} watched!`);
    } else {
        revealMessage(`${movie.textContent} re-added!`);
    }
}

function revealMessage(messageText) {
    const message = document.querySelector('#message');
    message.textContent = messageText;
    message.classList.remove('hide');
    setTimeout(() => message.classList.add('hide'), 1000);
}

document.querySelector('form').addEventListener('submit', addMovie);