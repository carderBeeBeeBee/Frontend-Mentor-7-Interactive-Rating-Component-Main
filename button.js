const rating = document.getElementById("rating");
const thank = document.getElementById("thank");
const button = document.getElementById("button")
button.addEventListener("click", function() {
    console.log("triggered");
    rating.classList.toggle("hidden");
    thank.classList.toggle("hidden");
});
