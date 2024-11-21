// Show movie details
function showDetails(title, description) {
    const detailsSection = document.getElementById("movie-details");
    const titleElement = document.getElementById("movie-title");
    const descriptionElement = document.getElementById("movie-description");

    titleElement.textContent = title;
    descriptionElement.textContent = description;

    detailsSection.classList.remove("hidden");
}

// Hide movie details
function hideDetails() {
    const detailsSection = document.getElementById("movie-details");
    detailsSection.classList.add("hidden");
}
