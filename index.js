const message = document.querySelector("#message")

function addMovie (event) {
    event.preventDefault()
    const inputField = document.querySelector("input");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);
    const list = document.querySelector("ul");
    list.appendChild(movie);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    inputField.value = "";
}

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = `Movie Deleted!`
}

function crossOffMovie (event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked") === true) {
        message.textContent = `Movie Watched!`
    } else {
        message.textContent = `Movie Added Back!`
    }
}

document.querySelector("form").addEventListener("submit", addMovie);