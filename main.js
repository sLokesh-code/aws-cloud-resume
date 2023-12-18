const counter = document.querySelector(".counter-number");//links to element in HTML file
async function updateCounter(){
	let response = await fetch("https://vujyid2ixj25vcrjyjyhmdxyjy0rieas.lambda-url.ap-south-1.on.aws/");//lamda's function URL.
	let count = await response.json();
	counter.innerHTML = count;
}

updateCounter();