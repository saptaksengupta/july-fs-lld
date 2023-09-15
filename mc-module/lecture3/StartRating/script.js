const stars = document.querySelectorAll(".star");
const starContainer = document.querySelector(".star-container");
const count = document.querySelector("#count");

var starRatingApp = (function () {
    var currentRating;
    function init() {
        attachEventListeners();
    }
    
    function attachEventListeners() {
        starContainer.addEventListener('click', (e) => {

            const rating = extractStarRating(e);

            if (!rating) {
                return;
            }
            
            fillStars(rating);
            currentRating = rating;
            renderValue(rating);
        });


        starContainer.addEventListener('mouseover', (e) => {
            const rating = extractStarRating(e);
            if (!rating) {
                return;
            }

            fillStars(rating);
        });

        starContainer.addEventListener('mouseleave', function (e) {
            resetStars();
            fillStars(currentRating);
        })
    }

    function extractStarRating(e) {
        let elem = e.target;
        let isStarClicked = elem.hasAttribute('rating');

        if (!isStarClicked) {
            return;
        }

        return elem.getAttribute("rating");
    }

    function renderValue(rating) {
        count.innerHTML = rating
    }

    function fillStars(rating) {
        for (var i = 0; i < rating; i++) {
            stars[i].classList.add("yellow");
        }
    }


    function resetStars() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].classList.remove("yellow");
        }
    }

    return {
        initialize: init
    }

})();



starRatingApp.initialize();

