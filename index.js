const generator = document.querySelector('.box__quote-gen');

const tweet = document.querySelector('.box__tweet');
tweet.setAttribute(
	'href',
	'https://twitter.com/intent/tweet?text=Hello+world+%23quote'
);

generator.addEventListener('click', () => {
	const quote = document.getElementById('quote');
	console.log(tweet);
	const quoteAuthor = document.querySelector('.box__cite');
	fetch('https://talaikis.com/api/quotes/random/')
		.then(blob => blob.json())
		.then(data => {
			quote.classList.add('fade');
			quote.innerHTML = `<span>"</span>${data.quote}`;
			quoteAuthor.innerHTML = `- ${data.author}`;
		})
		.catch(err => console.log(err));
});

// fitText(document.getElementById('quote'));
