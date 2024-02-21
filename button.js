let choice = 0;

function selectRating(rating) {
    if (choice != 0) {
        console.log(choice);
        console.log(choice.classList);
        choice.classList.toggle("selected");
    }
        
        console.log(rating);
        rating.classList.toggle("selected");
        choice = document.querySelector(".selected");
        document.getElementById("rating").innerHTML = choice.innerHTML;
        console.log(document.getElementById("rating").innerHTML)
};

const rating = document.getElementById("rating-state");
const thank = document.getElementById("thank");
const button = document.getElementById("submit-btn")
button.addEventListener("click", function() {
    if (choice != 0) {
        console.log("triggered");
        rating.classList.toggle("hidden");
        thank.classList.toggle("hidden");
    }
    else {
        alert("Please select a rating to submit");
    }
});

