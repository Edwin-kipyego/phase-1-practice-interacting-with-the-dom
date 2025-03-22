document.addEventListener("DOMContentLoaded", function() {
    let counter = 0;
    let likes = {};
    let interval;
    let isPaused = false;
  
    const counterDisplay = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');
  
    // Start the timer
    function startTimer() {
      interval = setInterval(() => {
        if (!isPaused) {
          counter++;
          counterDisplay.textContent = counter;
        }
      }, 1000);
    }
  
    // Increment counter
    plusButton.addEventListener('click', () => {
      counter++;
      counterDisplay.textContent = counter;
    });
  
    // Decrement counter
    minusButton.addEventListener('click', () => {
      counter--;
      counterDisplay.textContent = counter;
    });
  
    // Like the current counter value
    heartButton.addEventListener('click', () => {
      if (!likes[counter]) {
        likes[counter] = 1;
      } else {
        likes[counter]++;
      }
  
      // Display the likes
      const likeItem = document.createElement('li');
      likeItem.textContent = `Number ${counter} has been liked ${likes[counter]} times`;
      likesList.appendChild(likeItem);
    });
  
    // Pause and resume functionality
    pauseButton.addEventListener('click', () => {
      if (isPaused) {
        isPaused = false;
        pauseButton.textContent = 'Pause';
      } else {
        isPaused = true;
        pauseButton.textContent = 'Resume';
      }
    });
  
    // Comment submission
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const comment = commentInput.value.trim();
      if (comment) {
        const commentItem = document.createElement('p');
        commentItem.textContent = comment;
        commentsList.appendChild(commentItem);
        commentInput.value = ''; // Clear the input after submission
      }
    });
  
    // Start the counter when the page loads
    startTimer();
  });
  