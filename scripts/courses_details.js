/* Show More/Less Functions */
function toggleText() {
    var hiddenText = document.querySelector('.hidden-text');
    var showMore = document.querySelector('.show-more');

    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
        showMore.textContent = "Show Less";
    } else {
        hiddenText.style.display = "none";
        showMore.textContent = "Show More";
    }
}

function toggleContent() {
    var hiddenContent = document.querySelector('.hidden-content');
    var showMoreContent = document.querySelector('.show-more-content');

    if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block";
        showMoreContent.textContent = "Show Less";
    } else {
        hiddenContent.style.display = "none";
        showMoreContent.textContent = "Show More";
    }
}

/* Navbar Mobile Menu */
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".navbar-menu");
const closeBtn = document.querySelector(".close-btn");

menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

/* Reviews System */
document.addEventListener("DOMContentLoaded", function() {
    loadReviews();
    setupStarRating();
});

function setupStarRating() {
    const stars = document.querySelectorAll('.stars-container i');

    stars.forEach(star => {
        // When hovering over a star
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            highlightStars(rating);
        });

        // When moving mouse away from a star
        star.addEventListener('mouseout', function() {
            const currentRating = document.getElementById('rating').value;
            highlightStars(currentRating);
        });

        // When clicking on a star
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            document.getElementById('rating').value = rating;
            highlightStars(rating);
        });
    });
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.stars-container i');

    stars.forEach(star => {
        const starRating = star.getAttribute('data-rating');
        if (starRating <= rating) {
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

function addReview() {
    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();
    let rating = document.getElementById("rating").value;

    if (name === "" || comment === "" || rating === "0") {
        alert("Please fill in all fields and select a rating!");
        return;
    }

    // Using Font Awesome icons for stars
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }

    let review = {
        name: name,
        comment: comment,
        rating: rating,
        starsHtml: starsHtml
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReview(review);
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("rating").value = "0";
    highlightStars(0);
}

function displayReview(review) {
    let reviewsContainer = document.getElementById("reviews");

    let reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
        <p>"${review.comment}"</p>
        <span class="name">${review.name}</span>
        <div class="rating">${review.starsHtml || review.rating}</div>
    `;

    reviewsContainer.prepend(reviewCard);
}

function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(displayReview);
}