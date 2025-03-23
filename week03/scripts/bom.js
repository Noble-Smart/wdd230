// Select input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');

// Retrieve stored chapters or initialize empty array
let chaptersArray = getChapterList() || [];

// Display stored chapters on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Button event listener
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {  // Check if input is not empty
        displayList(input.value); // Display the new chapter
        chaptersArray.push(input.value); // Add to the array
        setChapterList(); // Save to localStorage
        input.value = ''; // Clear input field
        input.focus(); // Refocus on input
    }
});

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    // Delete button event listener
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Function to update localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter from storage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove ❌ symbol
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
