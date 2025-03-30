// Update Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Visit Counter using LocalStorage
let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);
document.getElementById("visit-count").textContent = visits;
