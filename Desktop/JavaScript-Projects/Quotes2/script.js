const quoteText = document.getElementById('quoteText');
const authorName = document.getElementById('authorName');


// fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "quotes15.p.rapidapi.com",
// 		"x-rapidapi-key": "e64b538230msh00bbd2aa8b989fdp152058jsn05f4d224c600"
// 	}
// })
// .then(response => response.json())
// .then(data => {
// 	quoteText.innerHTML=data.content;
// 	authorName.innerHTML=data.originator.name;
// })
// .catch(err => {
// 	console.error(err);
// });

async function getQuote(){
	const apiUrl = "https://quotes15.p.rapidapi.com/quotes/random/";
	try{
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
	} catch(err){
		console.log(err);
	}
}