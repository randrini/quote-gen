const generator = document.querySelector('.box__quote-gen');

generator.addEventListener('click', () => {
	const quote = document.getElementById('quote');
	const quoteAuthor = document.querySelector('.box__cite');
	fetch('https://talaikis.com/api/quotes/random/')
		.then(blob => blob.json())
		.then(data => {
			quote.innerHTML = `<span>"</span>${data.quote}`;
			quoteAuthor.innerHTML = `- ${data.author}`;
		})
		.catch(err => console.log(err));
});
