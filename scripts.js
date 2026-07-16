// Check if there is an internet connection (local server)
const gamesContainer = document.getElementById('games-container');

fetch('games.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <p><span class="tag">${game.tags[0]}</span></p>
                <a href="${game.link}" target="_blank" class="btn">Play Now</a>
            `;
            gamesContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading data:', error));
