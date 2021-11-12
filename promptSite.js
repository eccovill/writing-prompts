const feelings = ["lost","loving","afraid","angry","longing","generous","curious","brave"];
const locations = ["in the forest","at the theatre","at the beach","in space","at a museum","at school","on vacation"];
const locImages = ["forest.jpg","theatre.jpg","beach.jpg","space.jpg","museum.jpg","school.jpg","vacation.jpg"];
const locAltText = ["A forest path","A theatre crowd facing a stage","A beach","A museum room with display cases","An empty classroom","A plane taking off"];
const companions = ["an old friend","an enemy","a lover","a coworker","a roommate","a cat","a sibling","a long-lost relative"];

function createPrompt() {
	const paragraph = document.querySelector("#response");
	const f = feelings[Math.floor(Math.random()*feelings.length)];
	const locInd = Math.floor(Math.random()*locations.length)
  	const l = locations[locInd];
	const imgEl = document.querySelector("#location");
	imgEl.src = "images/" + locImages[locInd];
	imgEl.alt = locAltText[locInd];
  	const c = companions[Math.floor(Math.random()*companions.length)];
  	paragraph.textContent = "You are feeling "+f+" while "+l+" with "+c+".";
}

function toggleLightDark(){
	const element = document.body;
  	element.classList.toggle("dark-mode");
  	const head = document.querySelector("#head");
  	if (head.classList.contains("light-head")){
  		head.classList.replace("light-head","dark-head");
  	}
  	else{
  		head.classList.replace("dark-head","light-head");
  	}
  	const darkButton = document.querySelector("#dark-light");
  	darkButton.classList.toggle("no-disp");
  	const lightButton = document.querySelector("#light-dark");
  	lightButton.classList.toggle("no-disp");
}


const genButton = document.querySelector("#generator");
const darkLightButton = document.querySelector("#dark-light");
const lightDarkButton = document.querySelector("#light-dark");
genButton.addEventListener("click", createPrompt);
darkLightButton.addEventListener("click",toggleLightDark);
lightDarkButton.addEventListener("click",toggleLightDark);
