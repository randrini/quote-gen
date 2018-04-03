const generator = document.querySelector('.box__quote-gen');

generator.addEventListener('click', () => {
	const quote = document.getElementById('quote');
	const quoteAuthor = document.querySelector('.box__cite');
	const tweet = document.querySelector('.box__tweet');
	fetch('https://talaikis.com/api/quotes/random/')
		.then(blob => blob.json())
		.then(data => {
			quote.classList.add('fade');
			quote.innerHTML = `<span>"</span>${data.quote}`;
			quoteAuthor.innerHTML = `- ${data.author}`;
			const tweetLink = `https://twitter.com/intent/tweet?text=${
				data.quote
			}+%23quote`;
			tweet.setAttribute('href', tweetLink);
		})
		.catch(err => console.log(err));
});
