document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("serachbox");
    const movies = document.querySelectorAll(".image-box");

    // Search functionality
    searchBox.addEventListener("keyup", function () {
        let searchText = searchBox.value.toLowerCase().trim();

        movies.forEach(movie => {
            let movieName = movie.querySelector(".caption").innerText.toLowerCase();
            
            if (movieName.includes(searchText)) {
                movie.style.display = "block"; // Show matching movies
            } else {
                movie.style.display = "none"; // Hide non-matching movies
            }
        });
    });
});

// Category filtering
function showCategory(category) {
    const movies = document.querySelectorAll(".image-box");

    movies.forEach(movie => {
        movie.style.display = "none"; // Hide all movies
    });

    // Show only selected category
    document.querySelectorAll("." + category).forEach(movie => {
        movie.style.display = "block";
    });
}






function showCategory(category) {
    // Hide the "movie time" image
    document.getElementById("movieTimeImage").style.display = "none";

    // Hide all movie images first
    let images = document.querySelectorAll(".image-box");
    images.forEach(img => img.style.display = "none");

    // Show only selected category images
    let selectedImages = document.querySelectorAll("." + category);
    selectedImages.forEach(img => img.style.display = "block");
}
