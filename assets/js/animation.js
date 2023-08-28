const cardsEl = document.querySelectorAll('.cards img');

	cardsEl.forEach(card => {
	    card.classList.add('sameSpace');
	});

	let timeline = gsap.timeline();
	timeline.fromTo('.cards img', {delay: .8, rotation: -8, zIndex: 0, x:'-130px', stagger: .5}, {delay: .8, rotation: 0, x: 0, y: '-20px', ease: 'back', stagger: .5, onComplete: () => 
	revealCard()});

	let timelineMainCard = gsap.timeline({paused: true});
		timelineMainCard.to('.cards img:nth-last-child(2)', {duration: .8, ease: 'circ', x: '80px', y: '-68px', rotation: '5deg'});
		timelineMainCard.to('.cards img:nth-last-child(2)', {duration: .3, ease: 'circ', x: '150px', rotation: '20deg'});
		timelineMainCard.to('.cards img:nth-last-child(2)', {duration: .8, ease: 'circ', zIndex: '2'});
		timelineMainCard.to('.cards img:nth-last-child(2)', {duration: .8, ease: 'back', x: 0, y: '-20px', rotation: 0});

		timelineMainCard.to('.cards img:nth-last-child(3)', {delay: .8}, {zIndex: 2, duration: 1});

		timelineMainCard.to('.cards img:not(:nth-last-child(2))', {duration: .5, ease: 'power1', x: '-150px', rotation: '-10deg'});
		timelineMainCard.to('.cards img:not(:nth-last-child(2))', {duration: .3, ease: 'circle', rotation: 0});

	function revealCard() {
		let randomNum = Math.floor(Math.random() * 7) + 1;
		const color = game.colors[Math.floor(Math.random() * game.colors.length - 1) + 1];
		const lastSecondCard = cardsEl[cardsEl.length - 2];
		timelineMainCard.resume();
		lastSecondCard.src = `assets/img/${randomNum}_card_${color}.png`;
		lastSecondCard.setAttribute('name', JSON.stringify({color, symbol: randomNum}))
	};
