const appCards = document.querySelector('#app .cards');

	class Game {

		colors = ["yellow", "blue", "green", "red"];

		generateCards(quantity) {
			let i = 0;
			while (i < quantity) {
				const img = document.createElement('img');
				img.src = 'assets/img/uno.png';
				img.setAttribute('name', JSON.stringify({ color: 'black', symbol: 'uno' }));
				appCards.appendChild(img);
				i++;
			}
		}

		generateRandomCards() {
			const quantity = 7;
			let i = 0;
			while (i < quantity) {
				const img = document.createElement('img');
				const randomNum = Math.floor(Math.random() * this.colors.length);
				const color = this.colors[randomNum];
				img.src = `assets/img/${i}_card_${color}.png`;
				img.setAttribute('name', JSON.stringify({ color, symbol: i }));
				appCards.appendChild(img);
				i++;
			}
		}

	}

	const game = new Game();
	game.generateCards(7);

