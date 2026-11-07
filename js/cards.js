// Grab our main container and status tags from the HTML layout
const container = document.querySelector('#card-container');
const statusText = document.querySelector('#status'); // renamed slightly to keep clear tracking

// ==========================================
// 1. Create and Display Cards Dynamically
// ==========================================

// Card 1 Setup
const card1 = document.createElement('div'); 
card1.classList.add('card1');                
card1.innerHTML = `
    <h3>Music</h3>
    <p>Listening to melodies and organizing playlists.</p>
`;
container.appendChild(card1);                 

// Card 2 Setup
const card2 = document.createElement('div');
card2.classList.add('card2');                
card2.innerHTML = `
    <h3>Coding</h3>
    <p>Building interactive web apps with JavaScript.</p>
`;
container.appendChild(card2);

// Card 3 Setup
const card3 = document.createElement('div');
card3.classList.add('card3');                
card3.innerHTML = `
    <h3>Movies</h3>
    <p>Watching cinema and matching film story structures.</p>
`;
container.appendChild(card3);

// ==========================================
// 2. Add Click Behavior & Listeners
// ==========================================

card1.addEventListener('click', function() {
    card1.classList.toggle('selected');
    updateStatusCounter(); // Run the counter check immediately after clicking!
});

card2.addEventListener('click', function() {
    card2.classList.toggle('selected');
    updateStatusCounter();
});

card3.addEventListener('click', function() {
    card3.classList.toggle('selected');
    updateStatusCounter();
});

// ==========================================
// 3. Update the Status Message (The Counter)
// ==========================================

function updateStatusCounter() {
    let count = 0;

    // Check each card to see if it currently holds the 'selected' label state
    if (card1.classList.contains('selected')) {
        count = count + 1;
    }
    if (card2.classList.contains('selected')) {
        count = count + 1;
    }
    if (card3.classList.contains('selected')) {
        count = count + 1;
    }

    // Update the message text dynamically based on the calculated count number
    if (count === 0) {
        statusText.textContent = "No interests selected.";
    } else if (count === 1) {
        statusText.textContent = "1 interest selected.";
    } else {
        statusText.textContent = count + " interests selected.";
    }
    
    console.log("Current active interest count matches: " + count);
}
