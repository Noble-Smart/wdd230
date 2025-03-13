// Select input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener for button click
button.addEventListener('click', () => {
    // Check if input is not blank
    if (input.value !== '') {
        // Create li element
        const li = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');

        // Populate li element with input value
        li.textContent = input.value;

        // Populate delete button textContent with ❌
        deleteButton.textContent = '❌';

        // Append delete button to li
        li.append(deleteButton);

        // Append li to the unordered list
        list.append(li);

        // Add event listener to delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Send focus to the input field
        input.focus();

        // Clear input field
        input.value = '';
    }
});
